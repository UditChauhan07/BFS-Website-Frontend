import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Styles/Home.css";
import DiptyqueImg from "../Image/Diptyque.png";
import BumbleImg from "../Image/Bumble and Bumble.webp";
import MaisonImg from "../Image/Maison Margiela.png";
import ReViveImg from "../Image/ReVive.png";
import ByredoImg from "../Image/B2B-Website-UI/ByredoRouge.png";
import BobbiImg from "../Image/B2B-Website-UI/Bobbi Brown500.png";
import RmsImg from "../Image/B2B-Website-UI/RMS Beauty500.png";
import ByTerryWeb from "../Image/B2B-Website-UI/BtTerryMob-updated.png";
import MobDio from "../Image/B2B-Website-UI/MobDiptique.png";
import MobRevive from "../Image/B2B-Website-UI/Mobrevive.png";
import MobBobbi from "../Image/B2B-Website-UI/MobBobbi.png";
import MobMaison from "../Image/B2B-Website-UI/mobMaison.png";
import MobBydo from "../Image/B2B-Website-UI/Mobbyredo.png";
import MobBobby from "../Image/B2B-Website-UI/MobBobby.png";
import MobRms from "../Image/B2B-Website-UI/MobRms.png";
import BtTerryMob from "../Image/B2B-Website-UI/ByTerryWeb-updated.png";
import eEste from "../Image/B2B-Website-UI/EsteeLaunderWeb.webp";
import EsteeMob from "../Image/B2B-Website-UI/MobEsteeLaunder.png";
import SuperGoopWeb from "../Image/B2B-Website-UI/SupergoopWeb.png";
import SuperGoopMob from "../Image/B2B-Website-UI/SupergoopMob.png";
import ReNutrivWeb from "../Image/B2B-Website-UI/victoria-beckham-beauty.png";
import MobReNutriv from "../Image/B2B-Website-UI/victoria-beckham-beauty.png";

// import LuxuryMeet from './LuxuryMeet/index'

