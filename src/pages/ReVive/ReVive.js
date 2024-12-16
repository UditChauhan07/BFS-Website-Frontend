import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/revive-main.png";
import Logo from "../../Image/B2B-Website-UI/revive-logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/Moisturizing Renewal Cream.png";
import Product02 from "../../Image/Top-Products/RescueElixer.png";
import Product03 from "../../Image/Top-Products/01-new.png";
import Product04 from "../../Image/Top-Products/IntensitéLesYeux1.png";
import Product05 from "../../Image/Top-Products/INTENSITE-Vol-Serum-Ultime.png";

const ReVive = () => {
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
                  <h1 className="titleWithLogo">RESEARCH. RENEWAL. RESULTS</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  <b>GIVE NEW LIFE TO SKIN.</b>
                </p>

                <p class="seti">
                  A high-performance, luxury skincare line developed by plastic
                  and reconstructive surgeon Dr. Gregory Bays Brown in 1997.
                  RéVive formulas unlock the power of Bio-Renewal Technology, a
                  cutting edge science, which visibly transforms renews,
                  restoring skin to a younger, healthier, more supple version of
                  itself. This collection of bio-engineered, skin-identical
                  peptides mimic your own bio-renewal process to help restore
                  skin's youthful glow.
                </p>
                <p class="seti"> RéBuild your skin, from the inside, out.</p>
              </div>
            </div>
          </div>

          <div className="TopProducts NewArriavalsList">
            <h3 className="mt-5">Top Products</h3>
            <OwlCarousel className="owl-theme" {...options}>
              <div class="item">
                <div>
                  <div className="ArriavalsInnerContent">
                    <h4>Moisturizing Renewal Cream</h4>
                    <p>
                      (Nighttime Exfoliating Moisturizer) Net-A-Porter Beauty
                      Hall of Fame WWD Beauty Inc Moisturzier Icons 2023 Marie
                      Claire: Worth It
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
                    <h4>Rescue Elixir Anti-Aging Oil</h4>
                    <p>
                      (A rich nighttime oil that hydrates, plumps and smooths
                      skin)
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
                    <h4>Foaming Cleanser Enriched Hydrating Wash</h4>
                    <p>(Foaming cleanser)</p>
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
                    <h4>Intensite Les Yeux Firming Eye Cream</h4>
                    <p>(Firming Eye Cream)</p>
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
                    <h4>Intensite Volumizing Serum Ultime</h4>
                    <p>
                      (Targeted Skin Filler) Allure Best of Beauty 2022 Award
                      Winner
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

export default ReVive;
