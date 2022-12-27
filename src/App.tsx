import { useState } from "react";
import Container from "./components/Container";
import { BarcodeContext } from "./barcodeContexts";
import GlobalStyles from "./globalStyles";

function App() {
  const [barcodeText, setBarcodeText] = useState("");

  return (
    <BarcodeContext.Provider value={{ barcodeText, setBarcodeText }}>
      <GlobalStyles />
      <Container />
    </BarcodeContext.Provider>
  );
}

export default App;
