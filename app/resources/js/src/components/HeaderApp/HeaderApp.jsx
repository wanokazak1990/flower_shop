import {Link} from "react-router-dom";

export const HeaderApp = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="#" className="header__logo">
                        <img src="/logo.svg" alt="logo"/>
                    </a>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__list-item">
                                <Link to={`admin`}>Цветы</Link>
                                {/*<a href="#" className="header__list-link">Цветы</a>*/}
                            </li>
                            <li className="header__list-item">
                                <a href="#" className="header__list-link">Букеты</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className="header__account">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_6_1038)">
                                <path d="M12.5 13.5208C15.7964 13.5208 18.4687 10.8485 18.4687 7.55209C18.4687 4.25564 15.7964 1.58334 12.5 1.58334C9.20355 1.58334 6.53125 4.25564 6.53125 7.55209C6.53125 10.8485 9.20355 13.5208 12.5 13.5208Z" stroke="#020202" strokeWidth="2" strokeMiterlimit="10"/>
                                <path d="M1.5625 24.4583L1.94792 22.3229C2.40323 19.8567 3.70806 17.628 5.63574 16.0238C7.56342 14.4196 9.99214 13.5414 12.5 13.5417C15.0108 13.5423 17.4419 14.4235 19.37 16.0318C21.2981 17.6401 22.6011 19.8737 23.0521 22.3438L23.4375 24.4792" stroke="#020202" strokeWidth="2" strokeMiterlimit="10"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_1038">
                                    <rect width="25" height="25" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Рубцов С.
                    </a>
                    <a href="#" className="header__burger">
                        <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.58179 32.1781H37.6363" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M2.58179 17.5H37.6363" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M2.58179 2.82193H37.6363" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
