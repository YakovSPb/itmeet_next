"use client"
import React from 'react'
import {useState} from "react";
import clsx from "clsx"
import {signOut, useSession} from "next-auth/react";
const Header = () => {
    const links = [
        {
            "id": 1,
            "path": "/",
            "label": "Главная"
        },
        {
            "id": 2,
            "path": "/services",
            "label": "Услуги и цены"
        },
        {
            "id": 3,
            "path": "/portfolio",
            "label": "Портфолио"
        },
        {
            "id": 6,
            "path": "/blog",
            "label": "Статьи"
        },
        {
            "id": 4,
            "path": "/about",
            "label": "О нас"
        },
        {
            "id": 5,
            "path": "/contacts",
            "label": "Контакты"
        }
    ]
    const [toggleMenu, setToggleMenu] = useState(false)
    const {status} = useSession()
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
                        {status === 'authenticated' && <div>
                            <a style={{marginLeft: 15}} href="/write">write</a>
                            <div
                                onClick={() => signOut()}
                                style={{marginLeft: 15, cursor: 'pointer'}}>logout
                            </div>
                        </div>}
                    </div>

                    <div onClick={() => setToggleMenu(!toggleMenu)} className={clsx("hamburger hamburger--emphatic", toggleMenu && 'is-active')}>
                        <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header