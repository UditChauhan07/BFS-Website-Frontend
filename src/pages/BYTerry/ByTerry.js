import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/By-terry-main.png";
import Logo from "../../Image/B2B-Website-UI/BY TERRY logo.jpg";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/BAUME DE ROSE JAR.png";
import Product02 from "../../Image/Top-Products/Hyaluronic Hydra Powder.png";
import Product03 from "../../Image/Top-Products/OMBRE-BLACKSTAR-N4.png";
import Product04 from "../../Image/Top-Products/Brightening CC Serum.png";
import Product05 from "../../Image/Top-Products/lash expert twist brush mascara position.png";

const ByTerry = () => {
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
                    PARISIAN-BORN, SKINCARE-INFUSED MAKEUP.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Terry de Gunzburg is a trailblazing industry legend who over
                  the course of the past 30 years has changed the face of
                  beauty.
                </p>
                <p class="seti">
                  Trading a career in medicine for a more creative life, Terry
                  studied at the Carita beauty school in Paris and quickly
                  became an in-demand makeup artist working with some of the
                  biggest names in fashion. Her trademark beauty look has always
                  been distinctive: imperceptible foundation, impeccable lips
                  and thick, separated lashes.
                </p>
                <p class="seti">
                  As International Makeup Designer of YSL Beauté for 15 years,
                  Terry invented the iconic Touché Eclat in 1992 (as well as
                  countless other products and formulas). Radiance and a healthy
                  complexion has always been key to Terry’s approach to make up,
                  and so she decided to launch her own collection of products in
                  1998, and BY TERRY was born.
                </p>
                <p class="seti">
                  In 2004 after a mix up in the lab, double the amount of rose
                  butter was added to a lip balm which would soon become BY
                  TERRY’s most successful product: Baume de Rose. Described as
                  the Rolls Royce of lip balms, it symbolizes everything the
                  brand stands for—luxury, indulgence and a timelessness.
                </p>
                <p class="seti">
                  Almost 10 years ago, before hyaluronic acid was widely known
                  by households worldwide, Terry created the first clean
                  mattifying setting powder, the Hyaluronic Hydra-Powder. This
                  was the start of Terry’s one of a kind Hyaluronic Range. We
                  remain today pioneers of this ingredient and its applications.{" "}
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
                    <h4>Baume de Rose Lip Care</h4>
                    <p>
                      (Hydrating lip & skin balm) Vogue 100 Best in Beauty
                      Winner 2014, 2016, 2017
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
                    <h4>Hyaluronic Hydra Powder</h4>
                    <p>
                      (Loose Setting Powder with hydrating skin benefits) CEW UK
                      Beauty Award Finalist 2021
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
                    <h4>Ombre Blackstar</h4>
                    <p>(Cream Eyeshadow Stick)</p>
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
                    <h4>Brightening CC Serum</h4>
                    <p>(Sheerr tinted serum)</p>
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
                    <h4>Lash Expert Twist-Brush Mascara</h4>
                    <p>
                      (Black mascara with a wand that can be changed to the
                      user's taste)
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

export default ByTerry;
