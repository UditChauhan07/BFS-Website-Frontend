import React from 'react'
import NavbarHeader from "../Navbar";
import FooterBfsg from "../FooterBfsg";
import OwlCarousel from "react-owl-carousel";
import { useParams } from 'next/navigation';
function BrandSlug() {
    const params = useParams()
    const id = params.id
    console.log(id)
  return (
    <>
   <p>{id}</p>
    </>
  )
}

export default BrandSlug