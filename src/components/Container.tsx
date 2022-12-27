import styled from "styled-components";
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
      <_Main></_Main>
    </>
  );
}

export default Container;
