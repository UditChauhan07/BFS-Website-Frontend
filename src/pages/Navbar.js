import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import CountryFlag from "../Image/CountryFlag.svg";
import "../Styles/Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSearchAlt } from "react-icons/bi";
import BFSG from "../Image/LogoBFSG.svg";
import Cross from "../Image/B2B-Website-UI/crossIcon.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink, useNavigate , useLocation  } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import data from "../data.json";
import '../../src/App.css'
function NavbarHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    // Toggle the visibility state
    setIsVisible(!isVisible);
  };

  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };
  const [filteredData, setFilteredData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filterData = data.filter((ele) =>
      ele.content.toLowerCase().includes(value)
    );
    setSearchString(value);
    setFilteredData(filterData);
  };
  console.log("filter", filteredData);
  const path = window.location.pathname;
  let Wholesale = false;
  if (path === "/Wholesale-Inquiries") {
    Wholesale = true;
  }
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToNewArrivals = () => {
    navigate("/#newarrivals"); // Navigate to the NewArrivals page
    setTimeout(() => {
      const element = document.getElementById("newarrivals");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }, 0); // Allow DOM to update before scrolling
  };

  // Check if the current route matches "/#newarrivals"
  const isActive = location.hash === "#newarrivals";
  return (
    <div className="FixedHeader">
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>INQUIRY FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>Coming Soon</Modal.Body>
        <Modal.Footer>
          <div variant="primary" onClick={handleClose}>
            Close
          </div>
        </Modal.Footer>
      </Modal>

      {/* Modal end */}

      <nav className="navbarNavFirst BorderBottom d-none ">
        <div className=" container NavMainFirst">
          <div className="row">
            <div className="col-lg-12">
              <div className="navControlEN">
                <div className="navbarTopEN">
                  <div>
                    <img src={CountryFlag} />
                  </div>
                  <span className="borBott"></span>{" "}
                  <span>
                    <div className="NavNeedEn ">
                      <NavDropdown title="EN" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3"></NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          English
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action5">
                          Hindi
                        </NavDropdown.Item>
                      </NavDropdown>{" "}
                    </div>
                  </span>
                </div>
                <div className="NavNeedHelp ">
                  {" "}
                  <NavDropdown title="Need Help?" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      9021XXXX9
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      emo1121@gmail.com
                    </NavDropdown.Item>
                  </NavDropdown>{" "}
                </div>

                <div className="NavNeedHelpSign ">
                  <a
                    className="text-decoration-none"
                    href="https://portal.beautyfashionsales.com/"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Container>
        {/* nav2 */}

        <section className="navbarNavSecond md-d-none">
          <Navbar className="" data-bs-theme="light">
            <div className="row d-flex">
              <div className="col-5 m-auto">
                <Nav className="menu menu-1 ThirdNav">
                  <NavLink to="/brands" activeClassName="active">
                    Brands
                  </NavLink>
                  <li
      className={`newArrival ${isActive ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        handleNavigateToNewArrivals();
      }}
    >
      New Arrivals
    </li>

                  <NavLink to="/founder" activeClassName="active">
                    Founder's Edits
                  </NavLink>
                </Nav>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <Nav className="text-center">
                  <Navbar.Brand href="/" className="m-0">
                    {" "}
                    <img src={BFSG} />
                  </Navbar.Brand>
                </Nav>
              </div>
              <div className="col-5 d-flex justify-content-end m-auto">
                <Nav className="">
                  <Nav.Link href="#search" className=" pr-0">
                    <div class="search-container">
                      <input
                        class="search expandright"
                        id="searchright"
                        type="search"
                        name=""
                        placeholder="Search..."
                        onChange={handleSearch}
                      />
                      <label class="button searchbutton" for="searchright">
                        <span className="searchCode">Search...</span>{" "}
                        <span class="mglass">
                          <BiSearchAlt />{" "}
                        </span>{" "}
                      </label>
                      {searchString.length ? (
                        <>
                          {filteredData.length ? (
                            <ul id="">
                              {filteredData.map((ele) => {
                                return (
                                  <li
                                    onClick={() =>
                                      (window.location.href = `${ele.link}`)
                                    }
                                  >
                                    <p>
                                      {ele.title}
                                      <br></br>
                                      {ele.content}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <ul>
                              <li>No Data Found</li>
                            </ul>
                          )}
                        </>
                      ) : null}
                    </div>
                  </Nav.Link>
                  <div className="WholeSaleAddOnChanges">
                    <Nav.Link
                      // href="https://b2b-v3.vercel.app/#/create-account"
                      href="/Wholesale-Inquiries"
                      className="m-0 pr-0 d-flex align-items-center HoverEffectBtn"
                      variant="primary"
                    >
                      <div className="btn btn-1 hover-filled-slide-right">
                        <span>Wholesale Inquiries </span>
                      </div>
                    </Nav.Link>

                    <Nav.Link
                      href="https://portal.beautyfashionsales.com/"
                      className="m-0 pr-0 d-flex align-items-center"
                    >
                      {" "}
                      Sign In
                    </Nav.Link>
                  </div>
                </Nav>
              </div>
            </div>
          </Navbar>
        </section>

        <section className="navbarNavThird">
          <Navbar className="menu menu-1" data-bs-theme="light">
            <Nav className="me-auto MenuUl ThirdNav">
              <NavLink to="/skincare" activeClassName="active" exact>
                Skincare
              </NavLink>
              <NavLink to="/makeup" activeClassName="active">
                Makeup
              </NavLink>
              <NavLink to="/fragrance" activeClassName="active">
                Fragrance
              </NavLink>
              <NavLink to="/body" activeClassName="active">
                body
              </NavLink>
              <NavLink to="/home" activeClassName="active">
                Home Decor
              </NavLink>
              <NavLink to="/haircare" activeClassName="active">
                Haircare
              </NavLink>

              {/* <NavLink to="/home-decor" activeClassName="active">
            HomeDecor
            </NavLink> */}
            </Nav>
          </Navbar>
        </section>
      </Container>
      <Container>
        <div className="secondNavBar">
          <div className="row">
            {/* dfe */}
            <div className="col-4">
              <Navbar expand="lg" className="">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0 widthCustom"
                    style={{ maxHeight: "60vh" }}
                    navbarScroll
                  >
                    <div className="NavSMallDrop ">
                      {/* 2 */}

                      <ul className="navbarMobScreen">
                        {/* <li> <a href="Brands"> Brands </a></li> */}
                        <li>
                          {" "}
                          <a href="skincare">Skincare </a>
                        </li>
                        <li>
                          <a href="haircare">Haircare</a>
                        </li>
                        <li>
                          <a href="fragrance">Fragrance</a>
                        </li>
                        <li>
                          <a href="makeup">Makeup </a>
                        </li>
                        <li>
                          <a href="body">body </a>
                        </li>
                        <li>
                          <a href="home">Home Decor</a>
                        </li>

                        {/* <li>                          
                          <a href="home-decor">Home Decor </a>
                        </li> */}
                      </ul>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              {/* fcedf */}
            </div>

            <div className="col-4  brandHeight">
              <Navbar.Brand className="brandNavCen" href="/">
                <img src={BFSG} />
              </Navbar.Brand>
            </div>

            <div className="col-4 d-flex justify-content-end align-content-center align-items-center">
              <div className="SeachleftBar d-flex align-items-center">
                <a href="#search" className=" pr-0">
                  <div class="search-container">
                    <input
                      className="search expandright"
                      id="searchright"
                      type="search"
                      name=""
                      placeholder="Search..."
                      onChange={handleSearch}
                    />
                    <label className="button searchbutton" for="searchright">
                      <span className="searchCode">Search...</span>{" "}
                      <span className="mglass">
                        <BiSearchAlt />{" "}
                      </span>{" "}
                    </label>{" "}
                    {searchString.length ? (
                      <>
                        {filteredData.length ? (
                          <ul id="">
                            {filteredData.map((ele) => {
                              return (
                                <li
                                  onClick={() =>
                                    (window.location.href = `${ele.link}`)
                                  }
                                >
                                  <p>
                                    {ele.title}
                                    <br></br>
                                    {ele.content}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <ul>
                            <li>No Data Found</li>
                          </ul>
                        )}
                      </>
                    ) : null}
                  </div>
                </a>
                <a
                  href="https://portal.beautyfashionsales.com/"
                  className="m-0 pr-0 d-flex align-items-center  text-decoration-none mt-2"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="Mobile3item">
        <div className="container">
          <ul className="Mobileitem d-flex ">
            <li>
              <a href="Brands">BRANDS </a>
            </li>
            <li
      className={`newArrival ${isActive ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        handleNavigateToNewArrivals();
      }}
    >
      New Arrivals
    </li>
            
            <li>
              {/* <a href="https://b2b-v3.vercel.app/#/create-account">*/}
              <a href="/Wholesale-Inquiries">Wholesale Inquiries </a>
            </li>
          </ul>
        </div>
      </div>

      <Container>
        {isVisible ? (
          <section className="navbarNavLast">
            <div className="d-flex ">
              <p>
              {Wholesale ?
              <p> Contact Us for Wholesale Inquiries </p>
              :
              <>
                <span className="NewArrivlsNav">NEW ARRIVALS</span> &nbsp;Apply
                for new brands &nbsp;
                <span className="SignUpStyling">                  
                  <div className="listHoverLink">
                    <div className="linkWrap">
                      <a href="/Wholesale-Inquiries" class="styleSignUp">
                        <span>SIGN UP</span>
                        <svg viewBox="0 0 13 20">
                          <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </span> 
                </>
                }              
              </p>

              <div className="SearchIconR" onClick={handleClick}>
                <a href="#">
                  <img src={Cross} />
                </a>
              </div>
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  );
}

export default NavbarHeader;
