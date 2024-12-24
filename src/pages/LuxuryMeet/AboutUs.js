import React, { useEffect , useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Luximg from "../../Image/About Page Image.png";
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import LaunchCalendar from "../LaunchCalendar/LaunchCalendar";
import { aboutPage , originAPi } from "../../lib/store";
import LoadingSpinner from "../../Components/Loader/Loader";
function AboutUs() {
   const [data, setData] = useState(() => {
        // Load data from localStorage if it exists
        const savedData = localStorage.getItem("/about-us");
        return savedData ? JSON.parse(savedData) : null;
      });
       const [loading, setLoading] = useState(!(data)); 
       const getData = async () => {
        try {
          const user = await aboutPage();
          if (user?.data) {
            console.log({ user });
            const savedData = localStorage.getItem("/about-us");
            const parsedSavedData = savedData ? JSON.parse(savedData) : null;
    
            // Compare new data with saved data
            if (JSON.stringify(parsedSavedData) !== JSON.stringify(user.data)) {
              setData(user.data); // Update state
              localStorage.setItem("/about-us", JSON.stringify(user.data)); // Save updated data to localStorage
            }
          }
         
        } catch (error) {
          console.error("Error fetching brand data:", error);
        }
        finally{
          setLoading(false)
        }
      };
    
      useEffect(() => {
     
          getData();
        
      }, []);
  return (
    <div>
      <NavbarHeader />

      {/* <LaunchCalendar /> */}
      {loading ? <LoadingSpinner/> :  <section>
        <Container>
        {data?.map((item)=>(
                 <div className="row">
           
                 <div className="col-lg-5 col-md-6 col-sm-12 m-auto">
                   <div className="LuxContent">
                     <h1 className="mb30 text-start">
                      {item?.Tittle__c}
                     </h1>
     
                     <p className="mb30 ">
                      {item?.Sub_tittle__c}
                     </p>
     
                     <p className="">
                       {item?.Description__c}
                     </p>
                   </div>
                 </div>
     
                 <div className="col-lg-7 col-md-6 col-sm-12 m-auto">
                   <div className="LuxImage">
                      <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
                   </div>
                   <div />
                 </div>
               </div>
          ))}
     
        </Container>
      </section>}
    
      <FooterBfsg />
    </div>
  );
}

export default AboutUs;
