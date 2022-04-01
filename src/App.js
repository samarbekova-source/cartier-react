import "./App.css";
import "antd/dist/antd.css";
import JewelryContextProvider from "./contexts/jewelryContext";

import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <JewelryContextProvider>
        <Routing />
      </JewelryContextProvider>
    </div>
  );
}

export default App;
