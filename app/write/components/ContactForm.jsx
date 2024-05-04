"use client"
import React, {useEffect} from 'react'
import styles from '../Write.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import clsx from "clsx";
import * as Yup from 'yup';
import instance from "/utils/axios";
import {useContacts} from "@/providers/Context";
import {useSnackbar} from "notistack";

const ContactForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { contacts } = useContacts();
    const {content = '', phone = '', email = '', adress = '', workingHours = '', messengers = []} = contacts

    return (
        <div className="contact__form auth__form">
            <h3 className="h3">Контакты</h3>
            <Formik
                initialValues={{
                    content,
                    phone,
                    email,
                    adress,
                    workingHours,
                    messengers
            }}
                validate={values => {
                    const errors = {};
                    const phoneRegExp = /^8-\d{3}-\d{3}-\d{2}-\d{2}$/;
                    const schema = Yup.object().shape({
                        phone: Yup.string().matches(phoneRegExp, 'Введите корректный телефон в формате 8-XXX-XXX-XX-XX'),
                        email: Yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
                    });
                    try {
                        schema.validateSync(values, { abortEarly: false });
                    } catch (validationErrors) {
                        validationErrors.inner.forEach(error => {
                            errors[error.path] = error.message;
                        });
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        await instance[contacts ? 'put' : 'post']('contact', { values }).then(()=> {
                            enqueueSnackbar('Contacts has been updated', { variant: 'success' });
                        })
                    } catch (e) {
                        console.log("Error during registration", e);
                    }
                    setSubmitting(false);
                }}
            >
                {({values, handleSubmit, setFieldValue, errors}) => (
                    <Form className="form contact__form popup-form zoom-anim-dialog" onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className={clsx(styles.formInner, "wrap-inpute")}>
                            <div className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                <label htmlFor="content">Контент</label>
                                <Field type="text" as="textarea" name="content"/>
                                <ErrorMessage className={'error'} name="content" component="div"/>
                            </div>
                            <div className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                <label htmlFor="phone">Телефон</label>
                                <Field type="text" name="phone"/>
                                <ErrorMessage className={'error'} name="phone" component="div"/>
                            </div>
                            <div className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                <label htmlFor="login">Почта</label>
                                <Field type="email" name="email"/>
                                <ErrorMessage className={'error'} name="email" component="div"/>
                            </div>
                            <div className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                <label htmlFor="adress">Адрес</label>
                                <Field type="adress" name="adress"/>
                            </div>
                            <div className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                <label htmlFor="workingHours">Часы работы:</label>
                                <Field type="workingHours" name="workingHours"/>
                            </div>
                            <div><b>Мессенджеры:</b></div>
                            {values.messengers.map((messenger, index) => (
                                <div key={index} className={clsx(styles.wrapInputeItem, 'wrap-inpute__item')}>
                                    <label htmlFor={`messengers[${index}].item`}>Item {index + 1}</label>
                                    <Field type="text" placeholder={'text'} name={`messengers[${index}].item`}/>
                                    <Field type="text" placeholder={'link'} name={`messengers[${index}].link`}/>
                                </div>
                            ))}
                        </div>
                        <div style={{marginTop: 40}} className="text-center">
                            <button type="submit" className="btn btn--red">Отправить</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm