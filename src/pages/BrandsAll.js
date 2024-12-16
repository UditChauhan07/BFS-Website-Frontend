import React, { useEffect, useState } from "react";
import NavbarHeader from "../pages/Navbar";
import { Link } from "react-router-dom";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { getManufactuersDetails } from "../lib/store";
import { originAPi } from "../lib/store";

function BrandsAll() {
  const [data, setData] = useState(() => {
    // Load data from localStorage if it exists
    const savedData = localStorage.getItem("/brandData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const getData = async () => {
    try {
      const user = await getManufactuersDetails();
      if (user?.data) {
        console.log({ user });
        setData(user.data); // Update state
        localStorage.setItem("/brandData", JSON.stringify(user.data)); // Save to localStorage
      }
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };

  useEffect(() => {
    if (!data) {
      getData(); // Fetch only if data isn't in local storage
    }
  }, [data]);

  useEffect(() => {
    document.title = "Brands | Beauty Fashion Sales Group ";
  }, []);

  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop">
        <div className="container">
          <div>
            <div className="row">
              {data?.map((item) => (
                <div className="col-lg-3 col-md-3 col-sm-6 p-0" key={item.Tittle__c}>
                  <Link to={`/brands/${item.Tittle__c}`}>
                    <div className="BrandProduct BB BR">
                      <div>
                        <img src={`${originAPi}${item?.Image_1__c}`} alt="img" />
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

export default BrandsAll;
