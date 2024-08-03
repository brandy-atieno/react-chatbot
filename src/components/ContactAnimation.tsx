import contact from "../images/contact.jpg";
import "../css/contact_animation.css";
const ContactAnimation = () => {
  return (
    <div className="image-container">
    <img src={contact} alt="animated-contact" className="contact-animated-image" />
  </div>
  );
};

export default ContactAnimation;
