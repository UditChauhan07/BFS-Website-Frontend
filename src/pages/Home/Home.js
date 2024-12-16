import React from "react";
import NavbarHeader from "../Navbar";
import BrandsOfB2b from "../BrandsOfB2b";
import BeautyBrandsList from "../BeautyBrandsList";
import Arriavals from "../Arriavals";
import OurRetailers from "../OurRetailers";
import FooterBfsg from "../FooterBfsg";
import Testimonial from "../Testimonial/Testimonial";
// import TopBannerSection from "../TopBannerSection";
// import LururyPage from '../LuxuryMeet/Luxury'


const HomeNew = () => {
    return(
        <div>
            
            {/* <LururyPage></LururyPage> */}
            <NavbarHeader/>
            {/* <NavScrollExample/> */}
                {/* <TopBannerSection/> */}
            <BrandsOfB2b/>
            <BeautyBrandsList/>
          {/* <Sliderr/> */}
            <Arriavals/>
            <OurRetailers/>
            <Testimonial/>
            <FooterBfsg/>
        </div>
    )
}

export default HomeNew