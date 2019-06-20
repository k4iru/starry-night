import React from 'react';

function Header(e) {
    return (
        <header id="home">
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li><a className="smoothscroll" href="#home">Top</a></li>
            <li><a className={"smoothscroll " + (e.loaded ? "" : " disabled")} href="#forecast">Forecast</a></li>
                    <li><a className="smoothscroll" href="#about">Info</a></li>
                </ul>

            </nav>
        </header>


    )
};

export default Header;

