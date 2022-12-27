import React, { useContext, useRef } from "react";
import styled, { css } from "styled-components";
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

const inputStyles = css`
  padding: 0.5rem;
  font-family: inherit;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const _Input = styled.input`
  ${inputStyles}
`;

const _Select = styled.select`
  ${inputStyles}
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

const formats = [
  "CODE128",
  "UPC",
  "EAN13",
  "EAN8",
  "EAN5",
  "EAN2",
  "CODE39",
  "ITF-14",
  "MSI",
  "Pharmacode",
  "Codabar",
];

function Form() {
  const ctx = useContext(BarcodeContext);
  const input = useRef<any>();
  const format = useRef<any>();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    ctx?.setText(input.current?.value);
    ctx?.setFormat(format.current?.value);
  };

  return (
    <_Form onSubmit={submit}>
      <_Group>
        <label htmlFor="barcodeInput">Text</label>
        <_Input
          ref={input}
          type="text"
          autoComplete="off"
          name="barcodeInput"
          id="barcodeInput"
        />
      </_Group>

      <_Group>
        <label htmlFor="barcodeFormat">Format</label>
        <_Select ref={format} name="barcodeFormat" id="barcodeFormat">
          {formats.map((f, i) => {
            return (
              <option key={i} value={f}>
                {f}
              </option>
            );
          })}
        </_Select>
      </_Group>

      <_Button type="submit">Generate Barcode</_Button>
    </_Form>
  );
}

export default Form;
