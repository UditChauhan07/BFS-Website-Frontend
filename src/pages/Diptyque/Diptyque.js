import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/Diptyque-main.webp";
import Logo from "../../Image/B2B-Website-UI/Diptyque-logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/philosykos-face-edp..png";
import Product02 from "../../Image/Top-Products/Eau Rose Eau de Toilette.png";
import Product03 from "../../Image/Top-Products/candle_baies_190g.png";
import Product04 from "../../Image/Top-Products/in-out-candle.png";
import Product05 from "../../Image/Top-Products/FIGUIER Room spray.png";

const Diptyque = () => {
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
                  <h1 className="titleWithLogo">AN OLFACTORY JOURNEY.</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  For Diptyque, creating fragrances is an art and art is a
                  journey. An imaginary journey of the mind and the senses
                  across olfactory landscapes, far from the paths that others
                  take, in search of rare raw materials and unexpected accords.
                  A journey between the past and the future, between tradition
                  and the avant-garde, toward another place where history, new
                  ideas, and disruption combine.
                </p>

                <p class="seti">
                  Diptyque is always in between two worlds, finding its balance
                  between dreams and reality, free from traditional gender codes
                  or cultural boundaries, committed to developing connections
                  and blends that nourish its inspiration. It is a creator of
                  essences and images where the eye, the hand, and the nose are
                  united to constantly revisit the surprising world of Haute
                  Parfumerie.
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
                      (Unisex fragrance) The Fragrance Foundation Awards: Best
                      New Women's...
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
                    <h4>Eau de Toilette</h4>
                    <p>
                      (Unisex fragrance; lighter concentration than Eau de
                      Parfum)
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
                    <h4>190g Candle</h4>
                    <p>
                      (Standard-sized luxury scented candle in a glass vessel)
                      Allure Best of Beauty 2022...
                     
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
                    <h4>1500g Candle</h4>
                    <p>
                      (Large-format Indoor/Outdoor Candle in a hand-made ceramic
                      vessel with 5 wicks)
                    </p>
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
                    <h4>Room Spray</h4>
                    <p>
                      (Scented mist for fragrancing the home) GQ Best Room
                      Sprays Glamour UK ...
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

export default Diptyque;
