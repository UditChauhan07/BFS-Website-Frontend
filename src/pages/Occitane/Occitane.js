import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/LOccitane.png";
import Logo from "../../Image/B2B-Website-UI/L'occitanate logo 1.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/Almond Shower Oil.png";
import Product02 from "../../Image/Top-Products/Almond Supple Skin Oil.png";
import Product03 from "../../Image/Top-Products/Immortelle Divine Cream.png";
import Product04 from "../../Image/Top-Products/Immortelle Shea Youth Hand Cream.png";
import Product05 from "../../Image/Top-Products/Shea Butter Hand Cream.png";

const Occitane = () => {
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
                <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                  <h1 class="titleWithLogo">We are Cultivators of Change</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Since 1976, L'OCCITANE en Provence has been imagining,
                  producing and selling beauty, skincare and well-being products
                  with an intention to share nature's wonders with the world.
                  Our ambition is to not only sustain lands, but to regenerate
                  ecosystems. We believe beauty goes beyond what the eye can
                  see. From seed to skin, we are holistic in our approach. At
                  L'OCCITANE en Provence, we've always been Cultivators of
                  Change. This mindset is nothing new. We do our best to create
                  positive change for the world, and we always try to inspire
                  everyone around us to do the same.
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
                    <h4>Decadant cleansing oil</h4>
                    <p>1 is sold every 10 seconds worldwide.</p>

                    <a href="https://b2b-v3.vercel.app/#/login">
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
                    <h4>Fast-absorbing body oil</h4>
                    <p>
                      
                    </p>
                    <a href="https://b2b-v3.vercel.app/#/login">
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
                    <h4>Anti-aging face cream</h4>
                    <p>
                    1 is sold every 2 minutes worldwide
                    </p>
                    <a href="https://b2b-v3.vercel.app/#/login">
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
                    <h4>Anti-aging hand cream</h4>
                    <p></p>
                    <a href="https://b2b-v3.vercel.app/#/login">
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
                    <h4>Original “Cult Classic” hand cream</h4>
                    <p>1 is sold every 2 seconds worldwide.</p>
                    <a href="https://b2b-v3.vercel.app/#/login">
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

export default Occitane;
