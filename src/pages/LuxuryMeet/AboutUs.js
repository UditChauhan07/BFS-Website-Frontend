import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Luximg from "../../Image/About Page Image.png";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import LaunchCalendar from "../LaunchCalendar/LaunchCalendar";

function AboutUs() {
  return (
    <div>
      <NavbarHeader />

      {/* <LaunchCalendar /> */}
      <section>
        <Container>
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12 m-auto">
              <div className="LuxContent">
                <h1 className="mb30 text-start">
                  WELCOME TO BEAUTY FASHION SALES GROUP- YOUR NUMBER ONE SOURCE
                  FOR UNIQUE BEAUTY BRANDS.
                </h1>

                <p className="mb30 ">
                  Our mission is to provide a curated collection of the best
                  niche beauty brands and top independent retailers, while
                  providing unmatched service with superior, personalized, and
                  consistent communication that anticipates and understands your
                  needs.
                </p>

                <p className="">
                  Our passion for beauty is what drives us to provide
                  top-quality products and build exceptional relationships with
                  our retailers and brands. We’re your new best friend. Our
                  diverse portfolio encompasses makeup, fragrance, haircare,
                  skincare, and home.
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 col-sm-12 m-auto">
              <div className="LuxImage">
                <img src={Luximg} alt="luxury" />
              </div>
              <div />
            </div>
          </div>
        </Container>
      </section>
      <FooterBfsg />
    </div>
  );
}

export default AboutUs;
