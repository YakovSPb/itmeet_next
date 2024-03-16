"use client"
import React from 'react'
import {useModal} from "../Modal/ModalProvider";

const Footer = () => {
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
                            <ul id="footer-menu" className="menu__list">
                                <li id="menu-item-202"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-202">
                                    <a href="/public" aria-current="page">Главная</a></li>
                                <li id="menu-item-203"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-203"><a
                                    href="/services/">Услуги и цены</a></li>
                                <li id="menu-item-204"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-204">
                                    <a href="#">Портфолио</a></li>
                                <li id="menu-item-304"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-304">
                                    <a href="#">О нас</a></li>
                                <li id="menu-item-305"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-305">
                                    <a href="#">Контакты</a></li>
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