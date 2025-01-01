import React from "react";
import "../Styles/Home.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { originAPi } from "../lib/store";

function BeautyBrandsList({ beautyData }) {
  const maxLength = 60;

  return (
    <div>
      <section className="beautyListsBrand">
        <Container>
          <h2 className="BeautyH2Start">
            YOUR NUMBER ONE SOURCE FOR UNIQUE BEAUTY BRANDS
          </h2>
          <div className="row">
            {beautyData?.map((item) => {
              const description = item?.Description__c || "";
              const shortDescription =
                description.length > maxLength
                  ? description.substring(0, maxLength) + "..."
                  : description;

              return (
                <div className="col-lg-4 col-md-6" key={item?.Tittle__c}>
                  <div className="BeautyBrandName">
                    <img
                      src={`${originAPi}${item?.Image_1__c}`}
                      alt={item?.Tittle__c}
                    />
                    <h3>{item?.Tittle__c}</h3>
                    <span>{item?.Sub_tittle__c}</span>
                    <p title={description} style={{ cursor: 'pointer' }}>{shortDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default BeautyBrandsList;
