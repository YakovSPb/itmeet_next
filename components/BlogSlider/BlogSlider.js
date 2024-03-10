import { Carousel } from "react-responsive-carousel";
import {items} from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";
export default function BlogSlider() {
    const { blogs } = items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cases.length - 1 ? prevIndex : prevIndex + 1));
    };


    return (
        <div className="myblog sect_padd">
            <h2 className="h2">Мои статьи</h2>
            <div className="container">
                <div className="myblog_items">
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
                        {blogs.map((item) => (
                            <div className="myblog_item">
                                <a key={item.id} href="#" className="myblog_item__link">
                                    <div className="myblog_item__img"><img
                                        src={item.img}
                                        alt={item.alt}/></div>
                                    <div className="myblog_item__info">
                                        <div className="myblog_item__date">{item.data}</div>
                                        <div className="myblog_item__date"><i className="fa fa-eye"></i>
                                            <span>{item.view}</span></div>
                                    </div>
                                    <div className="myblog_item__title">{item.text}</div>
                                </a>
                            </div>
                        ))}
                    </Carousel>
                    {/*<div className="y_prevArrow slick-arrow" onClick={handlePrevClick}><i*/}
                    {/*    className="fa fa-angle-left"></i>*/}
                    {/*</div>*/}
                    {/*<div className="y_nextArrow slick-arrow" onClick={handleNextClick}><i*/}
                    {/*    className="fa fa-angle-right"></i>*/}
                    {/*</div>*/}
                </div>
            </div>
</div>
)
}