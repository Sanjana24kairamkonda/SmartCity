import React from 'react';
import MyNavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCarousel from './ImageCarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Your Login component
import Sidebar from './Sidebar';
import Mainpage from './Mainpage';
import CategoryPage from './CategoryPage';
import Maincontent from './Maincontent';
import CategoryDetail from './CategoryDetail';
import ItemDetail from './ItemDetail';
const App = () => {
  return (
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<ImageCarousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/page" element={<Mainpage />} />
          <Route path="/maincontent" element={<Maincontent />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/category/:categoryId/item/:itemId" element={<ItemDetail />} />
        </Routes>
      </div>
  );
}

export default App;

