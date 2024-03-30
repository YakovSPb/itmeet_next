"use client"
import useWowInit from "../../hooks/useWowInit";
import {useEffect} from "react";
import {useState} from "react";
import {getImageSize} from "../../utils/getImageSize";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const page = () => {
    useWowInit()
    const { portfolio } = items;
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
        <div className="in_main">
            <h1 className="h1 in_main__h1">Портфолио</h1>
            <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                <div className="container">
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                                                                          title="Перейти к Prospekt."
                                                                          href="#"
                                                                          className="home"><span
                        property="name">Главная</span></a><meta property="position" content="1"/></span> / <span
                    property="itemListElement" typeof="ListItem"><span property="name"
                                                                       className="post post-page current-item">Портфолио</span><meta
                    property="url" content="/portfolio/"/><meta property="position" content="2"/></span>
                </div>
            </div>

            <div className="container">
                <div className="portfolio portfolio-page sect_padd">
                    <div className="container">
                        <div className="portfolio_items">
                            {portfolio.map((item, index) => (
                                <div key={item.id}
                                     className="portfolio_item"
                                     onClick={(event) => handleItemClick(index,event)}
                                >
                                    <div className="portfolio_item__img">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="portfolio_item__feedback">{item.feedback}</div>
                                    <div className="portfolio_item__name">{item.name}</div>
                                </div>
                            ))}
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

                            <div className="pagination">
                                <span aria-current="page" className="page-numbers current">1</span>
                                <a className="page-numbers" href="/portfolio/page/2/">2</a>
                                <a className="next page-numbers" href="/portfolio/page/2/">»</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page