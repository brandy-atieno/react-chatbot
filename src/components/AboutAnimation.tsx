import about1 from "../images/download.jpeg";
import about2 from "../images/images.png";
import about3 from "../images/images (1).jpeg";

import "../css/about_animation.css";
const AboutAnimation = () => {
  const images = [about1, about2, about3]
  return (
    <div className="images-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`animated-${index}`}
          className="about-animated-image"
        />
      ))}
    </div>
  );
};

export default AboutAnimation;
