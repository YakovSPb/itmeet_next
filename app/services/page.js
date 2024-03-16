"use client"
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import useWowInit from "../../hooks/useWowInit";

const page = () => {
    useWowInit()
    return (
            <div className="in_main">
                <h1 className="h1 in_main__h1">Услуги и цены</h1>
                <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                    <div className="container">
                        <span property="itemListElement" typeof="ListItem">
                            <a property="item" typeof="WebPage" title="Перейти к Prospekt." href="/"
                               className="home"><span property="name">Главная</span></a><meta property="position"
                                                                                              content="1"/></span>
                    </div>
                </div>
                <div className="services">
                    <div className="container">
                        <div className="services_items">
                            <div className="services_item">
                                <a href="#" className="services_item__link">
                                    <div className="services_item__title">Лендинг</div>
                                    <div className="services_item__img"><img
                                        src="/services/landing-page-500x200.jpg"
                                        alt="Создание landing-page"/></div>
                                    <div className="services_item__price">
                                        <span>25 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Лендинг или Landing page – веб-страница
                                            в Интернете, где сжато и ярко подается информация о вашем продукте. Основная
                                            задача лендинга — заинтересовать посетителя сайта и побудить его отправить
                                            форму.</p>
                                            <p>Преимущество лендинга то, что на одной странице выжимка всей нужной
                                                информации для клиента.</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Адаптивная верстка</div>
                                    <div className="services_item__img"><img
                                        src="/services/adaptivnaya-verstka-sajta-500x200.jpg"
                                        alt="Адаптивная верстка сайта"/></div>
                                    <div className="services_item__price">
                                        <span>3 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Мой код качественный, минималистичный и
                                            понятный. Верстаю, обычно с помощью flex-box, по желанию заказчика могу
                                            использовать сетку Bootstrap 5 или Grid. Хорошо знаю Javascript и библиотеку
                                            jQuery.</p>
                                            <p>Делаю сайты я быстро и качественно. Пишите свои вопросы. Буду рад
                                                сотрудничеству!</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Корпоративный сайт</div>
                                    <div className="services_item__img"><img
                                        src="/services/korporativnyj_sajt-500x200.jpg"
                                        alt="Корпоративный сайт"/></div>
                                    <div className="services_item__price">
                                        <span>45 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Корпоративный веб-сайт нужен для
                                            предоставление потенциальному будущему клиенту информации о компании, где
                                            перечисляются преимущества компании, описывается лучшие качества товара либо
                                            услуги.</p>
                                            <p>Получается, что корпоративный сайт является онлайн-офисом вашей компании,
                                                который упрощает вашу работу и экономит вам время.</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Установка и настройка WordPress</div>
                                    <div className="services_item__img"><img
                                        src="/services/ustanovka-WordPress-500x200.jpg"
                                        alt="Установка WordPress"/></div>
                                    <div className="services_item__price">
                                        <span>12 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Если у вас уже есть сверстанный сайт, то
                                            вам осталось только установить CMS для быстрого и удобного управления
                                            контентом. Благодаря WordPress вы сможете быстро менять контент на сайте, а
                                            также самостоятельно добавлять плагины для расширения функционала.</p>
                                            <p>Работу сделаю в самые коротки сроки и на высшем уровне!</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Интернет магазин</div>
                                    <div className="services_item__img"><img
                                        src="/services/internet-magazin-500x200.jpg"
                                        alt="Создание интернет магазина"/></div>
                                    <div className="services_item__price">
                                        <span>65 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>К разработке интернет-магазина нужно
                                            походить серьезно и поэтапно. Вот основные этапы работы на сайтом: рисуем
                                            прототип, разработка дизайна, верстка макета, установка WordPress
                                            Woocommerce, OpenCart или другое подходящее решение, подключение способов
                                            оплаты, заполнение сайта товаром.</p>
                                            <p>Скачайте анкету (бриф), заполните ее и присылайте мне обратно. Сделаем
                                                вам техническое задание и разработаем продающий современный
                                                интернет-магазин!</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Техническая поддержка</div>
                                    <div className="services_item__img"><img
                                        src="/services/tehnicheskaya-podderzhka-sajta-500x200.jpg"
                                        alt="Техническая поддержка сайта"/></div>
                                    <div className="services_item__price">
                                        <span>400р в час</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>В техническую поддержку также входит
                                            разработка новый страниц и заполнение страниц новым контентом .Установка
                                            новых плагинов таких, как геолокация, кеширования, SEO, безопасности.
                                            Разработка скриптов, например, калькулятор расчет стоимости, подключение
                                            яндекс и гугл карт, и других API, итерация с 1C, яндекс-маркетом или другими
                                            платформами.</p>
                                            <p>Свяжитесь со мной, если вам нужно перенести сайта на новый домен, купить
                                                выделенный сервер или подключить ssl сертификат. Вы можете мне написать
                                                в <b>любое время</b> суток и я оперативно решу поставленную вами задачу
                                                или помогу найти нужного и проверенного фрилансера.</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#" className="services_item__link">
                                    <div className="services_item__title">Сайт визитка</div>
                                    <div className="services_item__img"><img
                                        src="/services/sajt-vizitka-500x200.jpg"
                                        alt="создание сайта визитки"/></div>
                                    <div className="services_item__price">
                                        <span>25 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Такой тариф разработки небольшого и
                                            простого сайта подойдет для начала, чтобы заявить о себе в глобальной сети.
                                            Полноценный вариант для запуска контекстной рекламы в Яндексе или
                                            Google.</p>
                                            <p>В этот пакет входит базовая СЕО оптимизации сайта и увеличение скорости
                                                загрузки страниц.</p>
                                            <p>Позвоните мне или напишите и мы с вами разработаем ваш новый сайт!</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Разработка дизайна</div>
                                    <div className="services_item__img"><img
                                        src="/services/razrabotka_dizajna-500x200.jpg"
                                        alt="Разработка дизайна для сайта"/></div>
                                    <div className="services_item__price">
                                        <span>10 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Наши дизайнеры разработают вам
                                            эксклюзивный макет-дизайн, подходящий именно для вашего сайта. Такой дизайн,
                                            который будет привлекать новых клиентов и побуждать их совершать у вас
                                            покупки.</p>
                                            <p>Скачайте анкету, укажите сайты конкурентов, которые вам понравились и мы
                                                сделаем лучше!</p><p></p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Креативный копирайтинг</div>
                                    <div className="services_item__img"><img
                                        src="/services/kreativnyj-kopirajting-500x200.jpg"
                                        alt="креативный копирайтинг"/></div>
                                    <div className="services_item__price">
                                        <span>500 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>После того, как вы сделали сайт, его
                                            нужно заполнить контентом, т.е. загрузить фото и видео материал, установить
                                            цены и написать уникальный продающий текст.</p>
                                            <p>Я помогу вам подобрать коприайтера, который разбирается в области вашего
                                                бизнеса и заполню вам сайт качественно и быстро.</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>
                            <div className="services_item">
                                <a href="#"
                                   className="services_item__link">
                                    <div className="services_item__title">Продвижение и оптимизация</div>
                                    <div className="services_item__img"><img
                                        src="/services/seo-500x200.jpg"
                                        alt="Продвижение сайтов"/></div>
                                    <div className="services_item__price">
                                        <span>15 000 р.</span>
                                    </div>
                                    <div className="services_item__text">
                                        <div className="services_item__desc"><p>Современное продвижение сайта — это
                                            прежде всего оптимизация скорости загрузка веб-ресурса, написание полезного
                                            для клиента текстов, улучшение юзабилити. Качественная верстка мобильной
                                            версии сайта.</p>
                                            <p>Я занимаюсь продвижением сайтов уже более 10 лет. Напишите мне, и я
                                                подберу вам ключевые фразы, сделаю аудит вашего сайта, оценю
                                                конкурентоспособность, распишу вам план раскрутки по адекватной
                                                цене.</p></div>
                                    </div>
                                </a>
                                <div className="services_item__btn-wrap">
                                    <a href="#modal" className="btn services_item__btn fancybox"
                                       data-from="Услуги архив заказать">Заказать услугу</a>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>


                <div className="pagination"></div>
                <PortfolioSlider/>
            </div>
    )
}

export default page