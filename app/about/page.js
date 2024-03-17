"use client"
import useWowInit from "../../hooks/useWowInit";
import 'react-image-lightbox/style.css';

const page = () => {
    useWowInit()
    return (
        <div className="in_main">
            <h1 className="h1 in_main__h1">О нас</h1>
            <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                <div className="container">
                    <span property="itemListElement" typeof="ListItem">
                        <a property="item" typeof="WebPage"
                           href="/"
                           className="home"><span
                            property="name">Главная</span></a><meta property="position" content="1"/></span> / <span
                    property="itemListElement" typeof="ListItem"><span property="name"
                                                                       className="post post-page current-item">О нас</span><meta
                    property="url" content="/about/"/><meta property="position" content="2"/></span>
                </div>
            </div>
            <div className="container">
                <div className="page-promo">
                    <div className="page-promo__info">
                    </div>
                </div>
                <div className="content">
                    <h2><strong>Full-stack WordPress developer</strong></h2>
                    <p></p>
                    <p>Наша компания занимается разработкой и продвижением сайтов уже более 13 лет. Звоните или <strong>пишите
                        нам</strong>, мы постараемся помочь вам.</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default page