import React from "react";
import "../Styles/Home.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { originAPi } from "../lib/store";

function BeautyBrandsList({beautyData}) {
  return (
    <div>
      <section className="beautyListsBrand">
        <Container>
          <h2 className="BeautyH2Start">
            YOUR NUMBER ONE SOURCE FOR UNIQUE BEAUTY BRANDS
          </h2>
          <div className="row">
            {beautyData?.map((item)=>(
         <div className="col-lg-4 col-md-6">
         <div className="BeautyBrandName">
           <img src={`${originAPi}${item?.Image_1__c}`} alt={item?.Tittle__c} />
           <h3>{item?.Tittle__c}</h3>
           <span>{item?.Sub_tittle__c}</span>
           <p>
             {item?.Description__c}
           </p>
         </div>
       </div>
            ))}
   

           
          </div>
        </Container>
      </section>
    </div>
  );
}

export default BeautyBrandsList;
