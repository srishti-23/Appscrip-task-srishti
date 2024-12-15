import React from "react";
import "./Footer.css"; // Import your CSS file
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-section subscribe-section">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Signup for updates from mettà muse.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-section contact-section">
          <div>
            <h3>CONTACT US</h3>
            <p>+44 221 120 1390</p>
            <p>customerservice@mettamuse.com</p>
          </div>
          <div>
            <h3>CURRENCY</h3>
            <p>USD</p>
            <p>
              Transactions are settled in Euros & displayed in various
              currencies.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <div className="footer-columns">
          {/* METTÀ MUSE SECTION */}
          <div className="links-column">
            <h3>mettà muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliance Docs</li>
            </ul>
          </div>

          {/* QUICK LINKS SECTION */}
          <div className="links-column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* FOLLOW US SECTION */}
          <div className="social-icons">
            <span>FOLLOW US</span>
            <span>🌐 📸</span>

            <div className="payment-icons">
              <span>mettà muse ACCEPTS:</span>
              <Image
                src="/assets/Gpay.png"
                alt="Gpay logo"
                width={200}
                height={100}
              />
              <Image
                src="/assets/mastercard.png"
                alt="mastercard logo"
                width={200}
                height={100}
              />
              <Image
                src="/assets/paypal.png"
                alt="Paypal logo"
                width={200}
                height={100}
              />
              <Image
                src="/assets/amex.png"
                alt="amex logo"
                width={200}
                height={100}
              />

              <Image
                src="/assets/applepay.png"
                alt="Apple Pay logo"
                width={200}
                height={100}
              />
              <Image
                src="/assets/shoppay.png"
                alt="Shop Paylogo"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
