
import { useEffect } from 'react';

export const MetaViewport = () => {
  useEffect(() => {
    // Убеждаемся, что viewport правильно настроен
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');

    // Добавляем meta для отключения автоматического определения телефонов
    let formatDetection = document.querySelector('meta[name="format-detection"]');
    if (!formatDetection) {
      formatDetection = document.createElement('meta');
      formatDetection.setAttribute('name', 'format-detection');
      formatDetection.setAttribute('content', 'telephone=no');
      document.head.appendChild(formatDetection);
    }
  }, []);

  return null;
};
