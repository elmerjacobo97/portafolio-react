import './footer.css'
import 'boxicons'


const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Elmer Jacobo</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/elmer.jacobo.5832" target="_blank">
                    <box-icon type='logo' name='facebook' color='#ffffff'></box-icon>
                </a>
                <a href="https://www.instagram.com/elmerjacobo_97/?hl=es" target="_blank">
                    <box-icon name='instagram' type='logo' color='#ffffff'></box-icon>
                </a>
                <a href="https://twitter.com/Elmjac1810" target="_blank">
                    <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; 2022 | Elmer Jacobo . All Rights Reserved </small>
            </div>
        </footer>
    );
};

export default Footer;