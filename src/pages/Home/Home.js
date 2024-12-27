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
import { newArrivals , retailers , testimonials , getBeautyBrandsList , homePage} from "../../lib/store";
import LoadingSpinner from "../../Components/Loader/Loader";

const HomeNew = () => {
    const [data, setData] = useState(() => {
        
        const savedData = localStorage.getItem("/newArrivals");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [retailerData, setRetailerData] = useState(() => {
      
        const savedData = localStorage.getItem("/retailer");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [testimonailData, setTestimonailData] = useState(() => {
        
        const savedData = localStorage.getItem("/testimonial");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [beautyBrandsListData, setBeautyBrandsListData] = useState(() => {
      
        const savedData = localStorage.getItem("/beautyBrandsList");
        return savedData ? JSON.parse(savedData) : null;
      });


      const [homeData, setHomeData] = useState(() => {
        
        const savedData = localStorage.getItem("/homeData");
        return savedData ? JSON.parse(savedData) : null;
      });


      const [loading, setLoading] = useState(!(data  && retailerData && testimonailData && beautyBrandsListData && homeData)); // Show loader only if no cached data
    
      const fetchAndSaveData = async () => {
        try {  // Fetch skincare details


          const homeDataRes = await homePage();
          if (homeDataRes?.data?.brands) {
            const savedHomePageData = localStorage.getItem("/homeData");
            const parsedHomePageData = savedHomePageData
              ? JSON.parse(savedHomePageData)
              : null;
    
            if (JSON.stringify(parsedHomePageData) !== JSON.stringify(homeDataRes?.data?.brands)) {
              setHomeData(homeDataRes?.data?.brands);
              localStorage.setItem("/homeData", JSON.stringify(homeDataRes?.data?.brands));
            } else {
                setHomeData(parsedHomePageData);
            }
          }
          
          if (homeDataRes?.data?.newArrivals) {
            const savedSkincareData = localStorage.getItem("/newArrivals");
            const parsedSkincareData = savedSkincareData
              ? JSON.parse(savedSkincareData)
              : null;
    
            if (JSON.stringify(parsedSkincareData) !== JSON.stringify(homeDataRes?.data?.newArrivals)) {
              setData(homeDataRes?.data?.newArrivals);
              localStorage.setItem("/newArrivals", JSON.stringify(homeDataRes?.data?.newArrivals));
            } else {
              setData(parsedSkincareData);
            }
          }
    
          // Fetch category details
          
          if (homeDataRes?.data?.retailers) {
            const savedRetailereData = localStorage.getItem("/retailer");
            const parsedRetailerData = savedRetailereData
              ? JSON.parse(savedRetailereData)
              : null;
    
            if (JSON.stringify(parsedRetailerData) !== JSON.stringify(homeDataRes?.data?.retailers)) {
              setRetailerData(homeDataRes?.data?.retailers);
              localStorage.setItem("/retailer", JSON.stringify(homeDataRes?.data?.retailers));
            } else {
                setRetailerData(parsedRetailerData);
            }
          }
          

         
          if (homeDataRes?.data?.testimonials) {
            const savedTestimonialeData = localStorage.getItem("/testimonial");
            const parsedTestimonialeData = savedTestimonialeData
              ? JSON.parse(savedTestimonialeData)
              : null;
    
            if (JSON.stringify(parsedTestimonialeData) !== JSON.stringify(homeDataRes?.data?.testimonials)) {
                setTestimonailData(homeDataRes?.data?.testimonials);
              localStorage.setItem("/testimonial", JSON.stringify(homeDataRes?.data?.testimonials));
            } else {
                setTestimonailData(parsedTestimonialeData);
            }
          }


        
          if (homeDataRes?.data?.beautyBrands) {
            const savedBeautyBrandsListData = localStorage.getItem("/beautyBrandsList");
            const parsedBeautyBrandListData = savedBeautyBrandsListData
              ? JSON.parse(savedBeautyBrandsListData)
              : null;
    
            if (JSON.stringify(parsedBeautyBrandListData) !== JSON.stringify(homeDataRes?.data?.beautyBrands)) {
                setBeautyBrandsListData(homeDataRes?.data?.beautyBrands);
              localStorage.setItem("/beautyBrandsList", JSON.stringify(homeDataRes?.data?.beautyBrands));
            } else {
              setBeautyBrandsListData(parsedBeautyBrandListData);
            }
          }
    

          



          
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Stop loading
        }
        
      };
    
      useEffect(() => {
    
       
          fetchAndSaveData();
      
      }, []); // Only run on component mount
    return(
        <div>
            <NavbarHeader/>
          {loading ? <LoadingSpinner/>  :  <>
           {/* <LururyPage></LururyPage> */}
          
            {/* <NavScrollExample/> */}
                {/* <TopBannerSection/> */}
            <BrandsOfB2b data = {homeData}/>
            <BeautyBrandsList beautyData ={beautyBrandsListData}/>
          {/* <Sliderr/> */}
            <Arriavals data ={data}/>
            <OurRetailers retailerData = {retailerData}/>
            <Testimonial testimonial = {testimonailData}/>
            <FooterBfsg/>
          </>}
            
           
        </div>
    )
}

export default HomeNew