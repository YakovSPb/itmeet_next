import { useEffect } from "react";
import WOW from 'wowjs';

// Создаем пользовательский хук для инициализации WOW
const useWowInit = () => {
    useEffect(() => {
        const initializeWow = () => {
            // Проверяем, доступен ли объект window (только в клиентской среде)
            if (typeof window !== 'undefined') {
                // Инициализируем WOW
                new WOW.WOW().init();
            }
        };

        // Вызываем функцию инициализации WOW после загрузки компонента
        initializeWow();

        // Возвращаем функцию очистки эффекта (clean-up function)
        // В данном случае она пустая, так как нам не нужно ничего очищать
        return () => {};
    }, []);
};

export default useWowInit;