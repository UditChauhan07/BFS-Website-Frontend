import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { BsArrowUp } from "react-icons/bs";

import Victoria from "../Image/B2B-Website-UI/victoria.png";

function Sliderr() {
  const scrollTop = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 2800
        ? (scrollTop.current.style.display = 'inline-block')
        : (scrollTop.current.style.display = 'none');
    });
  }, []);

  const options = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="NewArriavalsList">
      <Container>
        <div id="root"></div>
        <h3>New Arrivals</h3>

        <OwlCarousel className="owl-theme" {...options}>
          {/* Your carousel items here */}
        </OwlCarousel>

        <span
          onClick={handleScrollTop}
          className="circle"
          ref={scrollTop}
        >
          {/* <BsArrowUp /> */}
          <img src=''/>
        </span>
      </Container>
    </div>
  );
}

export default Sliderr;