function BrandsOfB2b() {
  return (
    <div>
      {/* <LuxuryMeet></LuxuryMeet> */}
      <section className="BrandsOf">
        <Container>
          <section>
            <div className="row B2bReverseImg">
              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlCenter MaisonImg ">
                  <a href="/brands/Supergoop">
                    <div className="Effect01">
                      <img
                        className="WebProducts"
                        src={SuperGoopWeb}
                        alt="Supergoop"
                      />
                    </div>
                    <div className="Effect01">
                      <img
                        className="MobProducts"
                        src={SuperGoopMob}
                        alt="Supergoop"
                      />
                    </div>
                    <h2> Supergoop</h2>
                  </a>
                  <p>
                    As the Experts in SPF™, we've been raising the bar for
                    effective sunscreen since 2005. 
                  </p>

                  <div className="sectionContent ">
                    <div className="listHoverLink">
                      <div className="linkWrap">
                        <a href="/Wholesale-Inquiries" class="style-4">
                          <span>Apply Now</span>
                          <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlLeft BobbiImg">
                  <div className="contentWrite">
                    <a href="/brands/VictoriaBeckhamBeauty">
                      <h2>Victoria Beckham</h2>
                    </a>
                    <p>
                      Victoria Beckham's brand essence is polished, elevated,
                      and always in tune with the current moment.
                    </p>

                    <div className="sectionContent JustifyStart">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BrandIm">
                    <a href="/brands/VictoriaBeckhamBeauty">
                      <div className="Effect02">
                        <img className="WebProducts" src={ReNutrivWeb} />
                      </div>
                      <img className="MobProducts " src={MobReNutriv} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlLeft ByredoImg">
                  <div className="contentWrite">
                    <a href="/brands/Byredo">
                      <h2> Byredo</h2>
                    </a>

                    <p>
                      Established in 2006 by Ben Gorham in Stockholm, Byredo is
                      a luxury brand that turns memories into products and
                      experiences.
                    </p>
                    <div className="sectionContent JustifyStart">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BrandIm">
                    <a href="/brands/Byredo">
                      <div className="Effect02">
                        <img className="WebProducts" src={ByredoImg} />
                      </div>
                      <img className="MobProducts " src={MobBydo} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlCenter DiptyqueImg ">
                  <a href="/brands/Diptyque">
                    <div className="BreImm Effect01">
                      <img className="WebProducts" src={DiptyqueImg} />
                      <img className="MobProducts " src={MobDio} />
                    </div>
                  </a>
                  <div className="contentWrite">
                    <a href="/brands/Diptyque">
                      <h2> Diptyque</h2>
                    </a>
                    <p>
                      Diptyque sees fragrance as an art, a sensory journey
                      through the mind.
                    </p>

                    <div className="sectionContent ">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row B2bReverseImg">
              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlCenter MaisonImg ">
                  <a href="/brands/MaisonMargiela">
                    <div className="Effect01">
                      <img className="WebProducts" src={MaisonImg} />
                      <img className="MobProducts" src={MobMaison} />
                    </div>

                    <h2> Maison Margiela</h2>
                  </a>
                  <p>
                    Maison Margiela is a Parisian haute couture house founded on
                    ideas of nonconformity and the subversion of norms.{" "}
                  </p>
                  <div className="sectionContent ">
                    <div className="listHoverLink">
                      <div className="linkWrap">
                        <a href="/Wholesale-Inquiries" class="style-4">
                          <span>Apply Now</span>
                          <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlLeft BobbiImg">
                  <div className="contentWrite">
                    <a href="/brands/BobbiBrown">
                      <h2>Bobbi Brown</h2>
                    </a>
                    <p>
                      In 1991, Bobbi Brown was founded by a female makeup artist
                      in New York, designed for the world--your world.{" "}
                    </p>
                    <div className="sectionContent JustifyStart">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BrandIm">
                    <a href="/brands/BobbiBrown">
                      <div className="Effect02">
                        <img className="WebProducts" src={BobbiImg} />
                        <img className="MobProducts " src={MobBobby} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlLeft RmsImg ">
                  <div className="contentWrite">
                    <a href="/brands/RMSBeauty">
                      <h2> RMS Beauty</h2>
                    </a>
                    <p>
                      A pioneer of the clean beauty movement, Rose-Marie Swift
                      is the founder and the spirit of the brand.
                    </p>
                    <div className="sectionContent JustifyStart">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BrandIm">
                    <a href="/brands/RMSBeauty">
                      <div className="Effect02">
                        <img className="WebProducts" src={RmsImg} />
                        <img className="MobProducts " src={MobRms} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlCenter ReViveImg ">
                  <a href="/brands/EsteeLaunder">
                    <div className="Effect01">
                      <img className="WebProducts" src={eEste} />
                      <img className="MobProducts" src={EsteeMob} />
                    </div>
                    <h2>  Estee Lauder</h2>
                  </a>
                  <p>
                  Legacy of creating the most innovative high-performance skin care and makeup products and iconic fragrances .
                  </p>
                  <div className="sectionContent ">
                    <div className="listHoverLink">
                      <div className="linkWrap">
                        <a href="/Wholesale-Inquiries" class="style-4">
                          <span>Apply Now</span>
                          <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row B2bReverseImg">
              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlCenter BumbleImg ">
                  <a href="/brands/BumbleAndBumble">
                    <div className="Effect01">
                      <img className="WebProducts" src={BumbleImg} />
                      <img className="MobProducts" src={MobBobbi} />
                    </div>
                    <h2> Bumble and Bumble</h2>
                  </a>
                  <p>
                    Bumble and bumble started as a NYC salon in 1977, gaining
                    prominence through expert clipping, coloring, and styling.
                  </p>
                  <div className="sectionContent ">
                    <div className="listHoverLink">
                      <div className="linkWrap">
                        <a href="/Wholesale-Inquiries" class="style-4">
                          <span>Apply Now</span>
                          <svg viewBox="0 0 13 20">
                            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="BrandsImg BrandControlLeft SusanneImg">
                  <div className="contentWrite">
                    <a href="brands/ReVive">
                      <h2>ReVive</h2>
                    </a>
                    <p>
                    A high-performance, luxury skincare line developed by
                    plastic and reconstructive surgeon Dr. Gregory Bays Brown in
                    1997.
                    </p>
                    <div className="sectionContent JustifyStart">
                      <div className="listHoverLink">
                        <div className="linkWrap">
                          <a href="/Wholesale-Inquiries" class="style-4">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BrandIm">
                    <a href="brands/ReVive">
                      <div className="Effect02">
                      <img className="WebProducts" src={ReViveImg} />
                      <img className="MobProducts" src={MobRevive} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
}

export default BrandsOfB2b;
