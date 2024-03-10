"use client"
import Header from "@/components/Header/Header";
import CasesSlider from "@/components/CasesSlider/CasesSlider";
import Footer from "@/components/Footer/Footer";
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import MyBlog from "@/components/MyBlog/MyBlog";

export default function Home() {
    return <div>
        <Header/>
        <div className="wrapper">
            <div className="main">
                <div className="promo">
                    <img className={'promo__img'} src={'/promo.jpg'} alt='promo'/>
                    <div className="promo_info">
                        <div className="promo_info__title"><h1 className="h1">Разработка сайтов и приложений на React и
                            Node.js</h1></div>
                        <div className="promo_info__desc">Продвижение и поддержка сайтов</div>
                        <a href="#"
                           className="fancybox btn promo_info__btn"
                           data-from="Главная промо">Связаться</a>
                    </div>
                </div>

                <div className="works">
                    <div className="container">
                        <div className="works_items">
                            <div className="works_item">
                                <div className="works_item__question"><p>Что я могу</p><p>для вас сделать:</p></div>
                            </div>


                            <div className="works_item">
                                <div className="works_item__title">Правки на сайте</div>
                                <div className="works_item__text">Выполнить список задач по вашему сайту</div>
                            </div>
                            <div className="works_item">
                                <div className="works_item__title">Преимущества работы со мной</div>
                                <div className="works_item__text">Создать лендинг, сайт каталог или интернет-магазин
                                </div>
                            </div>
                            <div className="works_item">
                                <div className="works_item__title">Подписать контракт</div>
                                <div className="works_item__text">Вы можете нанять меня на полный рабочий день</div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="advantages">
                    <div className="advantages_image"><img
                        src="/advantage.jpg"
                        alt="разработка сайтов на WordPress"/></div>
                    <div className="advantages_info">
                        <div className="advantages_info__title wow animate__animated animate__fadeInRight">Преимущества
                            работы со мной:
                        </div>

                        <ul className="advantages_info__list">
                            <li className="advantages_info__item wow animate__animated animate__fadeInRight"><b>Адекватные
                                цены:</b> отсутствие затрат на офис, и на содержание большого коллектива работников,
                                позволяют держать не высокие цены.
                            </li>
                            <li className="advantages_info__item wow animate__animated animate__fadeInRight"><b>Опыт
                                боле
                                10 лет:</b> использую только современные технологи, за моей спиной сотни довольных
                                клиентов.
                            </li>
                            <li className="advantages_info__item wow animate__animated animate__fadeInRight"><b>Всегда
                                на
                                связи:</b> доступен ежедневно 24 часа, и могу оперативно исправить ошибку на вашем
                                сайте.
                            </li>
                            <li className="advantages_info__item wow animate__animated animate__fadeInRight"><b>Команда
                                профессионалов:</b> на вас будет работать слаженная команда. Я сопровождаю работу над
                                вашим сайтом: выполнение сроков и высокий уровень качества работы.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="team sect_padd">
                    <h2 className="h2">Давайте собирем вашу команду фрилансеров</h2>
                    <div className="desc">Программисты, дизайнеры, копирайтеры, контент-менеджеры, специалисты по SEO и
                        MMS
                    </div>
                    <div className="container">
                        <div className="team_items">


                            <div className="team_item">
                                <a className="team_item__link" href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_2.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Адаптивная верстка</div>
                                    <div className="team_item__text">Современая верстка, четкий и понятный код для сайта
                                    </div>
                                </a>

                            </div>
                            <div className="team_item">
                                <a className="team_item__link" href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_4.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Установка WordPress</div>
                                    <div className="team_item__text">Любая CMS с удобным управлением контентом</div>
                                </a>

                            </div>
                            <div className="team_item">
                                <a className="team_item__link"
                                   href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_6.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Техническая поддержка</div>
                                    <div className="team_item__text">Сопровождение сайта, настройка новых плагинов</div>
                                </a>

                            </div>
                            <div className="team_item">
                                <a className="team_item__link" href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_1.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Разработка дизайна</div>
                                    <div className="team_item__text">Креативный, уникальный дизайн любой сложности</div>
                                </a>

                            </div>
                            <div className="team_item">
                                <a className="team_item__link"
                                   href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_3.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Креативный копирайтинг</div>
                                    <div className="team_item__text">Продающие тексты под специфику вашего бизнеса</div>
                                </a>

                            </div>
                            <div className="team_item">
                                <a className="team_item__link"
                                   href="#">
                                    <div className="team_item__icon"><img
                                        src="/icon_freelance_5.png"
                                        alt="Alt"/></div>
                                    <div className="team_item__title">Продвижение и оптимизация</div>
                                    <div className="team_item__text">Высокая скорость сайта, СЕО и контекстная реклама
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="container text-center">
                        <a href="#"
                           className="btn btn--red team__btn fancybox"
                           data-from="Главная команда фрилансеров">Заказать услугу</a>
                    </div>
                </div>

                <div className="how_work sect_padd">
                    <h2 className="h2">Как мы будем работать с вами?</h2>
                    <div className="desc">Гарантии, способы оплаты, выполнение сроков</div>
                    <div className="container">
                        <div className="how_work_items">
                            <div className="how_work_item wow animate__animated animate__flipInX">
                                <div className="how_work_item__icon"><img
                                    src="/icon_work_1.png" alt="Alt"/>
                                </div>
                                <div className="how_work_item__line"></div>
                                <div className="how_work_item__title">Разработка ТЗ</div>
                                <div className="how_work_item__text">Разработка технического задание, установка цены и
                                    сроков, подписание договора
                                </div>
                            </div>
                            <div className="how_work_item wow animate__animated animate__flipInX">
                                <div className="how_work_item__icon"><img
                                    src="/icon_work_2.png" alt="Alt"/>
                                </div>
                                <div className="how_work_item__line"></div>
                                <div className="how_work_item__title">Сбор команды</div>
                                <div className="how_work_item__text">Подбор небходимых фрилансеров под каждый этап ,
                                    утверждение исполнителей
                                </div>
                            </div>
                            <div className="how_work_item wow animate__animated animate__flipInX">
                                <div className="how_work_item__icon"><img
                                    src="/icon_work_3.png" alt="Alt"/>
                                </div>
                                <div className="how_work_item__line"></div>
                                <div className="how_work_item__title">Работа</div>
                                <div className="how_work_item__text">Выполнение работы, уточнение деталей,
                                    информирование
                                    вас на каком этапе ваш проект
                                </div>
                            </div>
                            <div className="how_work_item wow animate__animated animate__flipInX">
                                <div className="how_work_item__icon"><img
                                    src="/icon_work_4.png" alt="Alt"/>
                                </div>
                                <div className="how_work_item__line"></div>
                                <div className="how_work_item__title">Оплата</div>
                                <div className="how_work_item__text">Поэтапная оплата после выполнение части работы.
                                    Гибкие способы рассчета
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <CasesSlider/>
                <PortfolioSlider/>
                <MyBlog/>
            </div>
        </div>
        <Footer/>
    </div>;
}
