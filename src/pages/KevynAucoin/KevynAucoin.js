import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/kevy-auc-main.png";
import Logo from "../../Image/B2B-Website-UI/Kevyn Aucoin-logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/THE VOLUME MASCARA OPEN..png";
import Product02 from "../../Image/Top-Products/Eyelash curler.png";
import Product03 from "../../Image/Top-Products/KA_Glass Glow Face_Product.png";
import Product04 from "../../Image/Top-Products/1. Sensual Skin Enhancer_05.png";
import Product05 from "../../Image/Top-Products/CONTOUR BOOK.png";

const KevynAucoin = () => {
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
                  <img className="img-fluid " src={Logo} />
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                  <h1 className="titleWithLogo">BEAUTY BELONGS TO THE BRAVE</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Kevyn Aucoin Beauty was founded in 2001 by one of the most
                  iconic and influential makeup artists of all time. In the 90s,
                  Kevyn became the first celebrity makeup artist with clients
                  like Cindy Crawford, Naomi Campbell, Kate Moss, Cher, Whitney
                  Houston, Madonna, Liza Minelli, Barbara Streisand, Tina
                  Turner, and Jennifer Lopez. He perfected and brought fame to
                  many iconic makeup techniques like contouring and the “J.Lo
                  glow” leading him to become the first-ever makeup artist to
                  receive a CFDA Award .
                </p>
                <p class="seti">                  
                  Kevyn tragically passed away in 2002, but not before launching
                  his legacy brand– Kevyn Aucoin Beauty, where Kevyn’s spirit
                  lives on today: It’s unapologetic, brave, and rather quite
                  fearless.
                </p>
                <p class="seti">                  
                  Kevyn believed that every woman is beautiful within, and
                  makeup was simply his tool for helping her discover that
                  beauty. He was a man and an artist decades ahead of his time,
                  which paved the way for innovative, award-winning products,
                  high-performance formulas, and textures.
                </p>
                <p class="seti">
                 
                  His luxurious textures and expansive shade ranges have had a
                  broad appeal globally for 20 years, when most brands had a
                  limited shade range. He was a true industry pioneer who
                  championed inclusivity, originality, empowerment and
                  education, which remain pillars of the brand today.
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
                    <h4>The Volume Mascara</h4>
                    <p>
                      (Tubing mascara with an extra-small detailing applicator)
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
                    <h4>The Eyelash Curler</h4>
                    <p>
                      (Stainless steel eyelash curler with an iconic red pad)
                      InStyle Best Beauty Buys 2020 & 2021 ELLE Best Eyelash
                      Curler 2022
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
                    <h4>Glass Glow Face & Body</h4>
                    <p>
                      (High-shine liquid highlighter) Allure Best of Beauty 2019
                      Refinery 29 Beauty Innovator 2019 InStyle Best Beauty Buys
                      2020
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
                    <h4>Sensual Skin Enhancer</h4>
                    <p>
                      (Multi-purpose cover-up) Into The Gloss "Top 25 Beauty
                      Finds" 2021
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
                    <h4>Sculpt and Define Countour Boook IV</h4>
                    <p>
                      (Sculpting Palette with highlighters, contour powders &
                      blush)
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

export default KevynAucoin;
