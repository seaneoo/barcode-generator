import { useState } from "react";
import AppContainer from "./components/AppContainer";
import { BarcodeContext } from "./barcodeContexts";
import GlobalStyles from "./globalStyles";
import type { BarcodeFormats } from "./components/Barcode";

function App() {
  const [text, setText] = useState("");
  const [format, setFormat] = useState<BarcodeFormats>("CODE128");

  return (
    <BarcodeContext.Provider value={{ text, setText, format, setFormat }}>
      <GlobalStyles />
      <AppContainer />
    </BarcodeContext.Provider>
  );
}

export default App;
