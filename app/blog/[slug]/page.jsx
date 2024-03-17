"use client"
import MyBlog from "../../../components/MyBlog/MyBlog";

const SingleServicesPage = () => {
    return (
        <div className="in_main">

            <h1 className="h1 in_main__h1">Tailwind CSS - это инновационный CSS-фреймворк</h1>
            <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                <div className="container">
                        <span property="itemListElement" typeof="ListItem">
                            <a property="item" typeof="WebPage"
                               title="Перейти к Prospekt."
                               href="/public"
                               className="home"><span
                                property="name">Главная</span></a><meta property="position" content="1"/></span> / <span
                    property="itemListElement" typeof="ListItem">
                    <a property="item" typeof="WebPage"
                       title="Перейти к Услуги и цены."
                       href="/blog"
                       className="archive post-services-archive"><span
                        property="name">Статьи</span></a><meta property="position" content="2"/></span> / <span
                    property="itemListElement" typeof="ListItem">
                    <span property="name"
                          className="post post-services current-item">Tailwind CSS - это инновационный CSS-фреймворк</span><meta
                    property="url" content="/services/lending/"/>
                    <meta property="position"
                          content="3"/></span>
                </div>
            </div>

            <div className="container">
                <div className="page-promo">
                    <div className="page-promo__img"><img
                        src="/portfolio/portfolio_01s.jpg"
                        alt="Tailwind CSS - это инновационный CSS-фреймвор"/></div>
                    <div className="page-promo__info">
                        Tailwind CSS - это инновационный CSS-фреймворк,
                        который позволяет создавать пользовательские веб-интерфейсы с невероятной
                        скоростью
                        и простотой. Он основан на концепции "utility-first", предлагая более 300
                        предопределенных классов для стилизации элементов. Этот фреймворк позволяет
                        экономить время разработки, обеспечивая гибкость и контроль над дизайном. С
                        Tailwind
                        CSS вы можете создавать стильные и адаптивные интерфейсы, не тратя много времени
                        на
                        написание собственных стилей. Он предлагает расширяемую архитектуру, что делает
                        его
                        отличным выбором для разработчиков любого уровня опыта.
                    </div>
                </div>

                <div className="content">
                    Tailwind CSS - это инновационный CSS-фреймворк,
                    который позволяет создавать пользовательские веб-интерфейсы с невероятной
                    скоростью
                    и простотой. Он основан на концепции "utility-first", предлагая более 300
                    предопределенных классов для стилизации элементов. Этот фреймворк позволяет
                    экономить время разработки, обеспечивая гибкость и контроль над дизайном. С
                    Tailwind
                    CSS вы можете создавать стильные и адаптивные интерфейсы, не тратя много времени
                    на
                    написание собственных стилей. Он предлагает расширяемую архитектуру, что делает
                    его
                    отличным выбором для разработчиков любого уровня опыта.
                </div>
                <MyBlog/>
            </div>


        </div>
    )
}

export default SingleServicesPage