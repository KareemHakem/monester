import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProductsPage from "./pages/productsPage/ProductsPage";
import Cart from "./pages/Cart/Cart";
import ProductsDetailPage from "./pages/productsDetailPage/productsDetailPage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Todo from "./pages/Todo";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      {/* <Todo /> */}
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>

        <Route exact path="/Cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
        {/* :id the id dynamic */}
        <Route exact path="/products/:id">
          <ProductsDetailPage cart={cart} setCart={setCart} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
