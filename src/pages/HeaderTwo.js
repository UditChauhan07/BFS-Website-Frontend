import React from "react";
import Navbar from "react-bootstrap/Navbar";
import BFSG from "../Image/LogoBFSG.svg";
import Nav from "react-bootstrap/Nav";

const HeaderTwo = () => {
  return (
    <div>
      <div className="container">
        <div className="BorderBottomNewheader">
          <Navbar.Brand href="/" className="m-0">
            <img src={BFSG} />
          </Navbar.Brand>
          <Nav.Link
            href="https://bfsportal-react.vercel.app/"
            className="m-0 pr-0 d-flex align-items-center"
          >
            Sign In
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
