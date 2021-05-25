import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Hero from "./component/Hero";
import Products from "./component/Products";
import { productData } from "./component/Products/productData";
import { extrasData } from "./component/Extras/ExtrasData";
import Feature from "./component/Feature";
import Extras from "./component/Extras";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Extras heading="Choose your dessert" data={extrasData} />
      <Footer />
    </Router>
  );
}

export default App;
