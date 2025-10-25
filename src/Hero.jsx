import "./Hero.css";
import img1 from "./images/learn.png";

function Hero() {
  return (
    <section className="hero-section">
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="school-name-wrapper">
        <span className="school-name">H/Meegasara Maha Vidylaya</span>
      </div>
          <h1 className="hero-title">Welcome Students!</h1>
          <p className="text">
           This is the Official website in H/Meegasara M.V.
          </p>
        </div>
        <div className="hero-image-container">
          <img
            src={img1}
            alt=""
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
