import React, { useEffect , useState } from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import dummy from '../Image/dummy.png'
import { makeupDetails , originAPi , catogeryDetails } from "../lib/store";
import LoadingSpinner from "../Components/Loader/Loader";
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
     const [cData, setCData] = useState(() => {
        // Load category data from localStorage if it exists
        const savedData = localStorage.getItem("/MakeupBanner");
        return savedData ? JSON.parse(savedData) : null;
      });
      const [loading, setLoading] = useState(!(data && cData)); 
  
    const getData = async () => {
      try {
        const user = await makeupDetails();
        if (user?.data?.brands) {
          console.log({ user });
          const savedData = localStorage.getItem("/makeup");
          const parsedSavedData = savedData ? JSON.parse(savedData) : null;
  
          // Compare new data with saved data
          if (JSON.stringify(parsedSavedData) !== JSON.stringify(user?.data?.brands)) {
            setData(user?.data?.brands); // Update state
            localStorage.setItem("/makeup", JSON.stringify(user?.data?.brands)); // Save updated data to localStorage
          }
        }
        if (user?.data?.banners) {
          const savedCategoryData = localStorage.getItem("/MakeupBanner");
          const parsedCategoryData = savedCategoryData
            ? JSON.parse(savedCategoryData)
            : null;
  
          if (JSON.stringify(parsedCategoryData) !== JSON.stringify(user?.data?.banners)) {
            setCData(user?.data?.banners);
            localStorage.setItem("/MakeupBanner", JSON.stringify(user?.data?.banners));
          } else {
            setCData(parsedCategoryData);
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

      <section className="B3bPageTop Makeup">
        <div className="container">
          {loading  ? (<LoadingSpinner/>) : ( <>
            {cData?.map((item) => (
                             <div className="HeroBanner" key={item?.Id}>
                               <img src={`${originAPi}${item?.Image_1__c}`} alt={item?.Tittle__c} />
                               <h3>{item?.Tittle__c}</h3>
                             </div>
                           ))}

          <div>
            <div className="row g-0">
              {data?.map((item)=>(
   <div className="col-lg-3 col-md-3 col-sm-6 ">
   <Link to={`/brands/${item?.Tittle__c}`}>
     <div className="BrandProduct BR BB  ">
       <div>
       <img 
  src={item?.Image_1__c !== null? `${originAPi}${item?.Image_1__c}` : dummy} 
  alt={item?.Tittle__c || 'Dummy Image'} 
/>
       </div>

       <h2>{item?.Tittle__c}</h2>
     </div>
   </Link>
 </div>
              ))}
           

           </div>
          </div>
           </>)}
          
        </div>
      </section>

      <FooterBfsg />
    </div>
  );
}

export default Makeup;
