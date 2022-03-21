import './header.css';
import CTA from './CTA';
import ME from '../../assets/profile-me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Elmer Jacobo</h1>
                <h5 className="text-light">Frontend Developer</h5>

                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Image Portfolio" />
                </div>

                <a href="#contact" className="scroll__down">
                    {' '}
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
