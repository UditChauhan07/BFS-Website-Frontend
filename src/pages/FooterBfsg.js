import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
function FooterBfsg() {
  const [email, setEmail] = useState('');
 
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);    
    setIsValid(e.target.checkValidity()); 
  };

  const handleButtonClick = () => {
   
    if (isValid) {
      console.log("Button clicked!");

      window.location.href = '/Wholesale-Inquiries';
      
    } else {
      
      console.log("Input is invalid!");
    }
  };
 
  return (
    <div>
      <section className="FooterPart">
        {/* <div className='LabelFooter'>
                    <span className='HelpUsText'>Help us Improve</span> <span className='BriefSurvey'>Take a brief survey about today's visit</span> <span className='BeginSurvey'>
                        <a href='#'>Begin Survey</a>
                        </span>
                </div> */}
        <Container>
          <div className="InnerFrist">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6 ">
                <h5>BFSG</h5>
                <ul className="FooterOne">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  {/* <li><a href="#">About Us</a></li> */}
                  <li>
                    {/* <a href="https://bfsportal-react.vercel.app/sign-up"> */}
                    <a href="/Wholesale-Inquiries">
                      Customer Support
                    </a>
                  </li>
                  {/* <li><a href="#">Careers</a></li> */}
                  <li>
                 
                    {/* <a href="https://b2b-v3.vercel.app/#/create-account"> */}
                    <a href="/Wholesale-Inquiries">
                      Wholesale Enquires
                    </a>
                  </li>
                  <li>
                    <a href="">What our retailers are saying</a>
                  </li>
                  <li>               
                   
                    <a href="/terms-and-services">
                    Terms of Service
                    </a>
                  </li>
                  <li>               
                   
                    <a href="/privacy-policy">
                    Privacy Policy
                    </a>
                  </li>
                  {/* <Nav.Link
                    className="LineHeightCustom"
                    href="/#retailer-say"
                    data-rr-ui-event-key="/#retailer-say"
                  >
                    What our retailers are saying
                  </Nav.Link> */}
                </ul>
              </div>

              <div className="joinMobileUs col-lg-3 col-md-3 col-6  text-end d-none justify-content-end ">
                <div className="MObflex">
                  <ul className="text-start">
                    <h5>Join US</h5>
                    <li>
                      <a href="https://www.instagram.com/beautyfashionsales/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/beauty-&-fashion-sales-group/">
                        Linkedin
                      </a>
                    </li>
                    {/* <li><a href="https://www.facebook.com/beautyfashionsalesgroup/">Facebook</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 ">
                <h5>Newsletter</h5>
                <p>
                  Be the first to know about new arrivals and brand updates by
                  submitting your email. You can opt out at any time.
                  {/* <a href='#'>privacy policy</a> */}
                  <br />
                  {/* <div className="NewsletterButton">
                    <input
                      type="text"
                      id="fname"
                      placeholder="sign up for our newsletters."
                      name="fname"
                    />

                    <button href="https://b2b-v3.vercel.app/#/create-account">
                      Submit
                    </button>
                  </div> */}
                  <div className="NewsletterButton">
                    <input
                      type="email"
                      id="fname"
                      value={email}                      
                      onChange={handleEmailChange}
                      placeholder="sign up for our newsletters."
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      required
                    />
                    <button onClick={handleButtonClick} disabled={!isValid}>
                      Submit
                    </button>
                    
                  </div>
                </p>
              </div>
              <div className="joinMobileweb col-lg-3 col-md-3 col-sm-5 d-flex justify-content-end d-md">
                <div>
                  <h5>Join US</h5>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/beautyfashionsales/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/beauty-&-fashion-sales-group/">
                        Linkedin
                      </a>
                    </li>
                    {/* <li><a href="https://www.facebook.com/beautyfashionsalesgroup/">Facebook</a></li> */}
                  </ul>
                </div>
              </div>
            </div>

            <p className="CopyRightList">
              2023 © Beauty Fashion Sales Group, Inc. All rights reserved.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default FooterBfsg;
