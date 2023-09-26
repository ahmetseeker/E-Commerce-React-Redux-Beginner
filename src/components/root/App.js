import {Container} from "reactstrap"
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import {Routes, Route} from "react-router-dom"
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div className="App">
      <Container>
        <Navi/>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/products" element={<Dashboard/>}/>
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
          <Route path="/saveproduct" element={<AddOrUpdateProduct/>}/>
          <Route path="/cart" element={<CartDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
