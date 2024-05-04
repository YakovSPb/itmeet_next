"use client"
import 'react-image-lightbox/style.css';
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation"
import Loader from "@/components/Loader/Loader";
import styles from './Write.module.css'
import {useState} from "react";
import ContactForm from "@/app/write/components/ContactForm";
import {SnackbarProvider} from "notistack";

const page = () => {
    const [activeTab, setActiveTab] = useState(0);
    const changeTab = (index) => {
        setActiveTab(index);
    };

    const tabs = [
        { label: 'Главная', content: <div>Содержимое вкладки 1</div> },
        { label: 'Портфолио', content: <div>Содержимое вкладки 2</div> },
        { label: 'Услуги', content: <div>Содержимое вкладки 3</div> },
        { label: 'Статьи', content: <div>Содержимое вкладки 4</div> },
        { label: 'СЕО', content: <div>Содержимое вкладки 5</div> },
        { label: 'Контакты', content: <ContactForm/> },
    ];
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <Loader/>;
    }

    if (!session) {
        router.push('/admin');
        return null;
    }
    return (
        <SnackbarProvider maxSnack={3}>
        <div className="in_main">
            <h1 className="h1 in_main__h1">Администрирование</h1>
            <div className="container">
                <div className="contact d-flex">
                    <div className="contact__info auth__info">
                        <div className="contact__desc">Добро пожаловать Яков Александрович!</div>
                    </div>
                </div>
                <div>
                    <div className={styles.tabs}>
                        <div className={styles.tabButtons}>
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={index === activeTab ? styles.buttonActive : ''}
                                    onClick={() => changeTab(index)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className={styles.tabContent}>
                            {tabs[activeTab].content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SnackbarProvider>
    )
}

export default page