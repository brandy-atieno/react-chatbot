import home from "../images/images (3).jpeg";
import home2 from "../images/images (5).jpeg";
import home3 from "../images/images (2).jpeg";

import "../css/home_animation.css";
const HomeAnimation = () => {
  const images = [home, home2,home3]
  return (
    <div className="images-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`animated-${index}`}
          className="home-animated-image"
        />
      ))}
    </div>
  );
};

export default HomeAnimation;
