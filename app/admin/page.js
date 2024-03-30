"use client"
import 'react-image-lightbox/style.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation"

const page = () => {
    const router = useRouter()
    const [error, setError] = useState('')

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
                    <Formik
                        initialValues={{ login: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.login) {
                                errors.login = 'Поле обязательно для заполнения';
                            }
                            if (!values.password) {
                                errors.password = 'Поле обязательно для заполнения';
                            }
                            return errors;
                        }}
                        onSubmit={ async (values, { setSubmitting }) => {
                            const {login, password} = values
                            try {
                                const res = await signIn('credentials', {
                                    login, password, redirect: false
                                })

                                if(res.error){
                                    setError("Invalid login or password")
                                    return
                                }

                                router.replace("/")

                            } catch(e) {
                                console.log("Error during login", e)
                            }
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="form contact__form popup-form zoom-anim-dialog">
                                <div className="wrap-inpute">
                                    <div className="wrap-inpute__item">
                                        <label htmlFor="login">Login</label>
                                        <Field type="text" name="login"/>
                                        <ErrorMessage name="login" component="div"/>
                                    </div>
                                    {/*<div className="wrap-inpute__item">*/}
                                    {/*    <label htmlFor="email">Email</label>*/}
                                    {/*    <Field type="email" name="email"/>*/}
                                    {/*    <ErrorMessage name="email" component="div"/>*/}
                                    {/*</div>*/}
                                    <div className="wrap-inpute__item">
                                        <label htmlFor="password">Password</label>
                                        <Field type="password" name="password"/>
                                        <ErrorMessage name="password" component="div"/>
                                    </div>
                                </div>
                                <div style={{marginTop: 40}} className="text-center">
                                    <button type="submit" className="btn btn--red">Вход</button>
                                </div>
                                <div className={'text-center'}>{error}</div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default page