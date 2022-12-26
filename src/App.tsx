import { Fragment } from "react";
import styled from "styled-components";
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
      <_Main></_Main>
    </Fragment>
  );
}

export default App;
