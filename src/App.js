import styled from "styled-components";
import Home from "./pages/Home";
import TshirtCustomize from "./pages/TshirtCustomize";
import Canvas from "./canvas";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Home />
      <TshirtCustomize />
      <Canvas />
    </Wrapper>
  );
}

export default App;
