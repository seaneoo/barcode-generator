import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { BarcodeContext } from "../barcodeContexts";

const _Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const _Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const _Input = styled.input`
  padding: 0.5rem;
  font-family: inherit;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const _Button = styled.button`
  all: unset;
  padding: 0.5rem 1rem;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
`;

function Form() {
  const ctx = useContext(BarcodeContext);
  const input = useRef<any>();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    ctx?.setBarcodeText(input.current?.value);
  };

  return (
    <_Form onSubmit={submit}>
      <_Group>
        <label htmlFor="barcodeInput">Text</label>
        <_Input ref={input} type="text" name="barcodeInput" id="barcodeInput" />
      </_Group>

      <_Button type="submit">Generate Barcode</_Button>
    </_Form>
  );
}

export default Form;
