import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Fertilizers from "./pages/Fertilizers";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import CustomerSignin from "./signin/CustomerSignin"; // Ensure the path is correct
import CustomerLogin from "./login/CustomerLogin"; 
import MerchantLogin from "./login/MerchantLogin"; // Assuming this is correct
import MerchantSignin from "./signin/MerchanSignint"; // Fixed typo here
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fertilizers" element={<Fertilizers />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer-signin" element={<CustomerSignin />} />
          <Route path="/merchant-signin" element={<MerchantSignin />} />
          <Route path="/merchant-login" element={<MerchantLogin />} /> 
          <Route path="/customer-login" element={<CustomerLogin />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
