import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Styles/Home.css";
import { originAPi } from "../lib/store";
import { Link } from "react-scroll";

function BrandsOfB2b({data}) {
  const evenSecData = data?.filter(item => item?.Section_Number__c % 2 === 0);
  const oddSecData = data?.filter(item => item?.Section_Number__c % 2 !== 0);

  console.log({oddSecData});
  const groupedData = oddSecData?.reduce((acc, item) => {
    const subTitle = item?.Section_Number__c;
    if (!acc[subTitle]) acc[subTitle] = [];
    acc[subTitle].push(item);
    return acc;
  }, {});
  console.log({groupedData});

  return (
    <div>
      <section className="BrandsOf">
        <Container>
          <section>
            <div className="row B2bReverseImg">
              {Object.keys(groupedData).map(subTitle => {
                const items = groupedData[subTitle];

                // Check for missing left or right section
                const hasLeft = items.some(item => item?.Section_Position__c === "Left");
                const hasRight = items.some(item => item?.Section_Position__c === "Right");

                return (
                  <React.Fragment key={subTitle}>
                    {/* Render left side if exists, else show an empty div */}
                    {hasLeft ? (
                      items?.filter(item => item?.Section_Position__c === "Left").map(item => (
                        <div className="col-lg-6 col-md-6" key={item?.Id}>
                          <div className="BrandsImg BrandControlCenter MaisonImg">
                            <Link to={`brands/${item?.Tittle__c}`}>
                              <div className="Effect01">
                                <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
                              </div>
                              <h2 title={item?.Tittle__c}>
                                {item?.Tittle__c?.length > 15 
                                  ? `${item.Tittle__c.substring(0, 15)}...` 
                                  : item?.Tittle__c}
                              </h2>
                            </Link>
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
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-lg-6 col-md-6" key={subTitle}>
                         <div className="BrandsImg BrandControlCenter MaisonImg" style={{height: '100%'}}>
                          
                        </div>
                      </div>
                    )}

                    {/* Render right side if exists, else show an empty div */}
                    {hasRight ? (
                      items?.filter(item => item?.Section_Position__c === "Right").map(item => (
                        <div className="col-lg-6 col-md-6" key={item?.Id}>
                          <div className="BrandsImg BrandControlLeft BobbiImg">
                            <div className="contentWrite">
                              <Link to={`brands/${item?.Tittle__c}`}>
                                <h2 title={item?.Tittle__c}>
                                  {item?.Tittle__c?.length > 15 
                                    ? `${item.Tittle__c.substring(0, 15)}...` 
                                    : item?.Tittle__c}
                                </h2>
                              </Link>
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
                              <Link to={`brands/${item?.Tittle__c}`}>
                                <div className="Effect01">
                                  <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-lg-6 col-md-6" key={subTitle}>
                          <div className="BrandsImg BrandControlLeft BobbiImg" style={{height: '100%'}}>
                          <div className="contentWrite"></div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Even section rendering remains unchanged */}
            <div className="row">
  {evenSecData?.filter(item => item?.Section_Position__c === "Left").map(item => (
    <div className="col-lg-6 col-md-6" key={item?.Id}>
      <div className="BrandsImg BrandControlLeft ByredoImg">
        <div className="contentWrite">
          <Link to={`brands/${item?.Tittle__c}`}>
            <h2 title={item?.Tittle__c}>
              {item?.Tittle__c?.length > 15
                ? `${item.Tittle__c.substring(0, 15)}...`
                : item?.Tittle__c}
            </h2>
          </Link>
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
          <Link to={`brands/${item?.Tittle__c}`}>
            <div className="Effect01">
              <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  ))}
  {/* Check if the right section exists, if not render an empty div */}
  {evenSecData?.filter(item => item?.Section_Position__c === "Right").length === 0 ? (
    <div className="col-lg-6 col-md-6">
      <div className="BrandsImg BrandControlCenter DiptyqueImg" style={{height: '100%'}}>
        <div className="contentWrite" >
        
        </div>
      </div>
    </div>
  ) : (
    evenSecData?.filter(item => item?.Section_Position__c === "Right").map(item => (
      <div className="col-lg-6 col-md-6" key={item?.Id}>
        <div className="BrandsImg BrandControlCenter DiptyqueImg">
          <Link to={`brands/${item?.Tittle__c}`}>
            <div className="Effect01">
              <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
            </div>
          </Link>
          <div className="contentWrite">
            <Link to={`/brands/${item?.Tittle__c}`}>
              <h2 title={item?.Tittle__c}>
                {item?.Tittle__c?.length > 15
                  ? `${item.Tittle__c.substring(0, 15)}...`
                  : item?.Tittle__c}
              </h2>
            </Link>
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
          </div>
        </div>
      </div>
    ))
  )}
</div>
          </section>
        </Container>
      </section>
    </div>
  );
}

export default BrandsOfB2b;
