import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/Maison Margiela-main.webp";
import Logo from "../../Image/B2B-Website-UI/misio-mar-logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/100 ml Eau de Toilette.png";
import Product02 from "../../Image/Top-Products/165g candle.png";
import Product03 from "../../Image/Top-Products/reed diffuser.png";
import Product04 from "../../Image/Top-Products/halo.png";
import Product05 from "../../Image/Top-Products/Full-exposure.png";

const MaisonMargiela = () => {
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
                  <h1 className="titleWithLogo">SMELLS LIKE MEMORIES.</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Maison Margiela is a Parisian haute couture house founded on
                  ideas of nonconformity and the subversion of norms. Appointed
                  Creative Director in 2014, the British couturier John Galliano
                  exercises his visual language to expand on the grammar of
                  Maison Margiela, creating a new technical vocabulary that
                  cements the house’s position as a singular and autonomous
                  entity in the realm of luxury.
                </p>
                <p class="seti">
                  In 1994, Maison Margiela introduced the first "REPLICA"
                  fashion pieces: garments and accessories hand-picked
                  throughout the world and meticulously reproduced, preserving
                  their character and charm. Each piece features a special label
                  inside, describing the source and period of the original item.
                </p>
                <p class="seti">
                  
                  In 2012, Maison Margiela expanded on this unique concept with
                  a collection of fragrances: the scents your memories are made
                  of. The "REPLICA" collection assembles iconcolast fragrances
                  that have the universal power to trigger personally cherished
                  moments, personal stories lived or to be lived.
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
                    <h4>Eau de Toilette</h4>
                    <p>(Unisex fragrance)

Acadmeia del perfume Awards Best Niche Fragrance 2021: Bubble Bath

Ufragrance Foundation Awards Universal Prestige 2022: Autumn Vibes
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
                    <h4>165g Candle</h4>
                    <p>
                    (Candle with glass vessel & linen label)
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
                    <h4>Reed Diffuser</h4>
                    <p>
                    (Scented diffuser for the home)
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
             
            </OwlCarousel>
          </div>
        </div>
      </section>
      <FooterBfsg />
    </div>
  );
};

export default MaisonMargiela;
