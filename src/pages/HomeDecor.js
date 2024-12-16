import React from 'react'
import NavbarHeader from "../pages/Navbar"
import FooterBfsg from "../pages/FooterBfsg"
import 'bootstrap/dist/css/bootstrap.min.css';

import SkinCare1 from  '../Image/HomeDecor/DIPTYQUE.png'

import HeroBannerDecor from '../Image/HomeDecor/HomeDecorBanner.png'

function HomeDecor() {
  return (

    <div>
 <NavbarHeader/>

 <section className='B3bPageTop HomeDecor'>
              <div className='container'>

<div className='HeroBanner'>

  <img src={HeroBannerDecor} alt=""/>
  <h3>Home Decor</h3>

</div>

                <div>
      <div className='row g-0'>
        <div className='col-lg-3 col-md-3 col-sm-6 '>
          <a href='#'>
          <div className='BrandProduct BR  '>
            <div>
              <img src={SkinCare1} alt=''/>
            </div>

            <h2>Diptyque</h2>


          </div>
          </a>
           </div> 
         
         
        
         
        

        


      </div>



                </div>

              </div>
            </section>


        <FooterBfsg/>
    </div>
  )
}

export default HomeDecor