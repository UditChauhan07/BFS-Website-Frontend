import React from "react";
import "../Styles/Home.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import RmsBeauty from "../Image/B2B-Website-UI/RMS Beauty.png";
import BobbiBrown from "../Image/B2B-Website-UI/Bobbi Brown.png";
import Revive from "../Image/B2B-Website-UI/Revive.png";
import Byredo from "../Image/B2B-Website-UI/Byredo.png";
import Byterry from "../Image/B2B-Website-UI/by terry.png";
import Kevyn from "../Image/B2B-Website-UI/Kevyn Aucoin Cosmetics.png";

function BeautyBrandsList() {
  return (
    <div>
      <section className="beautyListsBrand">
        <Container>
          <h2 className="BeautyH2Start">
            YOUR NUMBER ONE SOURCE FOR UNIQUE BEAUTY BRANDS
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={RmsBeauty} />
                <h3>RMS Beauty</h3>
                <span>(multi-tasking cream concealer)</span>
                <p>
                  ALLURE Reader's Choice Award Winner 2022 ALLURE Best of Beauty
                  Award Winner 2011 & 2012
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={BobbiBrown} />
                <h3>Bobbi Brown</h3>
                <span>(Moisturizer + makeup primer)</span>
                <p>
                  1 sold every 15 seconds globally Harpers Bazaar Beauty Awards
                  2022 Allure Best of Beauty 2014
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={Revive} />
                <h3>Revive</h3>
                <span>(Nighttime Exfoliating Moisturizer)</span>
                <p>
                  Net-A-Porter Beauty Hall of Fame WWD Beauty Inc Moisturzier
                  Icons 2023 Marie Claire: Worth It
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={Byredo} />
                <h3>Byredo</h3>
                <span>(Unisex fragrance)</span>
                <p>
                  Fragrance Foundation Awards 2022: Young Rose & Mixed Emotions
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={Byterry} />
                <h3>By terry</h3>

                <span>(Loose Setting Powder with hydrating skin benefits)</span>
                <p>CEW UK Beauty Award Finalist 2021</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="BeautyBrandName">
                <img src={Kevyn} />
                <h3>Kevyn Aucoin Cosmetics</h3>
                <span>
                  (Sculpting Palette with highlighters, contour powders & blush)
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default BeautyBrandsList;
