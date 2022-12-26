import { Fragment } from "react";
import styled from "styled-components";
import Barcode from "./components/Barcode";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";

const _Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <_Main>
        <Barcode options={{ format: "UPC" }} />
      </_Main>
    </Fragment>
  );
}

export default App;
