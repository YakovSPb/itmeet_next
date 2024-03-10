import { Carousel } from "react-responsive-carousel";
import {items} from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";
export default function CasesSlider() {
    const { cases } = items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cases.length - 1 ? prevIndex : prevIndex + 1));
    };

    return (
        <div className="cases sect_padd">
            <h2 className="h2">Выберите подходящий тариф</h2>
            <div className="desc">Пришло время найти ваш стиль</div>
            <div className={"container slider"}>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    dynamicHeight={false}
                    renderThumbs={() => {
                    }} // Пустая функция для отключения миниатюр
                    showIndicators={false}
                    showStatus={false} // Отключение отображения статуса
                    centerMode={true} // Режим центрального слайда
                    selectedItem={currentIndex}
                    stopOnHover={false}
                    centerSlidePercentage={33.3333} // Размер центрального слайда в процентах
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
                <a href="#"
                   className="btn btn--red fancybox"
                   data-from="Главная тарифы">Заказать</a>
            </div>
        </div>
    );
}