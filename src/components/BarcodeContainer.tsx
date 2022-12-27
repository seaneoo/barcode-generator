import styled from "styled-components";
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
  return (
    <_Wrapper>
      <Barcode value="000000000000" format="UPC" />
    </_Wrapper>
  );
}

export default BarcodeContainer;
