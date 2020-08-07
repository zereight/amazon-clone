import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="amazon banner"
      />
      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
        <Product
          id="1234"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="1235"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
        <Product
          id="1236"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
        <Product
          id="1237"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="1238"
          title="Adidas shoes"
          price={11.96}
          rating={5}
          image="https://assets.adidas.com/images/w_1200,f_auto,q_auto:sensitive,fl_lossy/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
        ></Product>
      </div>

      {/* product */}
    </div>
  );
}

export default Home;
