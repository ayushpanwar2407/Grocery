import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

import Categories from './components/Categories';
import Products from './components/Product';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCarousel from './components/ProductCarousel';
import Imagegrid from './components/Imagegrid';


function App() {
  return (
    <>
      <Header />
       
      <Banner />
      <Categories />
      <ProductCarousel/> 
      <Imagegrid/>
      <Products />
      <Footer />
     
    </>
  );
}

export default App;
