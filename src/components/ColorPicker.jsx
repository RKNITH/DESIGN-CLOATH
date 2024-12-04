import React from "react";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
`;

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <Wrapper>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </Wrapper>
  );
};

export default ColorPicker;
