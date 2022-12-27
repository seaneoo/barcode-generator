import { createContext } from "react";

type Context = {
  barcodeText: string;
  setBarcodeText: React.Dispatch<React.SetStateAction<string>>;
};

export const BarcodeContext = createContext<Context | null>(null);
