import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/VictoriaBeckhamBeauty2.png";
import Logo from "../../Image/B2B-Website-UI/vr.png";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product01 from "../../Image/Top-Products/SaitainKajallinear.png";
import Product02 from "../../Image/Top-Products/PoshBalam.png";
import Product03 from "../../Image/Top-Products/ConcealerPen.png";
import Product04 from "../../Image/Top-Products/CellRejuvenating.png";
import Product05 from "../../Image/Top-Products/Portofino Eau De Parfum.png";

const VictoriaBeckhamBeauty = () => {
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
              <div class="row">
                <div class="col-xl-7 col-lg-6 col-md-12 col-sm-12 borderRight">
                  <img class="img-fluid " src={Logo} />
                </div>
                <div class="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                  <h1 class="titleWithLogo">
                    Good. Better. Best. Beckham. That's the Victoria Standard.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Although Victoria Beckham had experienced the world's best
                  beauty products (often in the hands of the world's best
                  stylists, under the direction of the world's best
                  photographers) she still found herself looking around - and
                  into her makeup bag - and thinking 'This could be better'.
                  Because, despite the array of quality, style, craft and
                  heritage on offer, everything that excelled in one area seemed
                  to sacrifice in another. And so Victoria Beckham Beauty was
                  created to make the products that would finally meet these
                  uncompromising standards: Proven performance and an elevated
                  experience delivered with intentional integrity, transparency
                  and inclusivity. A keenly curated range that only includes
                  items that genuinely add to the best already out there; Shades
                  selected for classical looks and contemporary styles; The
                  feeling of luxury from first sight to last swipe, sweep or
                  dab; The enduring quality required by demanding lifestyles;
                  Fashion-led, female founded, cruelty-free, conscious and
                  clean.
                </p>
                <p class="seti">
                Pure excellence in every way, at all times. Ambitious? Absolutely. Unreasonable? Not one bit.
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
                    <h4>Satin Kajal Liner</h4>
                    <p>A creamy, smudge-free eyeliner with vivid, high-performance colours that simply demand attention.</p>

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
                    <h4>Posh Balm</h4>
                    <p>Nourishing Lip Shine</p>
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
                    <h4>Concealer Pen</h4>
                    <p>Luminous Coverage Concealer in collaboration with Augustinus Bader</p>
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
                    <h4>Cell Rejuvenating Priming Moisturizer</h4>
                    <p>Skin perfecting moisturizer in collaboration with Augustinus Bader</p>
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
                    <h4>Portofino Eau De Parfum</h4>
                    <p>Genderless fragrance in collaboration with master parfumier Jérôme Épinette</p>
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

export default VictoriaBeckhamBeauty;
