import JsBarcode from "jsbarcode";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context";
import { BarcodeFormats } from "../types";

type Props = {
  value?: string;
  format?: BarcodeFormats;
};

function Barcode({ value = "", format = "CODE128" }: Props) {
  const ctx = useContext(AppContext);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef !== null && svgRef.current !== null)
      try {
        JsBarcode(svgRef.current, value, { format });
        ctx?.setError("");
      } catch (error) {
        ctx?.setText("");
        ctx?.setError(error as string);
      }
  }, [value, format]);

  return <svg ref={svgRef}></svg>;
}

export default Barcode;
