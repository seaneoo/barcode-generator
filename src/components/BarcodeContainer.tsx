import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context";
import Barcode from "./Barcode";

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

function BarcodeContainer() {
  const ctx = useContext(AppContext);

  if (ctx !== null && ctx.text !== "") {
    return (
      <_Wrapper>
        <Barcode value={ctx.text} format={ctx.format} />
      </_Wrapper>
    );
  }

  return <></>;
}

export default BarcodeContainer;
