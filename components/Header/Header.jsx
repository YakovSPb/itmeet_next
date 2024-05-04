"use client"
import React, {useEffect} from 'react'
import {useState} from "react";
import clsx from "clsx"
import {signOut, useSession} from "next-auth/react";
import {useContacts} from "@/providers/Context";
import Link from "next/link";
import {linkPhoneNumber} from "@/utils/linkPhoneNumber";
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

    const { contacts, isLoading, setLoading, setContacts } = useContacts();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/contact');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке контактов');
                }
                const data = await response.json();
                if(data.contacts.length){
                    setContacts(data.contacts[0]);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

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
                                    <Link href={link.path} aria-current="page">{link.label}</Link></li>
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
                            <i className="fa fa-envelope-o"></i>
                            <Link href={`mailto:${contacts?.email}`}>{contacts?.email}</Link>
                        </div>
                        <div className="phone header_phone">
                            <i className="fa fa-phone"></i>
                            <Link href={`tel:${linkPhoneNumber(contacts?.phone)}`}>{contacts?.phone}</Link>
                        </div>
                        {status === 'authenticated' && <div>
                            <Link style={{marginLeft: 15}} href="/write">write</Link>
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