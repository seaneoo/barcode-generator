import { useContext } from "react";
import styled from "styled-components";
import { BarcodeContext } from "../barcodeContexts";
import BarcodeContainer from "./BarcodeContainer";
import Form from "./Form";
import Header from "./Header";

const _Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

function AppContainer() {
  const ctx = useContext(BarcodeContext);

  return (
    <>
      <Header />
      <_Main>
        <Form />
        {ctx?.text !== "" && <BarcodeContainer />}
      </_Main>
    </>
  );
}

export default AppContainer;
