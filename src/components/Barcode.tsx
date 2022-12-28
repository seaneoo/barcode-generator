import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";
import { BarcodeFormats } from "../types";

type Props = {
  value?: string;
  format?: BarcodeFormats;
};

function Barcode({ value = "", format = "CODE128" }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef !== null && svgRef.current !== null)
      try {
        JsBarcode(svgRef.current, value, { format });
      } catch (error) {
        console.error(error);
      }
  }, [value, format]);

  return <svg ref={svgRef}></svg>;
}

export default Barcode;
