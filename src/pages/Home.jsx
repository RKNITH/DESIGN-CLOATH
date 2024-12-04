import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../utils/motion";
import { useSnapshot } from "valtio";

import state from "../store";

const Wrapper = styled.div`
  position: absolute;
  padding: 60px 80px;
  z-index: 1;
  @media (max-width: 800px) {
    padding: 22px;
  }
`;

const Logo = styled.img`
  height: 60px;
  transition: all 0.3 ease;
  @media (max-width: 800px) {
    height: 32px;
  }
`;

const Title = styled.div`
  font-size: 90px;
  font-weight: 900;
  margin-bottom: 40px;
  margin-top: 40px;
  transition: all 0.3 ease;
  @media (max-width: 800px) {
    font-size: 36px;
    margin-bottom: 16px;
    margin-top: 10px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
  margin-bottom: 50px;
  line-height: 30px;
  transition: all 0.3 ease;
  @media (max-width: 800px) {
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 24px;
  }
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 500;
  min-width: 180px;
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

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <Wrapper>
      {snap.intro && (
        <AnimatePresence>
          <motion.section {...slideAnimation("left")}>
            <motion.header>
              <Logo src="./gfg-logo.png" />
            </motion.header>
          </motion.section>

          <motion.div {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <Title>
                Design. <br /> Wear. Express.
              </Title>
            </motion.div>

            <motion.div {...headContentAnimation}>
              <Desc>
                Unleash Your Style:
                <strong> Design Your Own Custom T-Shirts ! </strong>Elevate your
                wardrobe with personalized flair. Our website offers an
                intuitive platform for crafting unique and bespoke t-shirt
                designs. Start designing today and wear your creativity!
              </Desc>

              <Button onClick={() => (state.intro = false)}>
                Create Your Design
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};

export default Home;
