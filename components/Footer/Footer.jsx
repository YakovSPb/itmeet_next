"use client"
import React from 'react'
import {useModal} from "../Modal/ModalProvider";
const Footer = () => {
    const links =  [
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
    const { openModal } = useModal();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">

                    <div className="footer_logo">
                        <div className="logo"><a href="/public"
                                                 className="logo">IT-Meet</a>
                        </div>
                        <div className="footer_info">
                            <div className="footer_info">
                                <p>Профессиональная разработка сайтов на WordPres, верстка
                                сайта от фрилансера.</p>
                                <p>Создание лендинга или интернет-магазина под ключ по всей России.</p>
                                <p>Все права защищены | Не является публичной офертой | <a href="/privacy-policy/">ПОЛИТИКА
                                    КОНФИДЕНЦИАЛЬНОСТИ</a></p></div>
                        </div>
                        <div className="footer_copy">© 2008-2022 г. itmeet.ru</div>
                    </div>

                    <div className="footer_menu">
                        <nav className="menu footer__menu">
                            <ul className="menu__list">
                                {links.map(link=> (
                                    <li
                                        key={link.id}
                                        className="menu-item">
                                        <a href={link.path} aria-current="page">{link.label}</a></li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer_contact">
                        <div className="footer_contact_inner">
                            <div className="phone">
                                <i className="fa fa-phone"></i><a
                                href="tel:+79850781496">8-985-078-14-96</a>
                            </div>
                            <div className="mail">
                                <i className="fa fa-envelope-o"></i><a
                                href="mailto:itmeetm@gmail.com">itmeetm@gmail.com</a>
                            </div>
                            <div className="social footer__social">
                                <a className="social__link"
                                   href="#"
                                   target="_blank"></a>
                                <a className="social__link"
                                   href="#"
                                   target="_blank"></a>
                                <a className="social__link"
                                   href="#"
                                   target="_blank"></a>
                                <a className="social__link"
                                   href="#" target="_blank"></a>
                            </div>
                            <div
                               onClick={openModal}
                               className="btn btn--red footer__btn"
                               data-from="Футер оставить заявку">Оставить заявку</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer