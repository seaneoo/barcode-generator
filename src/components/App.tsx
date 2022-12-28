import { useState } from "react";
import { AppContext } from "../context";
import GlobalStyles from "../globalStyles";
import { BarcodeFormats } from "../types";
import Main from "./Main";

function App() {
  const [text, setText] = useState("");
  const [format, setFormat] = useState<BarcodeFormats>("CODE128");
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{ text, setText, format, setFormat, error, setError }}
    >
      <GlobalStyles />
      <Main />
    </AppContext.Provider>
  );
}

export default App;
