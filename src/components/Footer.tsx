import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} FreeMindz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
