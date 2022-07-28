import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Reviews from './Reviews'
import Cta from './Cta'
import "./styles.css";
import ProductSection from "./ProductSection";
import Header from "./Header";

const App = () => {
    return (
        <div className="max-w-screen-2xl mx-auto font">
            <Header/>
            <ProductSection/>
            <Reviews/>
            <Cta/>
        </div>
    );
};

export default App;
