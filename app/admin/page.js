"use client"
import 'react-image-lightbox/style.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {signIn} from "next-auth/react";
import {useState} from "react";
import {useRouter} from "next/navigation"
import styles from "@/app/write/Write.module.css";
import {useSnackbar} from "notistack";

const page = () => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter()
    const [error, setError] = useState('')
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setError('');
    };

    const tabs = [
        { label: 'Авторизация'},
        { label: 'Регистрация'},
    ];

    const handleSubmit = async (values, actions) => {
        const {login, password} = values

            if (activeTab === 0) {
                try {
                    const res = await signIn('credentials', {
                        login, password, redirect: false
                    })

                    if (res.error) {
                        setError("Invalid login or password")
                        return
                    }

                    router.replace("/")

                } catch (e) {
                    console.log("Error during login", e)
                }
                actions.setSubmitting(false);
            } else if (activeTab === 1) {
                try {
                    const response =  await fetch('api/register',{
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            login, password
                        })
                    })
                    if (response.ok) {
                        setActiveTab(0);
                        enqueueSnackbar('You have successfully authorized', { variant: 'success' });
                    } else {
                        const errorMessage = await response.text();
                        enqueueSnackbar(errorMessage, { variant: 'error' });
                    }
                } catch(e) {
                    console.log("Error during registration", e)
                }
                actions.setSubmitting(false);
        }
    };

    return (
        <div className="in_main">
            <div className={styles.tabButtons}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? styles.buttonActive : ''}
                        onClick={() => handleTabChange(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <h1 className="h1 in_main__h1">{tabs[activeTab].label}</h1>
            <div className="container">
                <div className="contact d-flex">
                    <div className="contact__info auth__info">
                        <div className="contact__desc">Добро пожаловать Яков Александрович!</div>
                    </div>
                </div>
                <div className="contact__form auth__form">
                    <Formik
                        initialValues={{login: '', password: ''}}
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
                        onSubmit={handleSubmit}
                    >
                        {({isSubmitting}) => (
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
                                    <button type="submit" className="btn btn--red">{tabs[activeTab].label}</button>
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