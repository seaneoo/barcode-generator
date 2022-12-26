import { Fragment } from "react";
import styled from "styled-components";
import Barcode from "./components/Barcode";
import GlobalStyles from "./globalStyles";

const _Main = styled.main`
  min-height: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <_Main>
        <Barcode options={{ format: "UPC" }} />
      </_Main>
    </Fragment>
  );
}

export default App;
