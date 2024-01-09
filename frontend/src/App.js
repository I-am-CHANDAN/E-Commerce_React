import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/footer';
import mens_banner from '../src/Components/Assets/banner_mens.png'
import women_banner from '../src/Components/Assets/banner_women.png'
import kids_banner from '../src/Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* home page will render on "/" */}
          {/* shop category page will render and send Props from here*/}
          <Route path='/' element={<Shop />}></Route>
          <Route path='/men' element={<ShopCategory banner={mens_banner} category="men" />}></Route>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />}></Route>

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>

          <Route path='/cart' element={<Cart />}></Route>

          <Route path='/login' element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
