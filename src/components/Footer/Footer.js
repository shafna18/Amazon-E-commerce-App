import '../Footer/Footer.css'

function Footer() {
    return ( 
        <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h4>About</h4>
      <ul>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Flipkart Stories</a></li>
        <li><a href="/">Press</a></li>
        <li><a href="/">Corporate Information</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Group Companies</h4>
      <ul>
        <li><a href="/">Myntra</a></li>
        <li><a href="/">Cleartrip</a></li>
        <li><a href="/">Shopsy</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Help</h4>
      <ul>
        <li><a href="/">Payments</a></li>
        <li><a href="/">Shipping</a></li>
        <li><a href="/">Cancellation & Returns</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Report Infringement</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Consumer Policy</h4>
      <ul>
        <li><a href="/">Cancellation & Returns</a></li>
        <li><a href="/">Terms Of Use</a></li>
        <li><a href="/">Security</a></li>
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Sitemap</a></li>
        <li><a href="/">Grievance Redressal</a></li>
        <li><a href="/">EPR Compliance</a></li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <ul className="bottom-links">
      <li><a href="/">Become a Seller</a></li>
      <li><a href="/">Advertise</a></li>
      <li><a href="/">Gift Cards</a></li>
      <li><a href="/">Help Center</a></li>
    </ul>
    <p>@ 2007-2024 Flipkart.com</p>
  </div>
</footer>

     );
}

export default Footer;