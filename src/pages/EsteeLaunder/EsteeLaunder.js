import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/estee-launder-main.png";
import Logo from "../../Image/B2B-Website-UI/logo-esteelauder.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/Advanced Night Repair SERUM.png";
import Product02 from "../../Image/Top-Products/Double Wear.png";
import Product03 from "../../Image/Top-Products/Advanced Night Repair EYE.png";
import Product04 from "../../Image/Top-Products/Beautiful Magnolia..png";
import Product05 from "../../Image/Top-Products/Estreme Mascara.png";

const EsteeLaunder = () => {
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
                  <h1 className="titleWithLogo">
                    CREATING THE FUTURE OF BEAUTY TOGETHER.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Estée Lauder is the flagship brand of The Estée Lauder
                  Companies Inc. Founded by Estée Lauder, one of the world’s
                  first female entrepreneurs, the brand today continues her
                  legacy of creating the most innovative, sophisticated,
                  high-performance skin care and makeup products and iconic
                  fragrances — all infused with a deep understanding of women’s
                  needs and desires. Today Estée Lauder engages with women in
                  over 150 countries and territories around the world and at a
                  variety of touch points, in stores and online. And each of
                  these relationships consistently reflects Estée’s powerful and
                  authentic woman-to-woman point of view.
                </p>
                <p class="seti">
                  In 1946, Mrs. Estée Lauder started with four cremes and a
                  dream. With grit and persistence, she paved her own way in the
                  beauty industry—going from selling her cremes in salons to
                  selling them on the shelves of stores around the world.
                </p>
                <p class="seti">
                  At a time when the beauty industry was ruled by men, Estée was
                  the original girl boss, breaking glass ceilings and defying
                  expectations at every turn. She was a true influencer,
                  connecting with and giving honest, real-world beauty advice to
                  women around the world.
                </p>

                <p class="seti">
                  Her life’s passion was to make everyone look and feel their
                  most beautiful, and it’s this same spirit and high-touch
                  experience that we strive to bring to every customer today.
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
                    <h4> Advanced Night Repair Serum</h4>
                    <p>
                      (anti-aging face serum) ALLURE Reader's Choice Award
                      Winner 2016 CEW Iconic Beauty Award 2019
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
                    <h4>Double Wear Foundation</h4>
                    <p>
                      (The #1 best-selling foundation in the U.S. Medium-to-Full
                      buildable coverage) ALLURE Best of Beauty Award Winner
                      2008, 2013, & 2018 ALLURE Reader's Choice Award Winner
                      2022
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
                    <h4>
                      Advanced Night Repair Eye Supercharged Gel-Creme
                      Synchronized Multi-Recovery Eye Cream
                    </h4>
                    <p>
                      (anti-aging eye cream) ALLURE Best of Beauty Award Winner
                      2022
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
                    <h4>Beautiful Magnolia Eau de Parfum Spray</h4>
                    <p>
                      (Women's perfume: floral) ALLURE Best of Beauty Award
                      Winner 2021
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
                    <h4>Sumptuous Extreme Lash Multiplying Volume Mascara</h4>
                    <p>(Volumizing mascara)</p>
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

export default EsteeLaunder;
