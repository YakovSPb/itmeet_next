"use client"
import useWowInit from "../../hooks/useWowInit";
import {useEffect} from "react";
import {useState} from "react";
import {getImageSize} from "../../utils/getImageSize";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const page = () => {
    useWowInit()
    const portfolio = [
        {
            "id": 1,
            "thumb": "/portfolio/portfolio_01s.jpg",
            "img": "/portfolio/portfolio_01-scaled.jpg",
            "feedback": "\"Работа выполнена в срок и с соблюдением всех условий.\"",
            "name": "Vladimir Kan"
        },
        {
            "id": 2,
            "thumb": "/portfolio/portfolio_02s.jpg",
            "img": "/portfolio/portfolio_02-scaled.jpg",
            "feedback": "\"Вёрстка сделана за 1 день, вместо 4! Багов практически не было! Остался доволен сотрудничеством!\"",
            "name": "Oottoo"
        },
        {
            "id": 3,
            "thumb": "/portfolio/portfolio_03s.jpg",
            "img": "/portfolio/portfolio_03-scaled.jpg",
            "feedback": "\"Отлично настроили вордпессовский шаблон. Все правки учтены и быстро исправлены.\"",
            "name": "Анастасия Скворцова"
        },
        {
            "id": 4,
            "thumb": "/portfolio/portfolio_04s.jpg",
            "img": "/portfolio/portfolio_04-scaled.jpg",
            "feedback": "\"Сделали сайт, установили WordPress за две недели. Ответственный исполнитель, скорость и качество на высоте!\"",
            "name": "Антон Маков"
        },
        {
            "id": 5,
            "thumb": "/portfolio/portfolio_05s.jpg",
            "img": "/portfolio/portfolio_05-scaled.jpg",
            "feedback": "\"Рекомендую этих ребят, все очень точно и оперативно, несмотря на выходные.\"",
            "name": "Ирина Алексеевна"
        },
        {
            "id": 6,
            "thumb": "/portfolio/portfolio_06s.jpg",
            "img": "/portfolio/portfolio_06-scaled.jpg",
            "feedback": "\"Ответственный исполнитель, сделал всё в срок и качественно!\"",
            "name": "Андрей Запускалов"
        },
        {
            "id": 7,
            "thumb": "/portfolio/portfolio_07s.jpg",
            "img": "/portfolio/portfolio_07-scaled.jpg",
            "feedback": "\"Все четко в срок. Рекомендую\"",
            "name": "Денис"
        },
        {
            "id": 8,
            "thumb": "/portfolio/portfolio_08s.jpg",
            "img": "/portfolio/portfolio_08-scaled.jpg",
            "feedback": "\"Отличный специалист, за 5 минут разобрался и проблемы нет) Будем сотрудничать!\"",
            "name": "Вадим"
        },
        {
            "id": 9,
            "thumb": "/portfolio/portfolio_10s.jpg",
            "img": "/portfolio/portfolio_10-scaled.jpg",
            "feedback": "\"Сайт был сложным и запутанным как изнутри, так и снаружи. Ваша команда отлично и быстро справилась с заданием, к тому же с нуля переделал дизайн, сверстанный на коленке.\"",
            "name": "Никита"
        },
        {
            "id": 10,
            "thumb": "/portfolio/portfolio_09s.jpg",
            "img": "/portfolio/portfolio_09-scaled.jpg",
            "feedback": "\"Всё отлично, хороший фрилансер, рекомендую. Нарисовал всё по тз, там, где просил чуть переделать - без вопросов. Сотрудничеством доволен на все 100%!\"",
            "name": "Андрей"
        },
        {
            "id": 11,
            "thumb": "/portfolio/portfolio_11s.jpg",
            "img": "/portfolio/portfolio_11-scaled.jpg",
            "feedback": "\"Очень понравился подход к задаче. Был предоставлен прототип, но Яков предложил лучшее решение компоновки контента.\"",
            "name": "Лилия Наильевна"
        },
        {
            "id": 12,
            "thumb": "/portfolio/portfolio_12s.jpg",
            "img": "/portfolio/portfolio_12-scaled.jpg",
            "feedback": "\"Качественная работа, всегда на связи и хорошие цены!\"",
            "name": "Юрий"
        },
        {
            "id": 13,
            "thumb": "/portfolio/portfolio_13s.jpg",
            "img": "/portfolio/portfolio_13.jpg",
            "feedback": "\"Спасибо! Было очень приятно поработать))\"",
            "name": "Сергей"
        },
        {
            "id": 14,
            "thumb": "/portfolio/portfolio_14s.jpg",
            "img": "/portfolio/portfolio_14.jpg",
            "feedback": "\"Благодарю, за продуктивное сотрудничество. Вся работа была сделана качественно и в срок, даже с учетом доработок!\"",
            "name": "Евгений"
        },
        {
            "id": 15,
            "thumb": "/portfolio/portfolio_15s.jpg",
            "img": "/portfolio/portfolio_15.jpg",
            "feedback": "\"Яков после того, как взялся за задачу сделал все быстро, четко, без лишних вопросов. Спасибо.\"",
            "name": "Александр"
        },
        {
            "id": 16,
            "thumb": "/portfolio/portfolio_16s.jpg",
            "img": "/portfolio/portfolio_16-scaled.jpg",
            "feedback": "\"Спасибо всё очень быстро ) Качественно! а главное всё как и хотел , и не дорого!\"",
            "name": "Елена"
        },
        {
            "id": 17,
            "thumb": "/portfolio/portfolio_17s.jpg",
            "img": "/portfolio/portfolio_17.jpg",
            "feedback": "\"Яков и его команда прекрасно справились с задачей, проявили себя как умелые и ответственные исполнители!\"",
            "name": "Александр"
        }
    ]
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