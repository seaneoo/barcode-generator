import JsBarcode, { Options } from "jsbarcode";
import { useEffect, useRef } from "react";

/**
 * TOOD: Update this component to include proper customizations and accept user inputs
 */

interface Props {
  options: Options;
}

function Barcode({ options }: Props) {
  const elm = useRef<SVGSVGElement>(null);

  useEffect(() => {
    JsBarcode(elm.current, "045496883386", options);
  }, []);

  return <svg ref={elm}></svg>;
}

export default Barcode;
