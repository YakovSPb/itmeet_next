"use client"
import useWowInit from "../../hooks/useWowInit";
import 'react-image-lightbox/style.css';

const page = () => {
    useWowInit()

    return (
        <div className="in_main">
            <h1 className="h1 in_main__h1">Авторизация</h1>
            <div className="container">
                <div className="contact d-flex">
                    <div className="contact__info auth__info">
                        <div className="contact__desc">Добро пожаловать Яков Александрович!</div>
                    </div>
                </div>
                <div className="contact__form auth__form">
                    <form action="/services/lending/#wpcf7-f5-o1" method="post"
                          className="wpcf7-form init form contact__form popup-form callback zoom-anim-dialog"
                          noValidate="novalidate" data-status="init">
                        <div className="wrap-inpute">

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
                            <div className="wrap-inpute__item">
                                <label>
                                    <span className="wpcf7-form-control-wrap your-name">
                                        <input type="password"
                                               name="password"
                                               value="" size="40"
                                               className="wpcf7-form-control wpcf7-text"
                                               aria-invalid="false"/></span>
                                    <span className="wrap-inpute__label">Пароль:</span>
                                </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Вход"
                                   className="wpcf7-form-control has-spinner wpcf7-submit btn btn--red"/>
                        </div>
                        <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page