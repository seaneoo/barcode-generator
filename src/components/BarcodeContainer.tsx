import { useContext } from "react";
import styled from "styled-components";
import { BarcodeContext } from "../barcodeContexts";
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
  const ctx = useContext(BarcodeContext);

  return (
    <_Wrapper>
      {ctx?.barcodeText !== "" && (
        <Barcode value={ctx?.barcodeText} format="UPC" />
      )}
    </_Wrapper>
  );
}

export default BarcodeContainer;
