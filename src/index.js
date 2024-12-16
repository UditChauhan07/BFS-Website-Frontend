import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarHeader from './pages/Navbar'
import TopBannerSection from './pages/TopBannerSection'
import BrandsOfB2b from './pages/BrandsOfB2b'
import BeautyBrandsList from './pages/BeautyBrandsList'
import Arriavals from './pages/Arriavals'
import OurRetailers from "./pages/OurRetailers"
import FooterBfsg from "./pages/FooterBfsg"
import Sliderr from "./pages/sliderr"
import NavScrollExample from "./pages/navvv"
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
