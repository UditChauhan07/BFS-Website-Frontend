import React, { useEffect, useState } from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { skinCareDetails, originAPi, catogeryDetails } from "../lib/store";
import LoadingSpinner from "../Components/Loader/Loader";
import dummy from '../Image/dummy.png'
const Skincare = () => {
  const [data, setData] = useState(() => {
    // Load skincare data from localStorage if it exists
    const savedData = localStorage.getItem("/skincare");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [cData, setCData] = useState(() => {
    // Load category data from localStorage if it exists
    const savedData = localStorage.getItem("/skincareBanner");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [loading, setLoading] = useState(!(data && cData)); // Show loader only if no cached data

  const fetchAndSaveData = async () => {
    try {
      // Fetch skincare details
      const skincareResponse = await skinCareDetails();
      if (skincareResponse?.data?.brands) {
        const savedSkincareData = localStorage.getItem("/skincare");
        const parsedSkincareData = savedSkincareData
          ? JSON.parse(savedSkincareData)
          : null;

        if (JSON.stringify(parsedSkincareData) !== JSON.stringify(skincareResponse?.data?.brands)) {
          setData(skincareResponse?.data?.brands);
          localStorage.setItem("/skincare", JSON.stringify(skincareResponse?.data?.brands));
        } else {
          setData(parsedSkincareData);
        }
      }

      if (skincareResponse?.data?.banners) {
        const savedCategoryData = localStorage.getItem("/skincareBanner");
        const parsedCategoryData = savedCategoryData
          ? JSON.parse(savedCategoryData)
          : null;

        if (JSON.stringify(parsedCategoryData) !== JSON.stringify(skincareResponse?.data?.banners)) {
          setCData(skincareResponse?.data?.banners);
          localStorage.setItem("/skincareBanner", JSON.stringify(skincareResponse?.data?.banners));
        } else {
          setCData(parsedCategoryData);
        }
      }



      

  
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    
    
      fetchAndSaveData();

  }, []);
  return (
    <div>
      <NavbarHeader />
      <div>
        <section className="B3bPageTop">
          <div className="container">
            {/* Show loading spinner only if data is not available */}
            {loading ? (
              <LoadingSpinner/>
            ) : (
              <>
                {/* Render the hero banner */}
                {cData?.map((item) => (
                    <div className="HeroBanner" key={item?.Id}>
                      <img src={`${originAPi}${item?.Image_1__c}`} alt={item?.Tittle__c} />
                      <h3>{item?.Tittle__c}</h3>
                    </div>
                  ))}

                <div>
                  <div className="row g-0">
                    {/* Render skincare products */}
                    {data?.map((item) => (
                      <div className="col-lg-3 col-md-3 col-sm-6" key={item?.Id}>
                        <Link to={`/brands/${item.Tittle__c?.replace(/ /g, "_")}`}>
                          <div className="BrandProduct BR BB">
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
              </>
            )}
          </div>
        </section>
      </div>
      <FooterBfsg />
    </div>
  );
};

export default Skincare;
