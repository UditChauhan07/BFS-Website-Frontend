import React, { useEffect , useState } from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SkinCare1 from "../Image/MAKEUP/BobbiBro.png";
import SkinCare2 from "../Image/MAKEUP/TERRY.png";
import SkinCare3 from "../Image/MAKEUP/LAUDER.png";
import SkinCare4 from "../Image/MAKEUP/KEVYN.png";
import SkinCare7 from "../Image/MAKEUP/RMSBEAUTY.png";

import SkinCare6 from "../Image/MAKEUP/Smashbox.png";
import SkinCare8 from "../Image/MAKEUP/SKLBlack.png";
import HeroBannerMakeup from "../Image/MAKEUP/MakeUpBanner.png";
import { makeupDetails , originAPi } from "../lib/store";
function Makeup() {
  useEffect(() => {
    document.title =
      "Makeup by Bobby Brown, By Terry, Estree Launder, Kevyn Aucoin Cosmetics, RMS Beauty, Smashbox | Beauty Fashion Sales Group ";
  }, []);

    const [data, setData] = useState(() => {
      // Load data from localStorage if it exists
      const savedData = localStorage.getItem("/makeup");
      return savedData ? JSON.parse(savedData) : null;
    });
  
    const getData = async () => {
      try {
        const user = await makeupDetails();
        if (user?.data) {
          console.log({ user });
          const savedData = localStorage.getItem("/makeup");
          const parsedSavedData = savedData ? JSON.parse(savedData) : null;
  
          // Compare new data with saved data
          if (JSON.stringify(parsedSavedData) !== JSON.stringify(user.data)) {
            setData(user.data); // Update state
            localStorage.setItem("/makeup", JSON.stringify(user.data)); // Save updated data to localStorage
          }
        }
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };
  
    useEffect(() => {
      getData(); // Fetch data on component mount
    }, []);
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop Makeup">
        <div className="container">
          <div className="HeroBanner">
            <img src={HeroBannerMakeup} alt="" />
            <h3>Makeup</h3>
          </div>

          <div>
            <div className="row g-0">
              {data?.map((item)=>(
   <div className="col-lg-3 col-md-3 col-sm-6 ">
   <Link to={`/brands/${item?.Tittle__c}`}>
     <div className="BrandProduct BR BB  ">
       <div>
         <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
       </div>

       <h2>{item?.Tittle__c}</h2>
     </div>
   </Link>
 </div>
              ))}
           

           </div>
          </div>
        </div>
      </section>

      <FooterBfsg />
    </div>
  );
}

export default Makeup;
