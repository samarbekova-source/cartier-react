import "./App.css";
import "antd/dist/antd.css";
import JewelryContextProvider from "./contexts/jewelryContext";

import Routing from "./Routing";
import CartContextProvider from "./contexts/cartContext";

function App() {
  return (
    <div className="App">
      <JewelryContextProvider>
        <CartContextProvider>
          <Routing />
        </CartContextProvider>
      </JewelryContextProvider>
    </div>
  );
}

export default App;
