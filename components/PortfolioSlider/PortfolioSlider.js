import { Carousel } from "react-responsive-carousel";
import {items} from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";
export default function PortfolioSlider() {
    const { portfolio } = items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cases.length - 1 ? prevIndex : prevIndex + 1));
    };

    return (
        <div className={"container slider"}>
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                dynamicHeight={false}
                renderThumbs={() => {}} // Пустая функция для отключения миниатюр
                showIndicators={false}
                showStatus={false} // Отключение отображения статуса
                centerMode={true} // Режим центрального слайда
                selectedItem={currentIndex}
                stopOnHover={false}
                centerSlidePercentage={33.3333} // Размер центрального слайда в процентах
            >
                {portfolio.map((item) => (
                    <div key={item.id} className="portfolio_item">
                        <div className="portfolio_item__img"><a
                            href={item.img}
                            data-fancybox="gallery"><img
                            src={item.thumb}
                            alt={item.name}/></a></div>
                        <div className="portfolio_item__feedback">{item.feedback}
                        </div>
                        <div className="portfolio_item__name">{item.name}</div>
                    </div>
                ))}
            </Carousel>
            <div className="y_prevArrow slick-arrow" onClick={handlePrevClick}><i className="fa fa-angle-left"></i>
            </div>
            <div className="y_nextArrow slick-arrow" onClick={handleNextClick}><i className="fa fa-angle-right"></i>
            </div>
        </div>
    );
}