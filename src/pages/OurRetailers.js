import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Victoria from "../Image/B2B-Website-UI/victoria.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Jodan from "../Image/Store-Image/FWRD Pop Up.png";
import Lily from "../Image/Store-Image/KITH.png";
import Patricia from "../Image/Store-Image/Elyse Walker.png";
import hotel from "../Image/Store-Image/Windsor Court Hotel.png";

function sliderr() {
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
    <div className="OurRetailer" id="retailer-say">
      <Container>
        <h3>OUR Retailers</h3>

        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <div>
              <div className="RetailerContent">
                <img src={Jodan} />
                <h4>FWRD PopUp</h4>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent">
                <img src={Lily} />
                <h4>KITH</h4>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent">
                <img src={Patricia} />
                <h4>Elyse Walker</h4>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent">
                <img src={hotel} />
                <h4>Windsor Court Hotel</h4>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
}

export default sliderr;
