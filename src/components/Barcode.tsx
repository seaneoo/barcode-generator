import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";
import { BarcodeFormats } from "../types";

type Props = {
  value?: string;
  format?: BarcodeFormats;
};

function Barcode({ value = "", format = "CODE128" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef !== null && canvasRef.current !== null)
      JsBarcode(canvasRef.current, value, { format });
  }, [value, format]);

  return <canvas ref={canvasRef}></canvas>;
}

export default Barcode;
