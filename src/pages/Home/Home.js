import React , {useState , useEffect} from "react";
import NavbarHeader from "../Navbar";
import BrandsOfB2b from "../BrandsOfB2b";
import BeautyBrandsList from "../BeautyBrandsList";
import Arriavals from "../Arriavals";
import OurRetailers from "../OurRetailers";
import FooterBfsg from "../FooterBfsg";
import Testimonial from "../Testimonial/Testimonial";
// import TopBannerSection from "../TopBannerSection";
// import LururyPage from '../LuxuryMeet/Luxury'
import { newArrivals , retailers , testimonials } from "../../lib/store";

const HomeNew = () => {
    const [data, setData] = useState(() => {
        // Load skincare data from localStorage if it exists
        const savedData = localStorage.getItem("/newArrivals");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [retailerData, setRetailerData] = useState(() => {
        // Load skincare data from localStorage if it exists
        const savedData = localStorage.getItem("/retailer");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [testimonailData, setTestimonailData] = useState(() => {
        // Load skincare data from localStorage if it exists
        const savedData = localStorage.getItem("/testimonial");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [loading, setLoading] = useState(!(data)); // Show loader only if no cached data
    
      const fetchAndSaveData = async () => {
        try {
          // Fetch skincare details
          const skincareResponse = await newArrivals();
          if (skincareResponse?.data) {
            const savedSkincareData = localStorage.getItem("/newArrivals");
            const parsedSkincareData = savedSkincareData
              ? JSON.parse(savedSkincareData)
              : null;
    
            if (JSON.stringify(parsedSkincareData) !== JSON.stringify(skincareResponse.data)) {
              setData(skincareResponse.data);
              localStorage.setItem("/newArrivals", JSON.stringify(skincareResponse.data));
            } else {
              setData(parsedSkincareData);
            }
          }
    
          // Fetch category details
          const getRetailers = await retailers();
          if (getRetailers?.data) {
            const savedRetailereData = localStorage.getItem("/retailer");
            const parsedRetailerData = savedRetailereData
              ? JSON.parse(savedRetailereData)
              : null;
    
            if (JSON.stringify(parsedRetailerData) !== JSON.stringify(getRetailers.data)) {
              setRetailerData(getRetailers.data);
              localStorage.setItem("/retailer", JSON.stringify(getRetailers.data));
            } else {
                setRetailerData(parsedRetailerData);
            }
          }
          

          const testimonialRes = await testimonials();
          if (testimonialRes?.data) {
            const savedTestimonialeData = localStorage.getItem("/testimonial");
            const parsedTestimonialeData = savedTestimonialeData
              ? JSON.parse(savedTestimonialeData)
              : null;
    
            if (JSON.stringify(parsedTestimonialeData) !== JSON.stringify(testimonialRes.data)) {
                setTestimonailData(testimonialRes.data);
              localStorage.setItem("/testimonial", JSON.stringify(testimonialRes.data));
            } else {
                setTestimonailData(parsedTestimonialeData);
            }
          }
    
          
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };
    
      useEffect(() => {
        // Fetch data if not already cached
        if (!data || retailerData) {
          fetchAndSaveData();
        }
      }, []); // Only run on component mount
    return(
        <div>
            
            {/* <LururyPage></LururyPage> */}
            <NavbarHeader/>
            {/* <NavScrollExample/> */}
                {/* <TopBannerSection/> */}
            <BrandsOfB2b/>
            <BeautyBrandsList/>
          {/* <Sliderr/> */}
            <Arriavals data ={data}/>
            <OurRetailers retailerData = {retailerData}/>
            <Testimonial testimonial = {testimonailData}/>
            <FooterBfsg/>
        </div>
    )
}

export default HomeNew