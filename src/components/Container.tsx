import styled from "styled-components";
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

function Container() {
  return (
    <>
      <Header />
      <_Main>
        <Form />
        <BarcodeContainer />
      </_Main>
    </>
  );
}

export default Container;
