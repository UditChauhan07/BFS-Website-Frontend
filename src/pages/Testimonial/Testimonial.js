import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Testimonial() {
  const options = {
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="13" viewBox="0 0 42 13" fill="none">' +
        '<path d="M0.357289 6.71437L9.62174 12.273C10.155 12.593 10.8333 12.2089 10.8333 11.587L10.8333 1.41296C10.8333 0.79112 10.155 0.407029 9.62174 0.72696L0.357289 6.28563C0.195455 6.38273 0.195455 6.61727 0.357289 6.71437Z" fill="#7F7F7F"/>' +
        '<path d="M10.8333 6.5L41.1667 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
      '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="13" viewBox="0 0 43 13" fill="none">' +
        '<path d="M41.8093 6.28563L32.5449 0.726957C32.0117 0.407025 31.3333 0.791116 31.3333 1.41295L31.3333 11.587C31.3333 12.2089 32.0117 12.593 32.5449 12.273L41.8093 6.71437C41.9712 6.61727 41.9712 6.38273 41.8093 6.28563Z" fill="#7F7F7F"/>' +
        '<path d="M31.3333 6.5L0.999975 6.5" stroke="#7F7F7F" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="OurRetailer ">
      <Container>
        <h3 className="mb-3">See What They're Saying</h3>
        {/* <p className="text-center">See What They're Saying</p> */}

        <OwlCarousel className="owl-theme" {...options}>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  Our experience with Beauty Fashion Sales has been phenomenal -
                  they are truly the best in the industry. Their unwavering
                  commitment to providing top-tier support, comprehensive
                  training, and timely assistance has set them apart.
                </p>
                <h5>Tani Kampakum</h5>
                <p>Co-Owner, ZGO Perfumery </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  We carry dozens of amazing brands. What sets some of them
                  apart from others are the people representing the brand and
                  communicating their values to our staff. That personal
                  relationship often supersedes the value of the actual
                  attributes of the products. The team at Beauty Fashion Sales
                  has solidified that relationship with our staff, which in turn
                  improves our relationship with our customers.Furthermore, our
                  operation is relatively small compared to the size of our
                  vendors. However, we are very influential. Without the team at
                  Beauty Fashion Sales advocating for us, it would be very
                  difficult to communicate our importance to the larger,
                  international brands.
                </p>
                <h5>Aram Kaloustian</h5>
                <p>Owner, Naimies </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  We have carried extremely, successfully Diptyque for more
                  years than I can count and have a very loyal customer base who
                  shops our store in some cases just for Diptyque. I believe
                  that success is built on relationships not only with our
                  customers but with our brand reps and Jennifer Pieracci is
                  stellar, she is always there when I need her, she is awesome
                  when it comes to introducing new product and reaches out so
                  not to miss any opportunities. Her knowledge and passion about
                  Diptyque is unsurpassed and her follow up not only with new
                  orders but existing orders is exceptional. I'm hugely grateful
                  to not only have Diptyque in our store and love our success
                  story, past, present and to be carried on for many, many more
                  years but to have Jen continue to be our inspiration and
                  partner.
                </p>
                <h5>Susan Starr</h5>
                <p>Owner, American Rag/Maison Midi </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  We started working with Beauty Fashion Sales a few years ago
                  when they first took over a brand we had been carrying since
                  2017. They immediately asked what support we needed and
                  listened to everything we had to say. We hadn’t been getting
                  regular visual merchandising updates, information for new
                  products, or any additional communication beyond when placing
                  orders. Being an independent retailer we are often the last to
                  know any information about the brand we carry, but working
                  with BFSG we have felt in “the know” the entire time and have
                  been supported along the way. If you sell any products you
                  know how crucial it is to maintain a good relationship with
                  your brand rep/company and I would recommend any business
                  looking to bring in beauty products to use Beauty Fashion
                  Sales Group. They have amazing brands they are representing
                  with a variety for anyone’s ideal demographic
                </p>
                <h5>Grace Duduit</h5>
                <p>Manger and Buyer, Amelia Gray Skincare </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  The Beauty Fashion Sales team is one of the best in the
                  industry. They represent some of the most coveted brands and
                  are incredibly knowledgeable. Their customer service is
                  unmatched and we are beyond happy with our partnership with
                  Beauty Fashion Sales!
                </p>
                <h5>Nicole Theis         
                </h5>
                <p>General Manager, Woo Cosmetics, Atlanta, Georgia</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  We have been a client of BFS for over 10 years now and work
                  with 8 of their brands. They are an extremely professional
                  company, with excellent customer service! They have always
                  provided full brand training for my team on all the brands we
                  carry and understand how important the education is to our
                  business. BFS have helped me to grow my business to where it
                  is today and I am so thankful to them for all their support!
                </p>
                <h5>Sharron Eyers</h5>
                <p>Owner, Le Visage Cosmetics & Skincare </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div>
              <div className="RetailerContent Retailer text-center">
                <div className="IconStyle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                  >
                    <path
                      d="M12 12C12.5523 12 13 11.5523 13 11V8.55814C13 8.00586 12.5523 7.55814 12 7.55814H10.6124C10.6124 7.20672 10.6331 6.8553 10.6744 6.50388C10.7364 6.13178 10.8398 5.80103 10.9845 5.51163C11.1292 5.22222 11.3152 4.99483 11.5426 4.82946C11.77 4.64341 12.0594 4.55039 12.4109 4.55039V3C11.832 3 11.3256 3.12403 10.8915 3.37209C10.4574 3.62015 10.0956 3.9509 9.8062 4.36434C9.53747 4.77778 9.33075 5.26357 9.18605 5.82171C9.06202 6.35917 9 6.93799 9 7.55814V11C9 11.5523 9.44772 12 10 12H12Z"
                      fill="black"
                    />
                    <path
                      d="M6 12C6.55228 12 7 11.5523 7 11V8.55814C7 8.00586 6.55228 7.55814 6 7.55814H4.6124C4.6124 7.20672 4.63307 6.8553 4.67442 6.50388C4.73643 6.13178 4.83979 5.80103 4.9845 5.51163C5.1292 5.22222 5.31525 4.99483 5.54264 4.82946C5.77003 4.64341 6.05943 4.55039 6.41085 4.55039V3C5.83204 3 5.32558 3.12403 4.89147 3.37209C4.45736 3.62015 4.09561 3.9509 3.8062 4.36434C3.53747 4.77778 3.33075 5.26357 3.18605 5.82171C3.06202 6.35917 3 6.93799 3 7.55814V11C3 11.5523 3.44772 12 4 12H6Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>
                  Being in the beauty industry can be tough, and hard to
                  navigate. Allison and beauty Fashion Sales has made our buying
                  experiences the best they could possibly be. BFS goes above
                  and beyond and is the true epitome of excellent customer
                  service
                </p>
                <h5>Beckah Hunt</h5>
                <p>Owner, Betty Faye Beauty Bar </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </Container>
    </div>
  );
}

export default Testimonial;
