"use client"
import PortfolioSlider from "../../../components/PortfolioSlider/PortfolioSlider";
import MyBlog from "../../../components/MyBlog/MyBlog";
import {useModal} from "../../../components/Modal/ModalProvider";

const SingleServicesPage = () => {
    const { openModal} = useModal();
    return (
            <div className="in_main">
                <h1 className="h1 in_main__h1">Лендинг</h1>
                <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                    <div className="container">
                        <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                              title="Перейти к Prospekt."
                                                                              href="/public"
                                                                              className="home"><span
                            property="name">Главная</span></a><meta property="position" content="1"/></span> / <span
                        property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                        title="Перейти к Услуги и цены."
                                                                        href="/services"
                                                                        className="archive post-services-archive"><span
                        property="name">Услуги и цены</span></a><meta property="position" content="2"/></span> / <span
                        property="itemListElement" typeof="ListItem"><span property="name"
                                                                           className="post post-services current-item">Лендинг</span><meta
                        property="url" content="/services/lending/"/><meta property="position"
                                                                                               content="3"/></span>
                    </div>
                </div>


                <div className="container">
                    <div className="page-promo">
                        <div className="page-promo__img"><img
                            src="/services/landing-page-520x334.jpg"
                            alt="<?php echo get_field('services__image')['alt'];?>"/></div>
                        <div className="page-promo__info">
                            <div className="page-promo__title"><h2 className="h2 page-promo__h2">Стоимость и сроки
                                разработки лендинга</h2></div>
                            <div className="page-promo__price">
                                <div className="page-promo__numbers">Цена от <b>25 000 р.</b></div>
                                <div className="page-promo__time">Сроки от <b>14 дней</b></div>
                            </div>

                            <ul>
                                <li>Индивидуальный дизайн</li>
                                <li>Адаптивная версия</li>
                                <li>Домен .ru и хостинг (1 год)</li>
                                <li>Система управления WordPress</li>
                                <li>10-12 блоков, настройка плагинов</li>
                            </ul>

                            <div className="services_item__btn-wrap">
                                <div
                                    onClick={openModal}
                                    className="btn services_item__btn"
                                >Заказать услугу</div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <h2>Как происходит создание лендинга</h2>
                        <p>Для начала, мы составляем техническое задание для создания Лендинга (Landing page). Вы
                            можете <a href="/docs/Brif-na-sozdanie-sayta.doc">скачать
                                анкету</a> (бриф), заполнить ее и прислать мне. На основе анкеты, мы сделаем техническое
                            задание для дизайнера.</p>
                        <p>Далее дизайнер создает прототип сайта, в котором схематично указывает, где на сайте будут
                            размещены блоки с информацией, и какого они будут размера. После утверждения прототипа, мы
                            приступаем к разработке дизайна. Утверждается дизайн веб-сайта. Далее происходит верстка
                            лендинга и установка CMS WordPress или любой другой.</p>
                        <p>Наша команда также осуществляет услуги продвижения сайта и помощь в настройке контекстной
                            рекламы. Звоните или <b>пишите нам</b>, мы ответим на все ваши вопросы и сделаем вам
                            современный продающий лендинг!</p>
                        <h2>Что такое лендинг?</h2>
                        <p>Лендинг или Landing page – веб-страница в Интернете, где сжато и ярко подается информация о
                            вашем продукте. Основная задача лендинга — заинтересовать посетителя сайта и побудить его
                            отправить форму.</p>
                        <p>Преимущество лендинга то, что на одной странице выжимка всей нужной информации для клиента.
                            Такой сайт подойдет для рекламы вашей компании в контекстной рекламе Яндекса или Google.</p>
                    </div>
                    <PortfolioSlider/>
                </div>
                <MyBlog/>
            </div>
    )
}

export default SingleServicesPage