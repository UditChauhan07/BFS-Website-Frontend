import React ,{useEffect , useState}from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import SkinCare1 from "../Image/HairCare/BumbleB.png";
import HeroBannerHair from "../Image/HairCare/HairCareBanner.png";
import { Link } from "react-router-dom";
import { hairCareDetails , catogeryDetails ,  originAPi } from "../lib/store";
function Haircare() {
  useEffect(() => {
    document.title = 'Haircare by Bumble and Bumble | Beauty Fashion Sales Group ';
  }, []); 
  const [data, setData] = useState(() => {
    // Load data from localStorage if it exists
    const savedData = localStorage.getItem("/haircare");
    return savedData ? JSON.parse(savedData) : null;
  });
    const [cData, setCData] = useState(() => {
      // Load data from localStorage if it exists
      const savedData = localStorage.getItem("/catogery");
      return savedData ? JSON.parse(savedData) : null;
    });

  const getData = async () => {
    try {
      const user = await hairCareDetails();
      if (user?.data) {
        console.log({ user });
        const savedData = localStorage.getItem("/haircare");
        const parsedSavedData = savedData ? JSON.parse(savedData) : null;

        // Compare new data with saved data
        if (JSON.stringify(parsedSavedData) !== JSON.stringify(user.data)) {
          setData(user.data); // Update state
          localStorage.setItem("/haircare", JSON.stringify(user.data)); // Save updated data to localStorage
        }
      }
       const user1 = await catogeryDetails();
            if (user1?.data) {
              console.log({ user1 });
              const savedData1 = localStorage.getItem("/catogery");
              const parsedSavedData1 = savedData1 ? JSON.parse(savedData1) : null;
      
              // Compare new data with saved data
              if (JSON.stringify(parsedSavedData1) !== JSON.stringify(user1.data)) {
                setCData(user1.data); // Update state
                localStorage.setItem("/catogery", JSON.stringify(user1.data)); // Save updated data to localStorage
              }
            }
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []);

  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop HairCare">
        <div className="container">
          {cData
            ?.filter((item) => item?.Tittle__c === "Haircare") // Filter items with title 'Skincare'
            .map((item) => (
              <div className="HeroBanner" key={item?.Id}> {/* Ensure unique key */}
                <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
                <h3>{item?.Tittle__c}</h3>
              </div>
            ))} 

          <div>
          <div className="row g-0">
                {data?.map((item) => (
                  <div className="col-lg-3 col-md-3 col-sm-6" key={item?.Id}>
                    <Link to={`/brands/${item?.Tittle__c}`}>
                      <div className="BrandProduct BR BB">
                        <div>
                          <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
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

export default Haircare;
