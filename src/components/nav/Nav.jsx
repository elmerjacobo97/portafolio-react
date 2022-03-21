import './nav.css';
import {
    AiOutlineHome,
    AiOutlineUser,
    BiBook,
    BiMessageSquareDetail,
    RiServiceLine,
} from 'react-icons/all';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav('#services')}
                className={activeNav === '#services' ? 'active' : ''}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;