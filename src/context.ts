import React, { createContext } from "react";
import { BarcodeFormats } from "./types";

type Context = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  format: BarcodeFormats;
  setFormat: React.Dispatch<React.SetStateAction<BarcodeFormats>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<Context | null>(null);
