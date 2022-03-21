import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    FaGithub,
} from 'react-icons/all';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.facebook.com/elmer.jacobo.5832"
                target="__blank"
            >
                <BsFacebook />
            </a>
            <a
                href="https://www.instagram.com/elmerjacobo_97/?hl=es"
                target="__blank"
            >
                <BsInstagram />
            </a>
            <a href="https://twitter.com/Elmjac1810" target="__blank">
                <BsTwitter />
            </a>
            <a
                href="https://www.linkedin.com/in/elmer-augusto-jacobo-otiniano-bb7554209"
                target="__blank"
            >
                {' '}
                <BsLinkedin />{' '}
            </a>
            <a href="https://github.com/elmerjacobo97" target="__blank">
                <FaGithub />
            </a>
        </div>
    );
};

export default HeaderSocials;
