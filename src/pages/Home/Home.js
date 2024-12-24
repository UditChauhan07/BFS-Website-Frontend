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
      const [beautyBrandsListData, setBeautyBrandsListData] = useState(() => {
        // Load skincare data from localStorage if it exists
        const savedData = localStorage.getItem("/beautyBrandsList");
        return savedData ? JSON.parse(savedData) : null;
      });


      const [homeData, setHomeData] = useState(() => {
        // Load skincare data from localStorage if it exists
        const savedData = localStorage.getItem("/homeData");
        return savedData ? JSON.parse(savedData) : null;
      });


      const [loading, setLoading] = useState(!(data  && retailerData && testimonailData && beautyBrandsListData && homeData)); // Show loader only if no cached data
    
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


          const beautyBrandsListRes = await getBeautyBrandsList();
          if (beautyBrandsListRes?.data) {
            const savedBeautyBrandsListData = localStorage.getItem("/beautyBrandsList");
            const parsedBeautyBrandListData = savedBeautyBrandsListData
              ? JSON.parse(savedBeautyBrandsListData)
              : null;
    
            if (JSON.stringify(parsedBeautyBrandListData) !== JSON.stringify(beautyBrandsListRes.data)) {
                setBeautyBrandsListData(beautyBrandsListRes.data);
              localStorage.setItem("/beautyBrandsList", JSON.stringify(beautyBrandsListRes.data));
            } else {
              setBeautyBrandsListData(parsedBeautyBrandListData);
            }
          }
    

          const homeDataRes = await homePage();
          if (homeDataRes?.data) {
            const savedHomePageData = localStorage.getItem("/homeData");
            const parsedHomePageData = savedHomePageData
              ? JSON.parse(savedHomePageData)
              : null;
    
            if (JSON.stringify(parsedHomePageData) !== JSON.stringify(homeDataRes.data)) {
              setHomeData(homeDataRes.data);
              localStorage.setItem("/homeData", JSON.stringify(homeDataRes.data));
            } else {
                setHomeData(parsedHomePageData);
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