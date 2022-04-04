import "./App.css";
import "antd/dist/antd.css";
import JewelryContextProvider from "./contexts/jewelryContext";

import Routing from "./Routing";
import CartContextProvider from "./contexts/cartContext";
import AuthContextProvider from "./contexts/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <JewelryContextProvider>
        <CartContextProvider>
          <Routing />
        </CartContextProvider>
      </JewelryContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
