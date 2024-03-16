"use client"
import { Carousel } from "react-responsive-carousel";
import {items} from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {useEffect} from "react";
import {getImageSize} from "../../utils/getImageSize";

export default function PortfolioSlider() {
    const { portfolio } = items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === portfolio.length - 1 ? prevIndex : prevIndex + 1));
    };

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 }); // Состояние для хранения размера изображения

    useEffect(() => {
        // Функция для загрузки размера изображения перед открытием Lightbox
        const loadImageSize = async () => {
            try {
                const size = await getImageSize(portfolio[photoIndex].img);
                setImageSize(size);
            } catch (error) {
                console.error('Ошибка при загрузке размера изображения:', error);
            }
        };

        // Проверяем, открыт ли Lightbox, и загружаем размер изображения при его открытии
        if (isOpen) {
            loadImageSize();
        }
    }, [isOpen, photoIndex, portfolio]);

    const handleItemClick = (index, event) => {
        event.stopPropagation(); // Предотвращаем всплытие события
        if (!isOpen) {
            setPhotoIndex(index);
            setIsOpen(true);
        }
    };

    return (
        <div className="portfolio portfolio_slider">
            <h2 className="h2">Мое портфолио</h2>
            <div className="desc">отзывы клиентов</div>
            <div className="container">
                <div className="portfolio_items wow animate__animated animate__slideInUp">
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
                            {portfolio.map((item, index) => (
                                <div key={item.id}
                                     onClick={(event) => handleItemClick(index,event)}
                                     className="portfolio_item">
                                    <div className="portfolio_item__img">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="portfolio_item__feedback">{item.feedback}
                                    </div>
                                    <div className="portfolio_item__name">{item.name}</div>
                                </div>
                            ))}
                        </Carousel>
                        {isOpen && (
                            <Lightbox
                                mainSrc={portfolio[photoIndex].img}
                                nextSrc={portfolio[(photoIndex + 1) % portfolio.length].img}
                                prevSrc={portfolio[(photoIndex + portfolio.length - 1) % portfolio.length].img}
                                onCloseRequest={() => setIsOpen(false)}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + portfolio.length - 1) % portfolio.length)}
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % portfolio.length)}
                                imageWidth={imageSize.width} // Ширина изображения
                                imageHeight={imageSize.height} // Высота изображения
                            />
                        )}
                        <div className="y_prevArrow slick-arrow" onClick={handlePrevClick}><i
                            className="fa fa-angle-left"></i>
                        </div>
                        <div className="y_nextArrow slick-arrow" onClick={handleNextClick}><i
                            className="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}