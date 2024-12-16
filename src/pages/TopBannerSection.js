import React from 'react'
import "../Styles/Home.css"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerImg from '../Image/BannerTopImg.png'

function TopBannerSection() {
  return (
    <div>


        <Container >
<section className='TopBanner'>
  <div className='BannerImg'>

  <img  src={BannerImg} />
  </div>
    <div className='BannerInnnerContent'>
    <h1 className="text-center">Estee<br/> Laude</h1>
    <h6>Winter 2024</h6>
    <p><a href='#'>Shop the Collection</a></p>
    </div>
</section>
</Container>


    </div>
  )
}

export default TopBannerSection