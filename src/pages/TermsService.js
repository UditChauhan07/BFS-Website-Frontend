import React from "react";
import NavbarHeader from "./Navbar";
import FooterBfsg from "./FooterBfsg";
const TermsService = () => {
  return (
    <div>
      <section className="TermsService">
        <NavbarHeader />
        <div className="container">
          <h1 className="text-start">
            Terms & Services
            <hr></hr>
          </h1>
          <p>
            Welcome to Beauty Fashion Sales Group (BSFG)! These Terms and
            Conditions outline the rules and regulations for the use of our
            website.
          </p>
          <p>
            By accessing this website, we assume you accept these Terms and
            Conditions in full. Do not continue to use BSFG's website if you do
            not accept all of the Terms and Conditions stated on this page.
          </p>
          <h2>
            The following terminology applies to these Terms and Conditions:
          </h2>
          
            <p className="mb-1">
              "Client", "You" and "Your" refers to you, the person accessing
              this website and accepting the Company’s terms and conditions.
            </p>
            <p className="mb-1">
              "The Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company.
            </p>
            <p className="mb-1">
              "Party", "Parties", or "Us", refers to both the Client and
              ourselves, or either the Client or ourselves.
            </p>
          
          <h2>Use of Website</h2>
          <ul>
            <li>
              Access to certain areas of this website may be restricted. We
              reserve the right to restrict access to other areas of this
              website, or indeed this entire website, at our discretion.
            </li>
            <li>
              If you create an account on this website, you are responsible for
              maintaining the confidentiality of your account and password and
              for restricting access to your computer, and you agree to accept
              responsibility for all activities that occur under your account or
              password.
            </li>
            <li>
              Unless otherwise stated, BSFG and/or its licensors own the
              intellectual property rights in the website and material on the
              website. Subject to the license below, all these intellectual
              property rights are reserved.
            </li>
          </ul>
          <h2>License to Use Website</h2>
          <p>
            You may view, download for caching purposes only, and print pages
            from the website for your own personal use, subject to the
            restrictions set out below and elsewhere in these Terms and
            Conditions.
          </p>

          <h2>You must not</h2>
          <ul>
            <li>
              Republish material from this website (including republication on
              another website)
            </li>
            <li>Sell, rent, or sub-license material from the website</li>
            <li>Show any material from the website in public</li>
            <li>
              Reproduce, duplicate, copy, or otherwise exploit material on this
              website for a commercial purpose
            </li>
            <li>
              Redistribute material from this website except for content
              specifically and expressly made available for redistribution.
            </li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>
            You must not use this website in any way that causes, or may cause,
            damage to the website or impairment of the availability or
            accessibility of the website; or in any way which is unlawful,
            illegal, fraudulent, or harmful, or in connection with any unlawful,
            illegal, fraudulent, or harmful purpose or activity.
          </p>
          <h2>Changes to Terms and Conditions</h2>
          <p>
            BSFG reserves the right to make amendments to these Terms and
            Conditions at any time. Your continued use of the website following
            any changes shall be deemed as your acceptance of those changes.
          </p>

          
            <h2>Contact Information: </h2>
            <p>
            If you have any questions or concerns regarding these Terms and
            Conditions, please contact us at
            <a href="mailto:customerservice@beautyfashionsales.com">
              customerservice@beautyfashionsales.com
            </a>
          </p>
          <p>
            By using our website, you hereby consent to our Terms and Conditions
            and agree to abide by them.
          </p>
          <hr></hr>
        </div>
        <FooterBfsg />
      </section>
    </div>
  );
};

export default TermsService;
