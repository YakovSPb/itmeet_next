import WOW from 'wowjs';
import {useEffect} from "react";

// Создаем пользовательский хук для инициализации WOW
const useWowInit = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.WOW = require('wowjs');
            new WOW.WOW().init();
        }
    }, []);
};

export default useWowInit