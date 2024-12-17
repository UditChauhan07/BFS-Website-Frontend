import React, { useEffect, useState } from "react";
import NavbarHeader from "../pages/Navbar";
import { Link } from "react-router-dom";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { getManufactuersDetails } from "../lib/store";
import { originAPi } from "../lib/store";
import LoadingSpinner from "../Components/Loader/Loader";

function BrandsAll() {
  const [data, setData] = useState(() => {
    // Load data from localStorage initially
    const savedData = localStorage.getItem("/brandData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const [loading, setLoading] = useState(true); // Show loading spinner until API call is complete

  const fetchAndUpdateData = async () => {
    try {
      const response = await getManufactuersDetails();
      if (response?.data) {
        const savedData = localStorage.getItem("/brandData");
        const parsedSavedData = savedData ? JSON.parse(savedData) : null;

        // Compare fetched data with the data in localStorage
        if (JSON.stringify(parsedSavedData) !== JSON.stringify(response.data)) {
          localStorage.setItem("/brandData", JSON.stringify(response.data)); // Update localStorage
          setData(response.data); // Update state with new data
        }
      }
    } catch (error) {
      console.error("Error fetching brand data:", error);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  useEffect(() => {
    
    fetchAndUpdateData();
  }, []); 

  useEffect(() => {
    document.title = "Brands | Beauty Fashion Sales Group ";
  }, []);

  return (
    <div>
      <NavbarHeader />
      {loading && !data ? (
        // Show spinner if data is loading and there's no cached data
        <LoadingSpinner />
      ) : (
        // Show content
        <section className="B3bPageTop">
          <div className="container">
            <div>
              <div className="row">
                {data?.map((item) => (
                  <div
                    className="col-lg-3 col-md-3 col-sm-6 p-0"
                    key={item.Tittle__c}
                  >
                    <Link to={`/brands/${item.Tittle__c}`}>
                      <div className="BrandProduct BB BR">
                        <div>
                          <img
                            src={`${originAPi}${item?.Image_1__c}`}
                            alt="img"
                          />
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
      )}
      <FooterBfsg />
    </div>
  );
}

export default BrandsAll;
