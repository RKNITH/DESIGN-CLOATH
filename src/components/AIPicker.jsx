import React from "react";
import styled from "styled-components";

const AIPickerContainer = styled.div`
  position: absolute;
  min-width: 180px;
  top: 80px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.07);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const AIPickerTextArea = styled.textarea`
  margin-top: 4px;
  padding: 8px;
  background: transparent;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  resize: vertical;
  font-size: 16px;
`;
const CustomButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 36px;
  text-align: center;
  border-radius: 10px;
  background: green;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 12px 18px;
  }
`;

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <AIPickerContainer>
      <AIPickerTextArea
        placeholder="Write Prompt to genetrate with AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <>
        {generatingImg ? (
          <CustomButton
            style={{
              cursor: "not-allowed",
              opacity: "0.4",
            }}
          >
            Generating your Logo ...
          </CustomButton>
        ) : (
          <CustomButton onClick={() => handleSubmit("logo")}>
            Set AI Logo
          </CustomButton>
        )}
      </>
    </AIPickerContainer>
  );
};

export default AIPicker;
