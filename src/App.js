// App.js
import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import AboutUs from './pages/LuxuryMeet/AboutUs';
import HomeNew from '../src/pages/Home/Home.js';
import Founder from '../src/pages/FounderEdit.js'
import Skincare from '../src/pages/SkinCarePage.js'
import Fragrance from '../src/pages/FragrancePage.js'
import HairCare from '../src/pages/HairCarePage.js'
import Makeup from '../src/pages/MakeupPage.js'
import Body from '../src/pages/BodyPage.js'
import Candle from '../src/pages/CandlePage.js'
import HomeDecor from '../src/pages/HomeDecor.js'
import Brands from '../src/pages/BrandsAll.js'
import Smashbox from './pages/Smashbox/Smashbox.js';
import RMSBeauty from './pages/RMSBeauty/RMSBeauty.js';
import ReVive from './pages/ReVive/ReVive.js';
import Diptyque from './pages/Diptyque/Diptyque.js';
import Byredo from './pages/Byredo/Byredo.js';
import ByTerry from './pages/BYTerry/ByTerry.js';
import KevynAucoin from './pages/KevynAucoin/KevynAucoin.js';
import EsteeLaunder from './pages/EsteeLaunder/EsteeLaunder.js';
import BobbiBrown from './pages/BobbiBrown/BobbiBrown.js';
import MaisonMargiela from './pages/MaisonMargiela/MaisonMargiela.js';
import Aerin from './pages/Aerin/Aerin.js';
import Aramis from './pages/Aramis/Aramis.js';
import ReNutrive from './pages/Re-Nutrive/Re-Nutrive.js';
import VictoriaBeckhamBeauty from './pages/VictoriaBeckhamBeauty/VictoriaBeckhamBeauty.js';
import SusanneKaufmann from './pages/SusanneKaufmann/SusanneKaufmann.js';
import BumbleAndBumble from './pages/BumbleAndBumble/BumbleAndBumble.js';
import Account from './pages/Account/CreateAccount.jsx'
import Occitane from './pages/Occitane/Occitane.js'
import TermsService from './pages/TermsService.js';
import Policy from './pages/Policy.js';
import Supergoop from './pages/Supergoop/Supergoop.js';
import Index from './Default/index.jsx'
import BrandPages from './Components/BrandsPages/BrandPages.jsx';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<HomeNew />} />
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/founder" element={<Founder />}/>
          <Route path="/skincare" element={<Skincare />}/>
          <Route path="/fragrance" element={<Fragrance />}/>
          <Route path="/makeup" element={<Makeup />}/>
          <Route path="/hairCare" element={<HairCare />}/>
          <Route path="/body" element={<Body />}/>
          <Route path="/home" element={<Candle />}/>
          <Route path="/home-decor" element={<HomeDecor />}/>
          <Route path="/brands" element={<Brands />}/>
          {/* <Route path="/brands/Smashbox" element={<Smashbox />}/> */}
          <Route path="/brands/:slug" element = {<BrandPages/>} />
          {/* <Route path="/brands/RMSBeauty" element={<RMSBeauty />}/> */}
          {/* <Route path="/brands/ReVive" element={< ReVive/>}/>
          <Route path="/brands/Diptyque" element={<Diptyque />}/>
          <Route path="/brands/Byredo" element={<Byredo />}/>
          <Route path="/brands/ByTerry" element={<ByTerry />}/>
          <Route path="/brands/KevynAucoin" element={<KevynAucoin />}/>
          <Route path="/brands/EsteeLaunder" element={<EsteeLaunder />}/>
          <Route path="/brands/BobbiBrown" element={<BobbiBrown />}/>
          <Route path="/brands/MaisonMargiela" element={<MaisonMargiela />}/>
          <Route path="/brands/Occitane" element={<Occitane />}/>
          <Route path="/brands/Aerin" element={<Aerin />}/>
          <Route path="/brands/Aramis" element={<Aramis />}/>
          <Route path="/brands/ReNutrive" element={<ReNutrive />}/>
          <Route path="/brands/VictoriaBeckhamBeauty" element={<VictoriaBeckhamBeauty />}/>
          <Route path="/brands/SusanneKaufmann" element={<SusanneKaufmann />}/>
          <Route path="/brands/BumbleAndBumble" element={<BumbleAndBumble />}/>
          <Route path="/brands/Supergoop" element={<Supergoop />}/> */}
          <Route path="/wholesale-Inquiries" element={<Account />}/>
          <Route path="/terms-and-services" element={<TermsService />}/>
          <Route path="/privacy-policy" element={<Policy />}/>  
          {/* <Route path = '/newarrivals' element = {<NewA} */}
          <Route path="*" element={<Index/>} /> 





          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
