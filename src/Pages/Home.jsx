import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Products from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Imagegrid from "../components/Imagegrid/Imagegrid";
import List from "../components/List/List.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>     
      <Header />
      <Banner />
      <Categories />
      <ProductCarousel />
      <Imagegrid />
      <Products />
      <List />
      <Footer />
    </>
  );
}

export default Home;
