import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";
import {useEffect} from "react";
export default function CasesSlider({openModal}) {
    const cases = [
        {
            "id": 1,
            "title": "Лендинг (Langing page)",
            "desc": "Мощный креатив",
            "price": "25 000 р.",
            "lists": ["Индивидуальный дизайн", "Адаптивная версия", "Домен .ru и хостинг (1 год)", "Система управления WordPress", "10-12 блоков, настройка плагинов"]
        },
        {
            "id": 2,
            "title": "Корпоративный сайт",
            "desc": "Продающий бизнес",
            "price": "45 000 р.",
            "lists": ["Индивидуальный дизайн", "Базовая SEO Оптимизация", "Домен .ru и хостинг (1 год)", "Система управления WordPress", "Неограниченное кол-во страниц"]
        },
        {
            "id": 3,
            "title": "Интернет магазин",
            "desc": "Высокие онлайн продажи",
            "price": "65 000 р.",
            "lists": ["Уникальный дизайн", "Базовая SEO Оптимизация", "Домен .ru и хостинг (1 год)", "WordPress WooCommerce", "Неограниченное кол-во страниц"]
        },
        {
            "id": 4,
            "title": "Сайт визитка",
            "desc": "Мощный креатив",
            "price": "25 000 р.",
            "lists": ["Индивидуальный дизайн", "Адаптивная версия", "Домен .ru и хостинг (1 год)", "Система управления WordPress", "10-12 блоков, настройка плагинов"]
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cases.length - 1 ? prevIndex : prevIndex + 1));
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 779 && windowWidth < 1200) {
            setCenterSlidePercentage(50);
        } else if(windowWidth < 780){
            setCenterSlidePercentage(100);
        }
        else {
            setCenterSlidePercentage(33.3333);
        }
    }, [windowWidth]);

    return (
        <div className="cases sect_padd">
            <h2 className="h2">Выберите подходящий тариф</h2>
            <div className="desc">Пришло время найти ваш стиль</div>
            <div className={"container slider"}>
                <Carousel
                    key={currentIndex}
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    showIndicators={false}
                    showStatus={false} // Отключение отображения статуса
                    centerMode={true} // Режим центрального слайда
                    selectedItem={currentIndex}
                    stopOnHover={false}
                    centerSlidePercentage={centerSlidePercentage} // Размер центрального слайда в процентах
                >
                    {cases.map((item) => (
                        <div key={item.id} className="cases_items_inner">
                            <div className="cases_item">
                                <a href="#" className="cases_item__link">
                                    <div className="cases_item__promo">
                                        <div className="cases_item__title">{item.title}</div>
                                        <div className="cases_item__desc">{item.desc}</div>
                                        <div className="cases_item__price">{item.price}</div>
                                    </div>
                                    {item.lists.length && <ul className="cases_item__list">
                                        {item.lists.map((li, index) => <li key={index}
                                                                           className="cases_item__li">{li}</li>)}
                                    </ul>}
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="y_prevArrow slick-arrow" onClick={handlePrevClick}><i className="fa fa-angle-left"></i>
                </div>
                <div className="y_nextArrow slick-arrow" onClick={handleNextClick}><i className="fa fa-angle-right"></i>
                </div>
            </div>
            <div className="container text-center">
                <div
                   onClick={openModal}
                   className="btn btn--red"
                   data-from="Главная тарифы">Заказать</div>
            </div>
        </div>
    );
}