import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarHeader from "../../pages/Navbar";
import FooterBfsg from "../../pages/FooterBfsg";
import { getManufactuersPageDetails, topProductDetails } from "../../lib/store";
import OwlCarousel from "react-owl-carousel";
import Container from "react-bootstrap/Container";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { originAPi } from "../../lib/store";
import LoadingSpinner from "../Loader/Loader";
import dummy from '../../Image/dummy.png'
function BrandPages() {
  const params = useParams();
  const slug = params.slug;

  // Load initial state from local storage
  const formattedSlug = slug.replace(/_/g, " ");

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("manufacturerData");
    return savedData ? JSON.parse(savedData).filter((item) => item.Tittle__c === formattedSlug) : [];
  });
  
  const [topProductData, setTopProductData] = useState(() => {
    const savedData = localStorage.getItem("topProducts");
    return savedData ? JSON.parse(savedData).filter((item) => item.Tittle__c === formattedSlug) : [];
  });
  const [loading, setLoading] = useState(!data.length || !topProductData.length);
  const [isComingSoon, setIsComingSoon] = useState(false);

  const getData = async () => {
    try {
      const [manufacturerResponse, topProductsResponse] = await Promise.all([
        getManufactuersPageDetails(),
        topProductDetails(),
      ]);
  
      const manufacturerData = manufacturerResponse?.data || [];
      const topProducts = topProductsResponse?.data || [];
  
      const storedManufacturerData = localStorage.getItem("manufacturerData");
      const storedTopProducts = localStorage.getItem("topProducts");
  
      if (
        JSON.stringify(manufacturerData) !== storedManufacturerData ||
        JSON.stringify(topProducts) !== storedTopProducts
      ) {
        localStorage.setItem("manufacturerData", JSON.stringify(manufacturerData));
        localStorage.setItem("topProducts", JSON.stringify(topProducts));
      }
  
      const filteredManufacturerData = manufacturerData.filter((item) => item.Tittle__c === formattedSlug);
      const filteredTopProducts = topProducts.filter((item) => item.Tittle__c === formattedSlug);
  
      setData(filteredManufacturerData);
      setTopProductData(filteredTopProducts);
  
      setIsComingSoon(filteredManufacturerData.length === 0);
    } catch (error) {
      console.error("Error fetching brand data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    
      getData();
    
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

  return (
    <>
      <div>
        <NavbarHeader />
        {loading ? (
  // Show loading spinner while fetching data
  <LoadingSpinner />
) : isComingSoon || (data.length === 0 && topProductData.length === 0) ? (
  // Show "No Data Available" message if no data for slug
  <section className="no-data-section text-center py-5">
    <h2>No Data Available</h2>
    <p>We couldn't find any information for this brand. Please check back later.</p>
  </section>
) : (
  // Render main content if data exists
  <section>
    <div className="container">
      <div className="mt-5"></div>
      {data?.map((item) => (
        <div className="row" key={item.Id}>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 m-auto">
            <div className="BnadLogo w-100">
              <img 
                src={item?.Image_1__c !== null? `${originAPi}${item?.Image_1__c}` : dummy} 
                alt={item?.Tittle__c || 'Dummy Image'} 
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-auto ">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 borderRight">
                <img
                  className="img-fluid heightWidth"
                  src={`${originAPi}${item?.Additional_Images__c}`}
                  alt="Additional"
                />
              </div>
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 m-auto ">
                <h1 className="titleWithLogo">{item?.Sub_tittle__c}</h1>
              </div>
            </div>
            <div className="autoHeight" id="ScrollRight">
              <p className="seti">{item?.Description__c}</p>
              <p className="seti">{item?.Extra_Description__c}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="TopProducts NewArriavalsList">
        <h3 className="mt-5">TOP PRODUCTS</h3>
        <OwlCarousel className="owl-theme" {...options}>
          {topProductData.map((item) => (
            <div className="item" key={item.Id}>
              <div className="ArriavalsInnerContent">
                <h4>{item?.Sub_tittle__c}</h4>
                <p>{item?.Description__c}</p>
                <a href="https://portal.beautyfashionsales.com/">
                  Shop The Collection
                </a>
                <div className="fitContent">
                  <img
                    src={`${originAPi}${item?.Image_1__c}`}
                    alt="Top Product"
                  />
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  </section>
)}

        <FooterBfsg />
      </div>
    </>
  );
}

export default BrandPages;