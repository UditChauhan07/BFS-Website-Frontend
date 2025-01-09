import React, { useEffect, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import { originAPi } from "../lib/store";

function Sliderr({data}) {
  const scrollTop = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 2800
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  }, []);

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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="newarrivals" className="NewArriavalsList">
        <Container>
          <h3>New Arrivals</h3>

          <OwlCarousel className="owl-theme" {...options}>
          {data?.map((item)=>(
            <div class="item">
            
 <div>
 <div className="ArriavalsInnerContent">
   <h4>{item?.Tittle__c}</h4>
   <p>{item?.Description__c}</p>

   <a href="https://b2b-v3.vercel.app/#/login">
     Shop The Collection
   </a>
   <div className="fitContent">
      <img src={`${originAPi}${item?.Image_1__c}`} alt={item?.Tittle__c} />
   </div>
 </div>
</div>
           
             
            </div>
               ))}
           
          </OwlCarousel>
          <span onClick={handleScrollTop} className="circle" ref={scrollTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30 0C13.4487 0 0 13.4503 0 30C0 46.5497 13.4503 60 30 60C46.5497 60 60 46.5497 60 30C60 13.4503 46.5497 0 30 0ZM30 1.16329C45.8922 1.16329 58.8367 14.1078 58.8367 30C58.8367 45.8922 45.8922 58.8367 30 58.8367C14.1078 58.8367 1.16329 45.8922 1.16329 30C1.16329 14.1078 14.1078 1.16329 30 1.16329ZM30.0297 15.9763C29.8847 15.9763 29.7397 16.029 29.6194 16.1493L20.9178 24.8509C20.6756 25.0931 20.6756 25.4276 20.9178 25.6681L20.9326 25.683C21.1139 25.8725 21.478 25.8922 21.7136 25.6566L21.997 25.3732H22.0003L29.4233 17.9469V43.4388C29.4233 43.7749 29.677 44.027 30.0148 44.027C30.3526 44.027 30.6031 43.7782 30.6031 43.4388V17.9618L38.3094 25.6681C38.4314 25.7901 38.5681 25.8412 38.728 25.8412C38.8878 25.8412 39.018 25.7917 39.1432 25.6681C39.3854 25.4259 39.3854 25.0914 39.1432 24.8509L30.4416 16.1493C30.3213 16.029 30.1747 15.9763 30.0297 15.9763Z"
                fill="black"
              />
            </svg>
          </span>
        </Container>
      </div>
    </div>
  );
}

export default Sliderr;
