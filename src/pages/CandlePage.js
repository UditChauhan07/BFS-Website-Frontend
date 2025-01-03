import React ,{useEffect , useState}from "react";
import NavbarHeader from "../pages/Navbar";
import FooterBfsg from "../pages/FooterBfsg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import dummy from '../Image/dummy.png'
import HeroBannerCandle from "../Image/HomeDecor/HomeDecorBanner.png";
import { decorDetails , originAPi   , catogeryDetails} from "../lib/store";
import LoadingSpinner from "../Components/Loader/Loader";
function Candle() {
  useEffect(() => {
    document.title = 'Home Decor by Byredo, Diptyque, Maison Margiela | Beauty Fashion Sales Group ';
  }, []); 
  const [data, setData] = useState(() => {
      // Load data from localStorage if it exists
      const savedData = localStorage.getItem("/decor");
      return savedData ? JSON.parse(savedData) : null;
    });
    const [cData, setCData] = useState(() => {
      // Load data from localStorage if it exists
      const savedData = localStorage.getItem("/candelBanner");
      return savedData ? JSON.parse(savedData) : null;
    });
    const [loading, setLoading] = useState(!(data && cData)); 
  
    const getData = async () => {
      try {
        const user = await decorDetails();
        if (user?.data?.brands) {
          console.log({ user });
          const savedData = localStorage.getItem("/decor");
          const parsedSavedData = savedData ? JSON.parse(savedData) : null;
  
          // Compare new data with saved data
          if (JSON.stringify(parsedSavedData) !== JSON.stringify(user?.data?.brands)) {
            setData(user?.data?.brands); // Update state
            localStorage.setItem("/decor", JSON.stringify(user?.data?.brands)); // Save updated data to localStorage
          }
        }

  if (user?.data?.banners) {
       
        const savedData1 = localStorage.getItem("/candelBanner");
        const parsedSavedData1 = savedData1 ? JSON.parse(savedData1) : null;

        // Compare new data with saved data
        if (JSON.stringify(parsedSavedData1) !== JSON.stringify(user?.data?.banners)) {
          setCData(user?.data?.banners); // Update state
          localStorage.setItem("/candelBanner", JSON.stringify(user?.data?.banners)); // Save updated data to localStorage
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
      getData(); // Fetch data on component mount
    }, []);
  
  return (
    <div>
      <NavbarHeader />

      <section className="B3bPageTop Candle">
        <div className="container">
          {loading ? (<LoadingSpinner/>) : (<>
          
            {cData.map((item) => (
    <div className="HeroBanner" key={item?.Id}> {/* Ensure unique key */}
      <img src={`${originAPi}${item?.Image_1__c}`} alt="" />
      <h3>{item?.Tittle__c}</h3>
    </div>
  ))} 

          <div>
          <div className="row g-0">
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
          </div></>) }
     
        </div>
      </section>

      <FooterBfsg />
    </div>
  );
}

export default Candle;
