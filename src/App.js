
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import sedan_banner from './Components/Assets/sedan.jpeg';
import suv_banner from './Components/Assets/suv.jpeg';
import lux_banner from './Components/Assets/lux.jpeg';
import Checkout from './Components/Checkout/Checkout';
import LOG from './Components/LOG/LOG';
import Ghar from './Components/Ghar/Ghar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/sedan" element={<ShopCategory banner ={sedan_banner} category="sedan"/>} />
        <Route path="/suv" element={<ShopCategory banner ={suv_banner} category="suv"/>} />
        <Route path="/lux" element={<ShopCategory banner ={lux_banner} category="lux"/>} />
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/altlogin" element={<LOG/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/Ghar" element={<Ghar/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;