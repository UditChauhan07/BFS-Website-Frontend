import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/rms-main.png";
import Logo from "../../Image/B2B-Website-UI/RMS Beauty logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/LIVING LUMINIZER.png";
import Product02 from "../../Image/Top-Products/LIP2CHEEK.png";
import Product03 from "../../Image/Top-Products/UNCOVERUP.png";
import Product04 from "../../Image/Top-Products/MASTER RADIANCE BASE.png";
import Product05 from "../../Image/Top-Products/STRAIGHT UP MASCARA.png";

const RMSBeauty = () => {
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
                  <img className="img-fluid" src={Logo} />
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                  <h1 className="titleWithLogo">
                    MASTERFULLY MADE. BEAUTIFULLY CLEAN.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  A pioneer of the clean beauty movement, Rose-Marie Swift is
                  the founder and the spirit of the brand. A master makeup
                  artist for over 30 years, her lightbulb moment was realizing
                  that cosmetics could be made with better, safer ingredients
                  while simultaneously making women more beautiful. Bold,
                  authentic, and unwavering in her quest for innovative clean
                  ingredients that perform, she launched RMS in 2009 to clean up
                  the industry and set a higher standard for beauty.
                </p>

                <p class="seti">
                  {" "}
                  If you know...you know. Just ask the world’s top supermodels
                  and a community of loyal followers who have worn RMS for over
                  a decade. As a professional makeup artist, it was important to
                  Rose-Marie that RMS products were not only safe to use but
                  could also be beautiful and long-lasting on a photo shoot, a
                  runway show, and, of course, every day.
                </p>
                <p class="seti">
                  {" "}
                  RMS products are simple to understand, easy to use, and
                  showcase the need for pure, simple, plant-based, skin-loving
                  ingredients - and the beauty of radiant, glowing, natural
                  human skin.
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
                    <h4>Living Luminizer</h4>
                    <p>
                      (cream luminizer) ALLURE Best of Beauty Winner InStyle
                      Best Beauty Buys 2020 TheCUT "The Best Highlighters for
                      All Skin Tones" 2020
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
                    <h4>Lip2Cheek</h4>
                    <p>
                      (cream blush + lip color) ELLE International Beauty Award
                      Winner 2020 InStyle Best Beauty Buys 2020
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
                    <h4>Un Cover Up</h4>
                    <p>
                      (multi-tasking cream concealer) ALLURE Reader's Choice
                      Award Winner 2022 ALLURE Best of Beauty Award Winner 2011
                      & 2012
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
                    <h4>Master Radiance Base</h4>
                    <p>
                      (multitasking glowing base, highlighter, and mixing
                      medium) NewBEauty 11th Annual Beauty Awards Best Cream
                      Highlighter
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
                    <h4>Straight Up Volumizing Peptide Macara</h4>
                    <p>(volumizing mascara) ELLE Green Stars Beauty Award</p>
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

export default RMSBeauty;
