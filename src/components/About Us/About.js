import Aboutimg from "./imges/about image.webp"
import "../About Us/About.css"
const About = () => {
    return ( 
    <section className="about-us">
      <div className="about">
        <img src={Aboutimg} alt='' class="pic" />
        <div className="text">
          <h3>About Us</h3>
          <p> Welcome to our E-Commerce platform. We offer a wide range of products to meet all your needs.
          Our mission is to provide high-quality products at competitive prices with excellent customer service.</p>
           <button>Shop Now</button>
          </div>
        </div>
    </section>
     );
}
 
export default About;
