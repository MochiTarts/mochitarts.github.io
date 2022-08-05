import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./index";
import "./Navbar.css";

const openNav = () => document.getElementById("myNav").style.width = "100%";

const closeNav = () => document.getElementById("myNav").style.width = "0%";

const goToTop = (isMobile) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
    if (isMobile) {
        document.getElementById('myNav').style.width = '0%';
    }
};

const goToAbout = (isMobile) => {
    const el = document.getElementById('about');
    el.scrollIntoView({
        behaviour: 'smooth'
    });
    if (isMobile) {
        document.getElementById('myNav').style.width = '0%';
    }
};

const useScrollHandler = () => {
    const [scroll, setScroll] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => {
            const el = document.querySelector('.nav') || document.querySelector('.hamburger');
            const scrolled = window.pageYOffset > el.clientHeight;
            setScroll(scrolled);
        }
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [scroll, setScroll]);

    return scroll;
};

const useCheckPastHeader = () => {
    const [pastHeader, setPastHeader] = React.useState(false);

    React.useEffect(() => {
        const onPastHeader = () => {
            const header = document.querySelector('.header');
            const pastHeader = window.scrollY > (header.offsetTop + header.offsetHeight);
            setPastHeader(pastHeader);
        }
        document.addEventListener('scroll', onPastHeader);

        return () => document.removeEventListener('scroll', onPastHeader);
    }, [pastHeader, setPastHeader]);

    return pastHeader;
};

const Navbar = () => {
    const isMobile = useMediaQuery(
        '(max-width: 555px), sreen and (max-width: 568px) and (orientation: landscape)'
    );
    const scrollPastHeader = useCheckPastHeader();
    const scroll = useScrollHandler();

    return (
        !isMobile ?
            <nav className={"nav justify-content-center " + (scroll ? "nav-inverse" : "")}>
                <span className="nav-item">
                    <Link className="nav-link" to="" onClick={() => goToTop(isMobile)}>Home</Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="">Skills</Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="">Experience</Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="" onClick={() => goToAbout(isMobile)}>Projects</Link>
                </span>
                <span className="nav-item">
                    <Link className="nav-link" to="">Contact</Link>
                </span>
            </nav>
            :
            <div>
                <span className={"hamburger " + (scrollPastHeader ? "nav-inverse-mobile" : "")} onClick={openNav}>&#9776;</span>
                <nav id="myNav" class="overlay">
                    <a class="closebtn" onClick={closeNav}>&times;</a>
                    <div class="overlay-content">
                        <Link to="" onClick={() => goToTop(isMobile)}>Home</Link>
                        <Link to="">Skills</Link>
                        <Link to="">Experience</Link>
                        <Link to="" onClick={() => goToAbout(isMobile)}>Projects</Link>
                        <Link to="">Contact</Link>
                    </div>
                </nav>
            </div>
    );
}

export default Navbar;