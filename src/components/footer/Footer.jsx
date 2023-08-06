import "./Footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container global-max-width">
          <div className="footer-des">
            <img src={Logo} alt="Little Lemon logo" />
            <div className="opening-times">
              <h5>Opening Hours</h5>
              <ul>
                <li>Monday - Friday: 12pm - 11:00pm</li>
                <li>Saturday - Sunday: 3pm - 12:00AM</li>
              </ul>
            </div>

            <div className="contact">
              <h5>Contacts</h5>
              <ul>
                <li>Tel: 555 444 6666</li>
                <li>Email: little_lemon@littlelemon.com</li>
              </ul>
            </div>

            <div className="locations">
              <h5>Location</h5>
              <ul>
                <li>1750 Cupertino, Mulch CA 20531</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
