import Carousel from "react-bootstrap/Carousel";
import womanRun from "../../assets/Banner-img/womanRun.jpg";
import "../../App.css";

function HeroSlider() {
  return (
    <Carousel fade interval={4000} className="hero-slider">

      <Carousel.Item>
        <img
          className="d-block w-100 hero-img"
          src={womanRun}
          alt="slide"
        />

        <Carousel.Caption className="hero-caption">
          <div className="caption-box">
            <p className="small-text">This is it</p>

            <h1 className="main-title">
              BE IN THE <span>GAME</span>
            </h1>

            <p className="sub">The Ultimate Sports Theme</p>
          </div>

          <div className="yellow-arrow">
            MAKE YOUR FIRST STEP HERE...
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
  
}

export default HeroSlider;

