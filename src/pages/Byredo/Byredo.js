import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/Byredo Ben Gorham-main.jpg";
import Logo from "../../Image/B2B-Website-UI/Byredo logo.jpg";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/Eau-de-Parfum-Bal-Dafrique.png";
import Product02 from "../../Image/Top-Products/Bibliotheque_Candle_240h.png";
import Product03 from "../../Image/Top-Products/r-wash.png";
import Product04 from "../../Image/Top-Products/R-body-lotion.png";
import Product05 from "../../Image/Top-Products/HandWash-Suede-3000x3000.png";

const Byredo = () => {
  const options = {
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="13" viewBox="0 0 42 13" fill="none">' +
        '<path d="M0.357289 6.71437L9.62174 12.273C10.155 12.593 10.8333 12.2089 10.8333 11.587L10.8333 1.41296C10.8333 0.79112 10.155 0.407029 9.62174 0.72696L0.357289 6.28563C0.195455 6.38273 0.195455 6.61727 0.357289 6.71437Z" fill="#7F7F7F"/>' +
        '<path d="M10.8333 6.5L41.1667 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
      '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="13" viewBox="0 0 43 13" fill="none">' +
        '<path d="M41.8093 6.28563L32.5449 0.726957C32.0117 0.407025 31.3333 0.791116 31.3333 1.41295L31.3333 11.587C31.3333 12.2089 32.0117 12.593 32.5449 12.273L41.8093 6.71437C41.9712 6.61727 41.9712 6.38273 41.8093 6.28563Z" fill="#7F7F7F"/>' +
        '<path d="M31.3333 6.5L0.999975 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <NavbarHeader />
      <section>
        <div className="container">
          <div className="mt-5"></div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 m-auto">
              <div className="BnadLogo w-100">
                <img className="img-fluid" src={main} />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-auto ">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 borderRight">
                  <img className="img-fluid heightWidth" src={Logo} />
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                  <h1 className="titleWithLogo">
                    REINVENTING THE WORLD OF LUXURY.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Byredo is a European luxury brand founded in Stockholm in 2006
                  by Ben Gorham, with an ambition to translate memories and
                  emotions into products and experiences.
                </p>
                <p class="seti">
                  Byredo is reinventing the world of luxury through a new
                  approach, where creation is led by emotions, expressing a full
                  and limitless brand universe.
                </p>
                <p class="seti">
                  Byredo conceives objects using the highest quality materials
                  available, and high-end design details to fuel a renewed
                  approach to modern luxury.
                </p>
                <p class="seti">
                  Byredo creates and develops a range of products such as
                  fragrance, makeup, home, leather goods and accessories, and is
                  sold in more than 40 countries in a very high-end exclusive
                  network worldwide. We believe that through creativity, we are
                  able to develop timeless products, both meaningful and
                  inspirational, to people and their lives.
                </p>
                <p class="seti">
                  
                  A native Swede, born to an Indian mother and a Canadian
                  father, Ben grew up in Toronto, New York and Stockholm. He
                  graduated from the Stockholm art school with a degree in fine
                  arts, but a chance meeting with perfumer Pierre Wulff
                  convinced him that he'd rather create fragrances than
                  paintings. With no formal training in the field, Gorham, 31
                  years old , sought out the services of world renowned
                  perfumers Olivia Giacobetti and Jerome Epinette, explaining
                  his olfactory desires and letting them create the
                  compositions. As an outsider in the beauty industry, Ben is
                  somewhat of an anomaly and has been recognized for his
                  personal style and connection to fashion and art in several
                  international magazines such as French Vogue, Vanity Fair,
                  Elle, V Magazine and Fantastic Man to name a few.
                </p>
              </div>
            </div>
          </div>
          <div className="TopProducts NewArriavalsList">
            <h3 className="mt-5">TOP PRODUCTS</h3>
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>Eau de Parfum</h4>
                    <p>
                      (Unisex fragrance) Fragrance Foundation Awards 2022: Young
                      Rose & Mixed Emotions
                    </p>

                    <a href="https://portal.beautyfashionsales.com/">
                      Shop The Collection
                    </a>
                    <div className="fitContent">
                      <img src={Product01} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>240g Candle</h4>
                    <p>
                      (Standard-sized luxury scented candle) InStyle Best Candle
                      2022: Symphonique
                    </p>
                    <a href="https://portal.beautyfashionsales.com/">
                      Shop The Collection
                    </a>
                    <div className="fitContent">
                      <img src={Product02} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>Body Wash</h4>
                    <p>
                      (Scented body cleanser) Birdie Best Body Washes 2023 Vogue
                      Best Body Washes 2021 Allure Best of Beauty 2015
                    </p>
                    <a href="https://portal.beautyfashionsales.com/">
                      Shop The Collection
                    </a>
                    <div className="fitContent">
                      <img src={Product03} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>Body Lotion</h4>
                    <p>(Scented lightweight body moisturizer)</p>
                    <a href="https://portal.beautyfashionsales.com/">
                      Shop The Collection
                    </a>
                    <div className="fitContent">
                      <img src={Product04} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>Hand Wash</h4>
                    <p>
                      (Liquid hand soap) WWD 25 Best Luxury Hand Soaps 2022
                      NewBeauty Editor-Approved Hand Washes 2021
                    </p>
                    <a href="https://portal.beautyfashionsales.com/">
                      Shop The Collection
                    </a>
                    <div className="fitContent">
                      <img src={Product05} />
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <FooterBfsg />
    </div>
  );
};

export default Byredo;
