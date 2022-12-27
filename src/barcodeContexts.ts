import React, { createContext } from "react";
import type { BarcodeFormats } from "./components/Barcode";

type Context = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  format: BarcodeFormats;
  setFormat: React.Dispatch<React.SetStateAction<BarcodeFormats>>;
};

export const BarcodeContext = createContext<Context | null>(null);
