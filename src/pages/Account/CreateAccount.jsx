import React from "react";
import NavbarHeader from "../Navbar";
import style from "./accountStyle.module.css";
import HeaderTwo from "../../pages/HeaderTwo";
import FooterBfsg from "../FooterBfsg";
import {
  COntactName,
  ChooseBrand,
  QuestionMark,
  Picture,
  StoreName,
  Describe,
  Gmail,
} from "./svgIcon";

function CreateAccount() {
  return (
    <div>
      <section>
        {/* <HeaderTwo /> */}
        <NavbarHeader />
        <div className="container">
          <div className={style.WholesaleFormMain}>
            <h3>Apply for a Wholesale Account with BFSG</h3>
            <div className={style.accountCre}>
              <h5>Advantages of Account Creation :</h5>
              <ul>
                <li>Express Checkout</li>
                <li>Monitor Your Orders</li>
                <li>Add favorite items to your wish list</li>
              </ul>
            </div>

            <div className={style.detailFilling}>
              <div className={style.innerInformation}>
                <div className={style.SvgLogo}>
                  <COntactName />
                </div>
                <div className={style.labelDivMain}>
                  <div className={style.labelIN}>
                    <label htmlFor="name">First Name</label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className={style.labelIN}>
                    <label htmlFor="name">Last Name</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={style.innerInformation}>
                <div className={style.SvgLogo}>
                  <Gmail />
                </div>
                <div className={style.labelDivMain}>
                  <div className={style.labelIN}>
                    <label htmlFor="name">Your Email</label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className={style.labelIN}>
                    <label htmlFor="name">Phone Number</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={style.innerInformation}>
                <div className={style.SvgLogo}>
                  <StoreName />
                </div>
                <div className={style.labelDivMain}>
                  <div className={style.labelIN}>
                    <label htmlFor="name">Store Name</label>
                    <br />
                    <input type="text" />
                  </div>

                  <div className={style.labelIN}>
                    <label htmlFor="name">Store Location</label>
                    <br />
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={style.innerInformation}>
                <div className={style.SvgLogo}>
                  <Describe />
                </div>
                <div className={style.labelDivMain}>
                  <div className={style.labelIN}>
                    <label htmlFor="name">Describe your Store</label>
                    <br />
                    <input className="w-95" type="text" />
                  </div>
                </div>
              </div>

              <div className={style.innerInformation}>
                <div className={style.SvgLogo}>
                  <Picture />
                </div>
                <div className={style.labelDivMain}>
                  <div className={style.labelIN}>
                    <label htmlFor="name">Picture (Multiple)</label>
                    <br />
                    <input className="w-95" type="text" />
                  </div>
                </div>
              </div>

              <div className={style.innerInformationRadio}>
                <div className={`${style.SvgLogo} ${style.SvgLogo1}`}>
                  <QuestionMark />
                </div>

                <div className={style.LabelContro}>
                  <div>
                    <h3>How do you sell to your customers? </h3>
                  </div>

                  <div className={style.radioContro}>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> Local Ads
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> Social Media 
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> Google
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> Walking Customer
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> One to One
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div
                          className={` ${style.labelDetail} ${style.labelbox} `}
                        >
                          <label>
                            <input type="radio" /> Beauty Demoes 
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.innerInformationRadio}>
                <div className={`${style.SvgLogo} ${style.SvgLogo2}`}>
                  <ChooseBrand />
                </div>

                <div className={style.LabelContro}>
                  <div>
                    <h3>Choose Brands to Apply </h3>
                  </div>

                  <div className={style.radioContro}>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Byredo
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Diptyque
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Bobbi Brown
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> RMS Beauty
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> ReVive
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Kevyn Aucoin Cosmetics
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Susanne Kaufmann
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> Bumble and Bumble
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className={style.labelDetail}>
                          <label>
                            <input type="radio" /> By Terry
                          </label>
                        </div>
                      </div>
                      <div className={style.BySigning}>
                        <p>
                          <input type="checkbox" />
                          By signing in or clicking "Apply for an Account", you
                          agree to our Terms of Service Please also read our
                          Privacy Policy
                        </p>

                        <button>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterBfsg />
      </section>
    </div>
  );
}

export default CreateAccount;
