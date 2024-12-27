import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Styles/Home.css";
import { originAPi } from "../lib/store";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

function BrandsOfB2b({ data }) {
  const navigate = useNavigate()
  const groupedData = data?.reduce((acc, item) => {
    const sectionNumber = item?.Section_Number__c;
    if (!acc[sectionNumber]) acc[sectionNumber] = [];
    acc[sectionNumber].push(item);
    return acc;
  }, {});

  return (
    <div>
      <section className="BrandsOf">
        <Container>
          {Object.keys(groupedData).map(sectionNumber => {
            const sectionItems = groupedData[sectionNumber];
            const isOdd = parseInt(sectionNumber) % 2 !== 0;

            return (
              <div
                className={`row ${isOdd ? "B2bReverseImg" : ""}`}
                key={`section-${sectionNumber}`}
              >
                {["Left", "Right"].map(position => {
                  const items = sectionItems.filter(
                    item => item?.Section_Position__c === position
                  );

                  // Render items for the current position
                  if (items.length > 0) {
                    return items.map(item => (
                      <div className="col-lg-6 col-md-6" key={item?.Id}>
                        <div
                          className={`BrandsImg ${
                            isOdd
                              ? position === "Left"
                                ? "BrandControlCenter MaisonImg"
                                : "BrandControlLeft BobbiImg"
                              : position === "Left"
                              ? "BrandControlLeft BobbiImg"
                              : "BrandControlCenter MaisonImg"
                          }`}
                        >
                          {position === (isOdd ? "Left" : "Right") ? (
                            <>
                              
                                <div className="Effect01" onClick={()=>navigate(`/brands/${item?.Tittle__c}`)}>
                                  <img
                                    src={`${originAPi}${item?.Image_1__c}`}
                                    alt={item?.Tittle__c || ""}
                                  />
                                </div>
                                <h2 title={item?.Tittle__c}  onClick={()=>navigate(`/brands/${item?.Tittle__c}`)}>
                                  {item?.Tittle__c?.length > 15
                                    ? `${item.Tittle__c.substring(0, 16)}..`
                                    : item?.Tittle__c}
                                </h2>
                            
                              <p>{item?.Description__c}</p>
                              <div className="sectionContent">
                                <div className="listHoverLink">
                                  <div className="linkWrap">
                                    <a href="/Wholesale-Inquiries" className="style-4">
                                      <span>Apply Now</span>
                                      <svg viewBox="0 0 13 20">
                                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="contentWrite">
                               
                                  <h2 title={item?.Tittle__c}  onClick={()=>navigate(`/brands/${item?.Tittle__c}`)}>
                                    {item?.Tittle__c?.length > 15
                                      ? `${item.Tittle__c.substring(0, 16)}..`
                                      : item?.Tittle__c}
                                  </h2>
                              
                                <p>{item?.Description__c}</p>
                                <div className="sectionContent JustifyStart">
                                  <div className="listHoverLink">
                                    <div className="linkWrap">
                                      <a href="/Wholesale-Inquiries" className="style-4">
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
                              
                                  <div className="Effect01"  onClick={()=>navigate(`/brands/${item?.Tittle__c}`)}>
                                    <img
                                      src={`${originAPi}${item?.Image_1__c}`}
                                      alt={item?.Tittle__c || ""}
                                    />
                                  </div>
                               
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ));
                  }

                  // Render empty div for missing position
                  return (
                    <div className="col-lg-6 col-md-6" key={`${sectionNumber}-${position}`}>
                      <div
                        className={`BrandsImg ${
                          isOdd
                            ? position === "Left"
                              ? "BrandControlCenter MaisonImg"
                              : "BrandControlLeft BobbiImg"
                            : position === "Left"
                            ? "BrandControlLeft BobbiImg"
                            : "BrandControlCenter MaisonImg"
                        }`}
                        style={{ height: "98%" }}
                      >
                        <div className="contentWrite"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Container>
      </section>
    </div>
  );
}

export default BrandsOfB2b;




