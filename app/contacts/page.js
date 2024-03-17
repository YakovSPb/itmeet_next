"use client"
import useWowInit from "../../hooks/useWowInit";
import 'react-image-lightbox/style.css';

const page = () => {
    useWowInit()

    return (
        <div className="in_main">
            <h1 className="h1 in_main__h1">Контакты</h1>
            <div className="breadcrumbs breadcrums_block" typeof="BreadcrumbList">
                <div className="container">
                    <span property="itemListElement" typeof="ListItem">
                        <a property="item" typeof="WebPage" title="Перейти к IT-Meet" href="/" className="home">
                            <span property="name">Главная</span></a>
                        <meta property="position" content="1"/></span> / <span
                    property="itemListElement" typeof="ListItem"><span property="name"
                                                                       className="post post-page current-item">Контакты</span><meta
                    property="url" content="/contacts/"/><meta property="position"
                                                               content="2"/></span></div>
            </div>
            <div className="container">
                <div className="contact">
                    <div className="contact__info">
                        <div className="contact__desc">Если вы хотите проконсультироваться, то звоните
                            мне, <b>пишите</b> на почту, в WhatsApp или в удобный для вас мессенджер. Сделаю все
                            возможно, чтобы вас сайт был на высшем уровне!
                        </div>

                        <div className="contact__item">
                            <div className="contact__label">Телефон:</div>
                            <div className="contact__text">
                                <div className="phone contact__phone">
                                    <i className="fa fa-phone"></i><a href="tel:+79523806666">8-952-380-66-66</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="contact__label">Email</div>
                            <div className="contact__text">
                                <div className="mail contact__mail">
                                    <i className="fa fa-envelope-o"></i><a
                                    href="mailto:seo@prospekt.pro">seo@prospekt.pro</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact__item">
                            <div className="contact__label">Адрес офиса:</div>
                            <div className="contact__text">в данное время все сотрудники работают удаленно</div>
                        </div>

                        <div className="contact__item">
                            <div className="contact__label">Часы работы:</div>
                            <div className="contact__text">с 10:00 до 22:00</div>
                        </div>
                        <div className="contact__item">
                            <div className="contact__label">Месенджеры:</div>
                            <div className="contact__text">
                                <div className="social contact__social">
                                    <a className="social__link" href="https://api.whatsapp.com/send?phone=79523806666"
                                       target="_blank"><span>+79523806666</span></a>
                                    <a className="social__link" href="https://t.me/tanerdam"
                                       target="_blank"><span>@tanerdam</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="contact__form">
                        <div role="form" className="wpcf7" id="wpcf7-f5-p299-o1" lang="ru-RU" dir="ltr">
                            <form action="/services/lending/#wpcf7-f5-o1" method="post"
                                  className="wpcf7-form init form contact__form popup-form callback zoom-anim-dialog"
                                  noValidate="novalidate" data-status="init">
                                <h3 className="h3">Форма заявки</h3>

                                <div className="wrap-inpute">
                                    <div className="wrap-inpute__item">
                                        <label>
                                    <span className="wpcf7-form-control-wrap your-name">
                                        <input type="text"
                                               name="your-name"
                                               value="" size="40"
                                               className="wpcf7-form-control wpcf7-text"
                                               aria-invalid="false"/></span>
                                            <span className="wrap-inpute__label">Ваше имя:</span>
                                        </label>
                                    </div>

                                    <div className="wrap-inpute__item">
                                        <label>
                                    <span className="wpcf7-form-control-wrap email-101">
                                        <input type="email"
                                               name="email-101"
                                               value="" size="40"
                                               className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                               aria-required="true"
                                               aria-invalid="false"/></span>
                                            <span className="wrap-inpute__label">Ваша почта:</span>
                                        </label>
                                    </div>

                                </div>

                                <div className="wrap-inpute__item">
                                    <label>
                                <span className="wpcf7-form-control-wrap tel-68">
                                    <input type="tel" name="tel-68"
                                           value=""
                                           size="40"
                                           className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel input-phone"
                                           aria-required="true"
                                           aria-invalid="false"/></span>
                                        <span className="wrap-inpute__label">Ваш телефон:</span>
                                    </label>
                                </div>

                                <label className="form_textarea">
                            <span className="wpcf7-form-control-wrap textarea-740">
                                <textarea name="textarea-740"
                                          cols="40"
                                          rows="10"
                                          className="wpcf7-form-control wpcf7-textarea"
                                          aria-invalid="false"></textarea></span>
                                    <span className="wrap-inpute__label_text">Сообщение:</span>
                                </label>

                                <div className="text-center">
                                    <div className="input-cheked">

                                        <label className="input-cheked__label input-cheked--active" htmlFor="ckeck1">

                                    <span className="input-cheked__text">Я даю согласие на обработку персональных данных и подтверждаю, что ознакомлен с <a
                                        href="/privacy-policy/"
                                        target="_blank">Политикой обработки персональных данных</a>.</span></label>
                                    </div>

                                    <span className="wpcf7-form-control-wrap text-987">
                                        <input type="text"
                                               name="text-987" value=""
                                               size="40"
                                               className="wpcf7-form-control wpcf7-text hidden"
                                               aria-invalid="false"/></span>


                                    <input type="submit" value="Отправить"
                                           className="wpcf7-form-control has-spinner wpcf7-submit btn btn--red"/>
                                </div>
                                <div className="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page