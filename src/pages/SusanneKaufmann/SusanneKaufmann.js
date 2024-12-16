import React from "react";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import main from "../../Image/B2B-Website-UI/SusanneMain.png";
import Logo from "../../Image/B2B-Website-UI/Susanne Kaufmann logo.jpg";

const SusanneKaufmann = () => {
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
                  <h1 className="titleWithLogo">
                  Sustainable luxury.
                  </h1>
                </div>
              </div>
              <div className="autoHeight" id="ScrollRight">
                <p class="seti">
                  Proven holistic skincare powered by natural actives,
                  responsibly sourced and produced in the Alpine regions of
                  Austria &amp; Switzerland.
                </p>
                <p class="seti">
                  An early pioneer of the natural beauty industry, our founder
                  Susanne Kaufmann is an expert in holistic skincare and local
                  ingredients. Susanne's deep connection to nature influences
                  our core values of innovation, sustainability, and wellness-
                  guiding every formula that she creates and reflecting our spa
                  heritage in the heart of the Bregnerwald.
                </p>
                <p class="seti">
                  
                  Using locally sourced, natural active ingredients from the
                  Alpine regions of Austria and Switzerland, we develop
                  intelligent ingredient complexes to power our clinically
                  proven, efficacious formulas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterBfsg />
    </div>
  );
};

export default SusanneKaufmann;
