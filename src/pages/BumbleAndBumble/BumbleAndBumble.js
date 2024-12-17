import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/Bb.Brand-main.jpg";
import Logo from "../../Image/B2B-Website-UI/Bumblea-and-bumble-logo.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/Hairdresser's Invisible Oil.png";
import Product02 from "../../Image/Top-Products/Surf Spray.png";
import Product03 from "../../Image/Top-Products/HIO_Primer.png";
import Product04 from "../../Image/Top-Products/Bb. Thickening Dryspun Texture Spray.png";
import Product05 from "../../Image/Top-Products/Curl_Defining_Cream.png";

const BumbleAndBumble = () => {
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
                  <h1 className="titleWithLogo">Sustainable luxury.</h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Bumble and bumble began as an New York City salon in 1977,
                  where we clipped, colored, and styled our way into prominence
                  – with a strong design aesthetic and extraordinary products;
                  in magazines, on runways, and backstage worldwide. Bumble and
                  bumble has over 40+ years of salon industry expertise, owns
                  and operates two leading flagship salons in NYC, and has salon
                  partnerships with over 1500 independently owned salons all
                  across North America.
                </p>
                <p class="seti">
                  Bumble and bumble is inspired by masters of the craft:
                  hairstylists and colorists obsessed with technical and
                  artistic excellence through bold self-expression. Bumble and
                  bumble invents products to meet these professional, exacting
                  standards that are also easy enough for anyone to use: from
                  the iconic wave-enhancing Surf Spray to the best-selling
                  mega-moisturizing Hairdresser's Invisible Oil range. These
                  well-loved products are used by pros in Bumble and bumble
                  salons and by millions of people around the world at home
                  every day. Bumble and bumble creates products for all hair
                  types, textures, and style preferences with uncompromising
                  quality to instantly elevate your personal style with an
                  effortlessly modern look. We are deeply, passionately, and
                  fearlessly dedicated to the craft of hair.{" "}
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
                    <h4>Hairdresser's Invisible Oil</h4>
                    <p>(Hydrating oil) Allure Best of Beauty 2014</p>

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
                    <h4>Surf Spray</h4>
                    <p>
                    (Texturizing spray for beachy waves)

Glamour Beauty Awards 2019
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
                    <h4>Hairdresser's Invisible Oil Primer</h4>
                    <p>
                      (Hair primer, detangler, + sun & heat protectant)
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
                    <h4>Thickening Dryspun Texture Spray</h4>
                    <p> </p>
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
                    <h4>Curl Light Defining Cream</h4>
                    <p>(Styling Cream for curly hair)</p>
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

export default BumbleAndBumble;
