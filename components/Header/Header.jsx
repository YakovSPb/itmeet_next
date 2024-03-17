"use client"
import React from 'react'
import {items} from "../../public/Items.json";
import {useState} from "react";
import clsx from "clsx"
const Header = () => {
    const {links} = items
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="logo"><a href="/public" className="logo">IT</a>
                    </div>
                    <nav className={clsx("menu header__menu",toggleMenu && 'header__menu--active')}>
                        <ul
                            className="menu__list">
                            {links.map(link=> (
                                <li key={link.id}
                                    className="menu-item">
                                    <a href={link.path} aria-current="page">{link.label}</a></li>
                            ))}
                        </ul>
                    </nav>

                    <div className="social header__social">
                        <a className="social__link social__link_whatapp"
                           href="#" target="_blank"></a>
                        <a className="social__link social__link_telegram"
                           href="#" target="_blank"></a>
                        <a className="social__link social__link_skype"
                           href="#" target="_blank"></a>
                    </div>

                    <div className="header_info">
                        <div className="mail">
                            <i className="fa fa-envelope-o"></i><a
                            href="mailto:itmeetm@gmail.com">itmeetm@gmail.com</a>
                        </div>
                        <div className="phone header_phone">
                            <i className="fa fa-phone"></i><a
                            href="tel:+79850781496">8-985-078-14-96</a>
                        </div>
                    </div>

                    <div onClick={()=>setToggleMenu(!toggleMenu)} className={clsx("hamburger hamburger--emphatic", toggleMenu && 'is-active')}>
                        <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header