import {Link} from "react-router-dom";
import logoImage from "../../assets/images/icons/logo.svg"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {useState} from "react";
export const HeaderApp = () => {
    const [dropdown, setDropdown] = useState('');
    const openDropdownMenu = () => {
        if (dropdown === 'active') {
            setDropdown('');
        } else {
            setDropdown('active');
        }
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="#" className="header__logo">
                        <img src={logoImage} alt="logo"/>
                        <p>FlowerShop</p>
                    </a>
                    <a href="#" className="header__cart">
                        <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 21.5V11.5C11 5.97715 15.4771 1.5 21 1.5C26.5228 1.5 31 5.97715 31 11.5V21.5M11 14H31C38.5 14 41 23.7248 41 27.75C41 42.8148 36.9915 45.25 21 45.25C5.00845 45.25 1 42.8148 1 27.75C1 23.7248 3.5 14 11 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="header__cart-count">0</span>
                    </a>
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
                        Войти
                    </a>
                    <div className="header__account header__account_textdecoration" onClick={openDropdownMenu}>
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
                        <div className={`header__account-dropdown ${dropdown}`}>
                            <ul className="header__account-list">
                                <li>
                                    <a href="#" className="header__account-link" onClick={() => alert('hello')}>Профиль</a>
                                </li>
                                <li>
                                    <a href="#" className="header__account-link">Выйти</a>
                                </li>
                            </ul>
                        </div>
                    </div>
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
