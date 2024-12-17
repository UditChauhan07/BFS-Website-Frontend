import React, { useEffect, useState } from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { skinCareDetails, originAPi, catogeryDetails } from "../lib/store";
import LoadingSpinner from "../Components/Loader/Loader";

const Skincare = () => {
  const [data, setData] = useState(() => {
    // Load skincare data from localStorage if it exists
    const savedData = localStorage.getItem("/skincare");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [cData, setCData] = useState(() => {
    // Load category data from localStorage if it exists
    const savedData = localStorage.getItem("/catogery");
    return savedData ? JSON.parse(savedData) : null;
  });
  const [loading, setLoading] = useState(!(data && cData)); // Show loader only if no cached data

  const fetchAndSaveData = async () => {
    try {
      // Fetch skincare details
      const skincareResponse = await skinCareDetails();
      if (skincareResponse?.data) {
        const savedSkincareData = localStorage.getItem("/skincare");
        const parsedSkincareData = savedSkincareData
          ? JSON.parse(savedSkincareData)
          : null;

        if (JSON.stringify(parsedSkincareData) !== JSON.stringify(skincareResponse.data)) {
          setData(skincareResponse.data);
          localStorage.setItem("/skincare", JSON.stringify(skincareResponse.data));
        } else {
          setData(parsedSkincareData);
        }
      }

      // Fetch category details
      const categoryResponse = await catogeryDetails();
      if (categoryResponse?.data) {
        const savedCategoryData = localStorage.getItem("/catogery");
        const parsedCategoryData = savedCategoryData
          ? JSON.parse(savedCategoryData)
          : null;

        if (JSON.stringify(parsedCategoryData) !== JSON.stringify(categoryResponse.data)) {
          setCData(categoryResponse.data);
          localStorage.setItem("/catogery", JSON.stringify(categoryResponse.data));
        } else {
          setCData(parsedCategoryData);
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
                {cData
                  ?.filter((item) => item?.Tittle__c === "Skincare")
                  .map((item) => (
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
                        <Link to={`/brands/${item?.Tittle__c}`}>
                          <div className="BrandProduct BR BB">
                            <div>
                              <img src={`${originAPi}${item?.Image_1__c}`} alt={item?.Tittle__c} />
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
