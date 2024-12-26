import React , {useState , useEffect} from "react";
import NavbarHeader from "./Navbar";
import FooterBfsg from "./FooterBfsg";
import { termPage } from "../lib/store";
const TermsService = () => {


   const [data, setData] = useState(() => {
        // Load data from localStorage if it exists
        const savedData = localStorage.getItem("/termpage");
        return savedData ? JSON.parse(savedData) : null;
      });
       const [loading, setLoading] = useState(!(data)); 
       const getData = async () => {
        try {
          const user = await termPage();
          if (user?.data) {
            console.log({ user });
            const savedData = localStorage.getItem("/termpage");
            const parsedSavedData = savedData ? JSON.parse(savedData) : null;
    
            // Compare new data with saved data
            if (JSON.stringify(parsedSavedData) !== JSON.stringify(user.data)) {
              setData(user.data); // Update state
              localStorage.setItem("termpage", JSON.stringify(user.data)); // Save updated data to localStorage
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
      <section className="TermsService">
        <NavbarHeader />
        {data?.map((item)=>(
        <div className="container">
        
            <>
             <h2>
             {item?.Tittle__c}
          </h2>
            <p className="mb-1">
             {item?.Sub_tittle__c}
            </p>
            <p className="mb-1">
            {item?.Description__c}
            </p>
            <p className="mb-1">
             {item?.Extra_Description__c}
            </p>
            </>
         
         
          

          
        
          <hr></hr>
        </div>
         ))}
        <FooterBfsg />
      </section>
    </div>
  );
};

export default TermsService;
