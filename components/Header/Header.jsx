import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <div className="logo"><a href="/public" className="logo">IT</a>
                    </div>


                    <nav className="menu header__menu">
                        <ul id="primary-menu" className="menu__list">
                            <li id="menu-item-196"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17 current_page_item menu-item-196">
                                <a href="#" aria-current="page">Главная</a></li>
                            <li id="menu-item-199"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a
                                href="#">Услуги и цены</a></li>
                            <li id="menu-item-197"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-197"><a
                                href="#">Портфолио</a></li>
                            <li id="menu-item-307"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-307"><a
                                href="#">О нас</a></li>
                            <li id="menu-item-353"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-353"><a
                                href="#">Контакты</a></li>
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

                    <a href="#" className="hamburger hamburger--emphatic">
                        <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                    </a>

                </div>
            </div>
        </header>
    )
}

export default Header