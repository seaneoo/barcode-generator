import { useState } from "react";
import AppContainer from "./components/AppContainer";
import { BarcodeContext } from "./barcodeContexts";
import GlobalStyles from "./globalStyles";

function App() {
  const [barcodeText, setBarcodeText] = useState("");

  return (
    <BarcodeContext.Provider value={{ barcodeText, setBarcodeText }}>
      <GlobalStyles />
      <AppContainer />
    </BarcodeContext.Provider>
  );
}

export default App;
