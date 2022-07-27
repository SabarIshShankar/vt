import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Reviews from './Reviews'
import Cta from './Cta'
import "./styles.css";
import ProductSection from "./ProductSection";
import Header from "./Header";
import AboutBrand from "./About";

const App = () => {
    return (
        <div className="max-w-7xl mx-auto font">
            <Header/>
            <ProductSection/>
            <Reviews/>
            <Cta/>
            <AboutBrand/>
        </div>
    );
};

export default App;
