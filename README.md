# 🧥 Forman - Мастерская премиальных пиджаков

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fyagartem4ik.github.io%2Fforman-com%2F)](https://yagartem4ik.github.io/forman-com/)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/yagartem4ik/forman-com)](https://github.com/YAGARTEM4IK/forman-com/commits/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Forman Preview](https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

Сайт мастерской по пошиву эксклюзивных мужских пиджаков с индивидуальным подходом и премиальными материалами.

## 🌐 Онлайн-витрина

Сайт доступен по адресу:  
👉 [https://yagartem4ik.github.io/forman-com/](https://yagartem4ik.github.io/forman-com/)

## ✨ Особенности проекта

- **Премиальный дизайн**
  - Элегантная темная цветовая гамма
  - Анимации плавного появления
  - Интерактивные элементы

- **Полная адаптивность**
  - Оптимизация для всех устройств
  - Гибкие сетки и изображения
  - Удобное мобильное меню

- **Понятный интерфейс**
  - Четкие разделы продукции
  - Процесс индивидуального пошива
  - Контактная информация

## 🛠 Технологический стек

| Технология | Применение |
|------------|------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | Семантическая верстка |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | Стили и анимации |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | Интерактивность |

**Использованные библиотеки**:
- [Font Awesome](https://fontawesome.com/) - Иконки
- [Google Fonts](https://fonts.google.com/) - Шрифты Playfair Display и Raleway

## 📂 Структура проекта

```bash
forman-com/
├── index.html          # Главная страница
├── README.md           # Этот файл
└── LICENSE             # Лицензия (MIT)
```

## 🚀 Быстрый старт

1. Клонируйте репозиторий:
```bash
git clone https://github.com/YAGARTEM4IK/forman-com.git
```

2. Откройте файл `index.html` в браузере

Или сразу перейдите на [GitHub Pages](https://yagartem4ik.github.io/forman-com/)

## 🎨 Дизайн-решения

### Цветовая палитра
```css
:root {
  --primary: #1a1a2e;    /* Темно-синий */
  --secondary: #a67c52;  /* Коричневый */
  --accent: #8b0000;     /* Бордовый */
  --light: #f8f5f2;      /* Светлый фон */
}
```

### Типографика
- **Заголовки**: Playfair Display (700)
- **Основной текст**: Raleway (300/600)

## 📱 Адаптивность

Сайт оптимизирован для всех устройств:

| Устройство | Разрешение | Особенности |
|------------|------------|-------------|
| Десктоп | 1200px+ | Полноценный интерфейс |
| Планшет | 768-1199px | Адаптивные карточки |
| Смартфон | до 767px | Гамбургер-меню |

## 🛠 Разработка

### Основные функции JavaScript
```javascript
// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимации при скролле
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate-me');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if(position < window.innerHeight * 0.75) {
      el.classList.add('animated');
    }
  });
});
```

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

## 🤝 Как внести вклад

1. Форкните репозиторий
2. Создайте ветку для вашей фичи (`git checkout -b feature/AmazingFeature`)
3. Закоммитьте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Запушьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📬 Контакты

По вопросам сотрудничества:  
✉️ [your-email@example.com](example@example.com)  
💬 [@your_telegram](https://t.me/yag_artem)

---

**Forman Tailoring** © 2023 | [Открыть сайт](https://yagartem4ik.github.io/forman-com/)
