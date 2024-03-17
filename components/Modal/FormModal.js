"use client"
import React from 'react';
import CustomModal from './Modal';
import {useModal} from "./ModalProvider";

const FormModal = () => {
    const { modalIsOpen,  closeModal} = useModal();
    return (
        <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <div role="form" className="wpcf7" id="wpcf7-f5-o1" lang="ru-RU" dir="ltr">
                    <form action="/services/lending/#wpcf7-f5-o1" method="post"
                          className="wpcf7-form init form contact__form popup-form callback zoom-anim-dialog"
                          novalidate="novalidate" data-status="init">
                        <h3 className="h3">Форма заявки</h3>

                        <div className="wrap-inpute">
                            <div className="wrap-inpute__item">
                                <label>
                                    <span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name"
                                                                                           value="" size="40"
                                                                                           className="wpcf7-form-control wpcf7-text"
                                                                                           aria-invalid="false"/></span>
                                    <span className="wrap-inpute__label">Ваше имя:</span>
                                </label>
                            </div>

                            <div className="wrap-inpute__item">
                                <label>
                                    <span className="wpcf7-form-control-wrap email-101"><input type="email" name="email-101"
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
                                <span className="wpcf7-form-control-wrap tel-68"><input type="tel" name="tel-68" value=""
                                                                                    size="40"
                                                                                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel input-phone"
                                                                                    aria-required="true"
                                                                                    aria-invalid="false"/></span>
                                <span className="wrap-inpute__label">Ваш телефон:</span>
                            </label>
                        </div>

                        <label className="form_textarea">
                            <span className="wpcf7-form-control-wrap textarea-740"><textarea name="textarea-740" cols="40"
                                                                                         rows="10"
                                                                                         className="wpcf7-form-control wpcf7-textarea"
                                                                                         aria-invalid="false"></textarea></span>
                            <span className="wrap-inpute__label_text">Сообщение:</span>
                        </label>

                        <div className="text-center">
                            <div className="input-cheked">

                                <label className="input-cheked__label input-cheked--active" for="ckeck1">

                                    <span className="input-cheked__text">Я даю согласие на обработку персональных данных и подтверждаю, что ознакомлен с <a
                                        href="/privacy-policy/"
                                        target="_blank">Политикой обработки персональных данных</a>.</span></label>
                            </div>

                            <span className="wpcf7-form-control-wrap text-987"><input type="text" name="text-987" value=""
                                                                                  size="40"
                                                                                  className="wpcf7-form-control wpcf7-text hidden"
                                                                                  aria-invalid="false"/></span>


                            <input type="submit" value="Отправить"
                                   className="wpcf7-form-control has-spinner wpcf7-submit btn btn--red"/>
                        </div>
                        <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>

        </CustomModal>
)
    ;
};

export default FormModal;
