import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";

type BarcodeFormats =
  | "CODE128"
  | "UPC"
  | "EAN13"
  | "EAN8"
  | "EAN5"
  | "EAN2"
  | "CODE39"
  | "ITF-14"
  | "MSI"
  | "Pharmacode"
  | "Codabar";

type Props = {
  value?: string;
  format?: BarcodeFormats;
};

function Barcode({ value = "", format = "CODE128" }: Props) {
  const elm = useRef<SVGSVGElement>(null);

  useEffect(() => {
    JsBarcode(elm.current, value, { format });
  }, []);

  return <svg ref={elm}></svg>;
}

export default Barcode;
