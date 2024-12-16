import React, { useState } from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function LaunchCalendar() {
  const [products, setProducts] = useState([
    {
      month: "Jan",
      content: [
        {
          date: "15/JAN/2024",
          OCDDate: "01/MAR/2024",
          image: "/assets/images/25.png",
          name: "Mediterranean Honeysuckle Essentials ",
          size: "30 ml",
          description:
            "This travel-friendly set features AERIN's bestselling Mediterranean Honeysuckle scent,",
          brandLogo: "/assets/images/Aren-logo.png",
        },
        {
          date: "15/JAN/2024",
          OCDDate: "26/FEB/2024",
          image: "/assets/images/27.png",
          name: "Re Nutriv Ultimate Diamond Brilliance Crème REFILL ",
          size: "50 ml",
          description:
            "The transcendently weightless, delightfully indulgent fluid absorbs quickly to refresh skin and help restore a plumper, smoother feel.",
          brandLogo: "/assets/images/renutrive-logo.png",
        },
        {
          date: "29/JAN/2024",
          OCDDate: "ASAP",
          image: "/assets/images/02.png",
          name: "LipNight",
          size: "09 g",
          description:
            "Naturally fragranced and flavored with Vanilla and soothing Chamomile Oil, this overnight treatment sweetly blankets and soothes lips while you slumber.",
          brandLogo: "/assets/images/rms-beauty.png",
        },
        {
          date: "29/JAN/2024",
          OCDDate: "ASAP",
          image: "/assets/images/03.png",
          name: "Skin2Skin Everything Brush",
          size: "N/A",
          description:
            "xpertly designed using luxuriously soft imitation goat hair, our Skin2SKin Everything Brush helps to deposit just the right amount of product to the face, while its flexible bristles make it easy to control and blend for a natural look.",
          brandLogo: "/assets/images/rms-beauty.png",
        },
        {
          date: "29/JAN/2024",
          OCDDate: "28/FEB/2024",
          image: "/assets/images/04.png",
          name: "Kakadu Luxe Cream",
          size: "50 ML",
          description:
            "A luscious creamy mousse enriched with a high concentration of antioxidants and Vitamin A, C & E to help nourish and revitalise your skin.",
          brandLogo: "/assets/images/rms-beauty.png",
        },

        {
          date: "01/Dec/2023",
          OCDDate: "01/JAN/2024",
          image: "/assets/images/Smoothing1.png",
          name: "Vitamin Enriched Smoothing Serum",
          size: "N/A",
          description:
            "When used with Vitamin Enriched Face Base, it helps plump skin and smooth makeup application.",

          brandLogo: "/assets/images/BobbyBrown.png",
        },
        {
          date: "01/Dec/2023",
          OCDDate: "01/JAN/2024",
          image: "/assets/images/Smoothing2.png",
          name: "Soothing Cleansing Oil Relaunch ",
          size: "200 ml",
          description:
            "Soothing Cleansing Oil makeup remover removes makeup, dirt and all impurities from your face perfectly and leaves the skin soft and clean.",
          brandLogo: "/assets/images/BobbyBrown.png",
        },
        {
          date: "TBD/Dec/2023",
          OCDDate: "25/JAN/2024",
          image: "/assets/images/Smoothing16.png",
          name: "Liquid Lipstick Matte",
          size: "N/A",
          description:
            "The Entire Grooming Range - Beard, Hair, Skin, Fragrances & Accessories. Shop Now! Unleash your Hairy Masculinity with Beardo.",

          brandLogo: "/assets/images/Byredo.png",
        },

        {
          date: "TBD",
          OCDDate: "02/JAN/2024",
          image: "/assets/images/Smoothing21.png",
          name: "Fleur de Peau Hair ",
          size: "30 ml",
          description:
            "An intensely perfumed veil, distilling all the carnal sweetness of the musk in Fleur de Peau into an ode to the legendary love of Eros and Psyche. ",
          brandLogo: "/assets/images/Diptuque.png",
        },
        // Add more products for January
      ],
    },
    {
      month: "Feb",
      content: [
        {
          date: "TBD",
          OCDDate: "01/FEB/2024",          
          image: "/assets/images/11.png",
          name: "INTERNATIONAL formula",
          size: "30 ml",
          description:
            "A tinted skin nourishing, mineral-based daily sunscreen serum and soft focus complexion corrector with natural-looking illumination and SPF 30 broad spectrum protection.",
          brandLogo: "/assets/images/rms-beauty.png",
          
        },
        {
          date: "26/FEB/2024",
          OCDDate: "26/MAR/2024",          
          image: "/assets/images/05.png",
          name: "Re Dimension Hydra",
          size: "30 ml",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          brandLogo: "/assets/images/rms-beauty.png",
        },

        {
          date: "15/Jan/2023",
          OCDDate: "01/JAN/2024",         
          image: "/assets/images/Smoothing6.png",
          name: "DrySpun LIGHT",
          size: "9.35 oz",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          
          brandLogo: "/assets/images/bumbleAndBumble.png",
        },

        {
          date: "01/Jan/2023",
          OCDDate: "15/Feb/2024",
          image: "/assets/images/Smoothing22.png",
          name: "Tuberose",
          size: "190g",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
         
          brandLogo: "/assets/images/Diptuque.png",
        },
        // Add more products for February
      ],
    },

    {
      month: "Mar",
      content: [
        {
          date: "01/MAR/2024",
          OCDDate: "04/APR/2024",
          image: "/assets/images/07.png",          
          name: "Sculpt & Glow Face Palette",
          size: "N/A",
          description:
            "Our versatile powders can be used to shape, highlight, and add a flush of color in a variety of ways.",          
          brandLogo: "/assets/images/smashbox_logo.png",
        },
        {
          date: "01/MAR/2024",
          OCDDate: "04/APR/2024",         
          image: "/assets/images/10.png",  
          name: "Face Forward Color Correcting Wheel",
          size: "N/A",
          description:
            "Color correcting is a concealer technique that professional makeup artists have used for years and that went mainstream after social media got wind of the trend.",
          
          brandLogo: "/assets/images/kevy_logo.png",
         
        },
        {
          date: "04/MAR/2024",
          OCDDate: "15/APR/2024",
          image: "/assets/images/28.png",
          name: "Re Nutriv Rich Foam Cleanser ",
          size: "50 ml",
          description:
            "The exceptionally rich formula of the Re-Nutriv Intensive Hydrating Foam Cleanser thoroughly but gently removes impurities and makeup.",
          brandLogo: "/assets/images/renutrive-logo.png",
        },

        {
          date: "15/Feb/2024",
          OCDDate: "01/Mar/2024",        
          image: "/assets/images/Smoothing10.png",
          name: "HIO Trial Kit",
          size: "N/A",
          description:
            "A mini set with travel size bottles of Hairdresser’s Invisible Oil Shampoo, Hairdresser’s Invisible Oil Conditioner, and Hairdresser’s Invisible Oil Protective Primer to transform dry, coarse or brittle hair – leaving it soft, silky, and smooth.",
         
          brandLogo: "/assets/images/bumbleAndBumble.png",
        },

        {
          date: "15/Feb/2024",
          OCDDate: "01/Mar/2024",          
          image: "/assets/images/Smoothing8.png",
          name: "Bond Trial Kit",
          size: "N/A",
          description:
            "Bond Treatment Trial Kit is a four-part system of professional and high quality products created to protect hair from damage and the perfect.",
         brandLogo: "/assets/images/bumbleAndBumble.png",
        },

        {
          date: "15/Feb/2024",
          OCDDate: "01/Mar/2024",          
          image: "/assets/images/Smoothing9.png",
          name: "Bb. Curl Trial Kit ",
          size: "N/A",
          description:
            "This moisturizing, curl-loving gentle cleanser is now enhanced with a rich blend of oils (Avocado, Coconut, Jojoba) and butters (Shea, Cocoa) – to leave hair shiny, deeply hydrate, and reduce frizz.",
         brandLogo: "/assets/images/bumbleAndBumble.png",
        },

        {
          date: "15/Feb/2024",
          OCDDate: "01/Mar/2024",          
          image: "/assets/images/Smoothing7.png",
          name: "Thickening Trial Kit",
          size: "N/A",
          description:
            "This lightweight in-shower treatment, powered by Emblica Technology, plumps strands from roots to ends for a thicker, fuller, volumized look.",
         brandLogo: "/assets/images/bumbleAndBumble.png",
        },

        {
          date: "20/Mar/2024",
          OCDDate: "ASAP",          
          image: "/assets/images/Smoothing25.png",
          name: "Brightening Serum ",
          size: "30 ml",
          description:
            "owered by a potent combination of pure Vitamin C and moisture-rich serum, this daily treatment leaves skin radiant, while helping to reduce discoloration, fine lines and wrinkles.",          
          brandLogo: "/assets/images/Revive.png",
        },
      ],
    },

    {
      month: "APR",
      content: [
        {
          date: "01/APR/2024",
          OCDDate: "30/MAY/2024",         
          image: "/assets/images/12.png",
          name: "Single-Ended Brushes",
          size: "N/A",
          description:
            "The secret to beautiful, natural-looking makeup is the right tools, including these makeup brushes from Kevyn Aucoin Beauty.",
         
          brandLogo: "/assets/images/kevy_logo.png",
        },
        {
          date: "01/APR/2024",
          OCDDate: "30/MAY/2024",         
          image: "/assets/images/11.png",
          name: "Micro Sculpting Brow",
          size: "N/A",
          description:
            "The Color Stick is a pigment-rich, ultra-creamy, & lightweight blush that offers buildable color, a skin-softening finish, and long-lasting wear.",
          brandLogo: "/assets/images/kevy_logo.png",
        },
        {
          date: "01/APR/2024",
          OCDDate: "30/MAY/2024",          
          image: "/assets/images/08.png",
          name: "Crayon Blackstar Shade Extension",
          size: "N/A",
          description:
            "Waterproof and longlasting eye pencil enriched with youth ingredients. Highly pigmented color. No transfer, no smudging.",
          brandLogo: "/assets/images/Byterry_logo.png",
         
        },

        {
          date: "01/APR/2024",
          OCDDate: "01/MAY/2024",          
          image: "/assets/images/18.png",
          name: "From the Garden EDT",
          size: "30 ml",
          description:
            "A citrusy and earthy perfume that transports you to the joyful memory of a sunny afternoon spent in the garden.",
         brandLogo: "/assets/images/maisonMargilia_logo.png",
          
        },
        {
          date: "01/APR/2024",
          OCDDate: "01/MAY/2024",
          
          image: "/assets/images/19.png",
          name: "From the Garden Candle",
          size: "165 g",
          description:
            "A collection of high-end scented candles from Maison Margiela, inviting you to relive forgotten memories and emotions at home.",
         brandLogo: "/assets/images/maisonMargilia_logo.png",
        },

        {
          date: "01/Mar/2024",
          OCDDate: "01/Apr/2024",
          
          image: "/assets/images/Smoothing3.png",
          name: "Long Wear Cream",
          size: "N/A",
          description:
            "Long-Wear Cream Shadow Stick glides on lids and stays color true for endless eye looks.",
          brandLogo: "/assets/images/BobbyBrown.png",
          
        },
        {
          date: "01/Mar/2024",
          OCDDate: "01/Apr/2024",          
          image: "/assets/images/Smoothing4.png",
          name: "Re Dimension Hydra",
          size: "30 ml",
          description:
            "It glides on effortlessly, infusing skin with multi-dimensional life as the bouncy, light-as-air gel blends and builds color.",
          brandLogo: "/assets/images/BobbyBrown.png",
        },

        {
          date: "TBD/Mar/2024",
          OCDDate: "04/Apr/2024",
          image: "/assets/images/Smoothing17.png",
          name: "Mineralescape Eyeshadow",
          size: "N/A",
          description:
            "eyeshadows include highly buildable shades providing everything from neutral, natural-looking washes of colour to vividly pigmented eye looks.",
          brandLogo: "/assets/images/Byredo.png",
          
        },

        {
          date: "TBD/Mar/2024",
          OCDDate: "TBD/Apr/2024",
          image: "/assets/images/Smoothing23.png",
          name: "Coffee",
          size: "190g",
          description:
            "A cup realised and assembled manually by ceramicist Toma Blok in his workshop in the Paris region, and available in a strictly limited edition.",
          brandLogo: "/assets/images/Diptuque.png",
          
        },
        // Add more products for February
      ],
    },

    {
      month: "MAY",
      content: [
        {
          date: "01/MAY/2024",
          OCDDate: "30/JUN/2024",          
          image: "/assets/images/09.png",
          name: "Brightening CC Foundation",
          size: "N/A",
          description:
            "New radiant foundation- supercharged as a serum, lightweight as a skin tint, and glowy as youthful skin.",
          brandLogo: "/assets/images/Byterry_logo.png",
        },

        {
          date: "09/MAY/2024",
          OCDDate: "06/JUN/2024",
          image: "/assets/images/06.png",
          name: "Re Dimension Hydra",
          size: "30 ml",
          description:
            "It glides on effortlessly, infusing skin with multi-dimensional life as the bouncy, light-as-air gel blends and builds color.",
          brandLogo: "/assets/images/rms-beauty.png",
        },

        {
          date: "01/Apr/2024",
          OCDDate: "05/May/2024",          
          image: "/assets/images/Smoothing5.png",
          name: "Extra Lip Serum",
          size: "N/A",
          description:
            " This plump lip serum is very comfortable. No stinging , burning or cooling. My lips feel moisturized and look more plump due to the high shine",
          brandLogo: "/assets/images/BobbyBrown.png",
        },

        {
          date: "01/Apr/2024",
          OCDDate: "05/May/2024",
          
          image: "/assets/images/Smoothing11.png",
          name: "Mojave Ghost Solid",
          size: "3g",
          description:
            "Mojave Ghost is a captivating and woody fragrance that draws inspiration from the soulful beauty of the Mojave Desert.",
          brandLogo: "/assets/images/Byredo.png",
        },

        {
          date: "TBD/Apr/2024",
          OCDDate: "02/May/2024",          
          image: "/assets/images/Smoothing18.png",
          name: "The Lipstick – Satin",
          size: "N/A",
          description:
            "A satin finish to reflect light and expand the colour. Vegan formula. Colour rich with an exceptional formulation that is both comfortable.",
          brandLogo: "/assets/images/Byredo.png",
        },
        // Add more products for February
      ],
    },
    {
      month: "JUN",
      content: [
        {
          date: "01/JUN/2024",
          OCDDate: "10/JUL/2024",          
          image: "/assets/images/13.png",
          name: "Contour Book The Art of Sculpting",
          size: "N/A",
          description:
            "New radiant foundation- supercharged as a serum, lightweight as a skin tint, and glowy as youthful skin.",
          brandLogo: "/assets/images/kevy_logo.png",
        },
        {
          date: "01/May/2024",
          OCDDate: "01/Jun/2024",
          
          image: "/assets/images/Smoothing12.png",
          name: "Mojave Ghost Alcohol",
          size: "100 ml",
          description:
            "Roll-on Perfumed Oil delivers an intense hit of fragrance with a long-lasting effect, in an alcohol-free formulation.",
          brandLogo: "/assets/images/Byredo.png",
        },

        {
          date: "TBD/May/2024",
          OCDDate: "06/Jun/2024",          
          image: "/assets/images/Smoothing19.png",
          name: "Mojave Ghost Eyeshadow",
          size: "N/A",
          description:
            "Mojave Ghost is a woody composition inspired by the soulful beauty of the Mojave Desert.",
          brandLogo: "/assets/images/Byredo.png",
        },

        {
          date: "TBD/2024",
          OCDDate: "04/Jun/2024",
          image: "/assets/images/Smoothing24.png",
          name: "Citronnelle ",
          size: "109g",
          description:
            "The Diptyque Body Spray Citronnelle & Geranium is an aromatic, floral fragrance with essential oils that also works as a mosquito repellent.",
          brandLogo: "/assets/images/Diptuque.png",
        },

        {
          date: "01/Jun/2024",
          OCDDate: "ASAP",
          image: "/assets/images/Smoothing26.png",
          name: "Advanced Lip ",
          size: "15g",
          description:
            "Lip & Perioral Renewal Serum is a targeted treatment for the lip area, specifically designed to fight against the appearance of vertical lines.",
            brandLogo: "/assets/images/Revive.png",
        },
        {
          date: "03/Jun/2024",
          OCDDate: "15/JUL/2024",
          image: "/assets/images/23.png",
          name: "Revitalizing Supreme+ Youth Power Crème ",
          size: "15g",
          description:
            "An infusion of Cactus Stem Cell Extract and Hyaluronic Acid helps reveal stronger, nourished skin, saturated",
          brandLogo: "/assets/images/estee-Logo.png",
        },

        // Add more products for February
      ],
    },
    {
      month: "AUG",
      content: [
        {
          date: "TBD/AUG/2024",
          OCDDate: "TBD/SEP/2024",          
          image: "/assets/images/14.png",
          name: "New Naked Skin Tint ",
          size: "N/A",
          description:
            "Get tinted sheer to light coverage for a natural finish that feels like you're wearing next to nothing when you use Stripped Nude Skin Tint by Kevyn Aucoin.",
          brandLogo: "/assets/images/kevy_logo.png",
        },

        {
          date: "TBD/Jul/2024",
          OCDDate: "29/Aug/2024",          
          image: "/assets/images/Smoothing13.png",
          name: "TBD Candle",
          size: "240 g",
          description:
            "Our best-selling candles are crafted in elegant smoked black glass, featuring black wax and wicks.",
          brandLogo: "/assets/images/Byredo.png",
        },

        {
          date: "TBD/Jul/2024",
          OCDDate: "22/Aug/2024",          
          image: "/assets/images/Smoothing20.png",
          name: "The Lipstick – Satin ",
          size: "N/A",
          description:
            "A satin finish to reflect light and expand the colour. Vegan formula. Colour rich with an exceptional formulation that is both comfortable.",
          brandLogo: "/assets/images/Byredo.png",
        },

        // Add more products for February
      ],
    },
    {
      month: "SEP",
      content: [
        {
          date: "TBD/SEP/2024",
          OCDDate: "TBD/OCT/2024",          
          image: "/assets/images/15.png",
          name: "Celestial Lipgloss ",
          size: "N/A",
          description:
            "Our Celestial lip gloss is a plumbing lip gloss that is clear but has an iridescent pigment to it.",
          brandLogo: "/assets/images/kevy_logo.png",
        },

        {
          date: "TBD/Aug/2024",
          OCDDate: "TBD/Sep/2024",          
          image: "/assets/images/Smoothing15.png",
          name: "Mojave Ghost Absolu",
          size: "50 ml",
          description:
            "Mojave Ghost is a woody composition inspired by the soulful beauty of the Mojave Desert. In this xeric wilderness, rare are the plants that dare to blossom.",
          brandLogo: "/assets/images/Byredo.png",
        },

        // Add more products for February
      ],
    },

    {
      month: "OCT",
      content: [
        {
          date: "TBD/Sep/2024",
          OCDDate: "03/Oct/2024",          
          image: "/assets/images/Smoothing14.png",
          name: "Fall EDP",
          size: "50 ml",
          description:
            "Fall for the transition. The cocooning and compelling Eyes Closed, our new Eau de Parfum.",
          brandLogo: "/assets/images/Byredo.png",
        },
      ],
    },
    {
      month: "NOV",
      content: [
        {
          date: "28/NOV/2024",
          OCDDate: "02/JAN/2025",          
          image: "/assets/images/20.png",
          name: "Beautiful Magnolia Travel Spray",
          size: "10 ml",
          description:
            "A hypnotic blend with signature notes of lush Magnolia, solar Gardenia, warm Woods and luminous Musk. Romantic, feminine and radiant",
          brandLogo: "/assets/images/estee-Logo.png",
        },

        // Add more products for February
      ],
    },

    {
      month: "DEC",
      content: [
        {
          date: "01/DEC/2024",
          OCDDate: "01/JAN/2025",
          
          image: "/assets/images/17.png",
          name: "Under The Stars EDT ",
          size: "200 ml",
          description:
            "Under the Stars by Maison Martin Margiela is a Amber Woody fragrance for women and men.",
         brandLogo: "/assets/images/maisonMargilia_logo.png",
        },
        {
          date: "04/DEC/2024",
          OCDDate: "15/JAN/2025",
          image: "/assets/images/26.png",
          name: "Re Nutriv Ultimate Diamond Brilliance Crème ",
          size: "30 ml",
          description:
            "Ultimate Diamond Transformative Brilliance Serum · Re-Nutriv. Ultimate Diamond Transformative Energy Eye Creme · Re-Nutriv.",
          brandLogo: "/assets/images/renutrive-logo.png",
        },
        {
          date: "05/DEC/2024",
          OCDDate: "16/JAN/2025",
          image: "/assets/images/21.png",
          name: "Double Wear Smooth & Blur Primer ",
          size: "40 ml",
          description:
            "This body lotion is nourishing and moisturizing thanks to a complex of hydrating agents, shea butter, colza oil & vegetal glycerin.",
          brandLogo: "/assets/images/estee-Logo.png",
        },
        {
          date: "11/DEC/2024",
          OCDDate: "22/JAN/2025",
          image: "/assets/images/22.png",
          name: "Explicit Slick Shine Lipstick ",
          size: "N/A",
          description:
            "High-intensity shine lipstick. Explicit color in one swipe. 8-hour wear. All-day dare.",
          brandLogo: "/assets/images/estee-Logo.png",
        },
        {
          date: "11/DEC/2024",
          OCDDate: "01/FEB/2025",
          image: "/assets/images/24.png",
          name: "Mediterranean Honeysuckle Tiare ",
          size: "50 ml",
          description:
            "Mediterranean Honeysuckle limited editions have always been inspired by traveling to one of my favorite places in the world.",
          brandLogo: "/assets/images/Aren-logo.png",
        },
        {
          date: "15/DEC/2024",
          OCDDate: "01/JAN/2025",          
          image: "/assets/images/16.png",
          name: "Body Lotion, Shower Gel, Hand Cream ",
          size: "200 ml",
          description:
            "This body lotion is nourishing and moisturizing thanks to a complex of hydrating agents, shea butter, colza oil & vegetal glycerin.",
         brandLogo: "/assets/images/maisonMargilia_logo.png",
        },

        // Add more products for February
      ],
    },

    // Add more months as needed
  ]);

  return (
    <div id="Calendar">
      <div className="container">
        <h1 className="TopHeading">Marketing Calendar</h1>

        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 ">
            <ul className="timeline mt-4">
              {products.map((month, index) => (
                <li key={index}>
                  <span className={`timelineHolder0${(index % 3) + 1}`}>
                    {month.month}
                  </span>
                  {month.content.map((product, productIndex) => (
                    <div className="timeline-content" key={productIndex}>
                      <div className="ProductInfo">
                        <div className="BothDateTopFlex">
                          <div className="ShipDate">
                            <span>Ship Date</span>
                            <div className={`DateCurrent0${(index % 3) + 1}`}>
                              {product.date}
                            </div>
                          </div>
                          <div className="ShipDate EDate">
                            <span>OCD</span>
                            <div className="DateEod">{product.OCDDate}</div>
                          </div>
                        </div>
                        <div className="d-flex mt-2">
                          <div className="m-auto ProductImg">
                            <img src={product.image} alt={product.name} />
                          </div>
                          <div className="LaunchProductDetail">
                            <h3>{product.name}</h3>
                            <div className="size">
                              Size{" "}
                              <span className="ProductQty">{product.size}</span>
                            </div>
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="launchBrand">
                        <img
                          className="img-fluid"
                          src={product.brandLogo}
                          alt={`${product.name} logo`}
                        />
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
            <div className="GrayBg">
              <div className="PlusBtn">
                <div className="AddNewInner">
                  <button className="btn btn-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="86"
                      height="86"
                      viewBox="0 0 86 86"
                      fill="none"
                    >
                      <path
                        d="M43 21.5L43 64.5"
                        stroke="#D5D9D9"
                        strokeWidth="5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M64.5 43L21.5 43"
                        stroke="#D5D9D9"
                        strokeWidth="5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <p> Unleashed feature</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchCalendar;
