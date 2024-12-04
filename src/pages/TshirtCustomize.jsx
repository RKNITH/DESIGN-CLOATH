import React, { useState } from "react";
import styled from "styled-components";
import { useSnapshot } from "valtio";

import state from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../utils/motion";
import Tabs from "../components/Tabs";
import { download } from "../assets";
import { APIKEY, EditorTabs } from "../utils/constants";
import { downloadCanvasToImage, reader } from "../utils/helper";
import ColorPicker from "../components/ColorPicker";
import FilePicker from "../components/FilePicker";
import AIPicker from "../components/AIPicker";
import { Configuration, OpenAIApi } from "openai";
import { DecalTypes } from "../utils/constants";

const Button = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 20px;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 30px;
  background: green;
  text-align: center;
  border-radius: 10px;
  color: white;
  width: fit-content;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 12px 20px;
    min-width: 50px;
  }
`;

const TabsContainer = styled.div`
  position: absolute;
  display: flex;
  background: rgba(255, 255, 255, 0.25);
  z-index: 1;
  top: 10px;
  left: 20px;
  width: min-content;
  padding: 6px 14px;
  gap: 22px;
  box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.07);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const TshirtCustomize = () => {
  const snap = useSnapshot(state);
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState("");
  const [generatingImage, setGeneratingImage] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImage}
            handleSubmit={generateLogo}
          />
        );
      default:
        return null;
    }
  };

  const generateLogo = async (type) => {
    if (!prompt) return alert("Please enter a prompt!!");
    setGeneratingImage(true);

    const config = new Configuration({
      apiKey: APIKEY,
    });
    const openai = new OpenAIApi(config);

    try {
      const response = await openai.createImage({
        prompt,
        n: 1,
        size: "1024x1024",
        response_format: "b64_json",
      });
      const data = await response.data.data[0].b64_json;
      handelDecals(type, `data:image/png;base64,${data}`);
    } catch (error) {
      alert(error);
    } finally {
      setGeneratingImage(false);
      setPrompt("");
      setActiveEditorTab("");
    }
  };

  const readFile = async (type) => {
    reader(file).then((result) => {
      handelDecals(type, result);
      setActiveEditorTab("");
    });
  };

  const handelDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
  };

  return (
    <>
      {!snap.intro && (
        <AnimatePresence>
          <motion.div {...fadeAnimation}>
            <Button onClick={() => (state.intro = true)}>Go Back</Button>
          </motion.div>

          <motion.div key="custom" {...slideAnimation("left")}>
            <TabsContainer>
              {EditorTabs.map((tab) => (
                <Tabs
                  key={tab.name}
                  tab={{
                    name: tab.name,
                    icon: tab.icon,
                  }}
                  handelClick={() => setActiveEditorTab(tab.name)}
                />
              ))}
              <Tabs
                key="Download"
                tab={{
                  name: "Download",
                  icon: download,
                }}
                handelClick={() => downloadCanvasToImage()}
              />
              {generateTabContent()}
            </TabsContainer>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default TshirtCustomize;
