document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const nav = document.querySelector('.header__nav');

    // Слушаем клик по бургер-кнопке
    burgerButton.addEventListener('click', () => {
        nav.classList.toggle('active'); // Добавляем/удаляем класс для открытия/закрытия меню
        burgerButton.classList.toggle('active'); // Для анимации бургер-кнопки
    });

    // Закрываем меню при клике на элемент навигации
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burgerButton.classList.remove('active');
        });
    });

    // Структура данных для услуг
    const servicesData = {
        strikeball: [
            { imgSrc: "img/photoarmor.png", title: "Страйкбольный комплект", price: "2500₽", description: "Стандартный комплект (2500 Р): в комплект входит: Маскхалат, перчатки, маска полнолицевая, привод, шары. <br> Максимальный пакет (от 3000-5000 Р): Станьте суперсолдатом! Максимум защиты! Максимум огневой мощи!" },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽", description: "Аренда защитного жилета на выбор (оливковый / черный раскрас)." },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽", description: "Доп. магазин (G36, AK) - бункер/механический." },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽", description: "Аренда защитного комплекта - наколенники и налокотники." },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽", description: "Аренда защитных перчаток. В наличии размеры (M/L/XL)." },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽", description: "Аренда шлема (олива / черный)." },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽", description: "Аренда активных наушников - помогают лучше слышать противника и реагировать на опасность." },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽", description: "Аренда очков (линза прозрачная/жёлтая)." },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽", description: "Аренда полулицевой маски для защиты нижней части лица." },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽", description: "Аренда фонаря - для игры в темное время суток." },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽", description: "Аренда Нож/мачете/томагавк тренировочный на выбор" },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽", description: "Подарите то, чего действительно хочется, и что есть у нас - на Рубеже! <br>В стоимость входит наша забота, фирменный комфорт и чувство настоящего боя! <br>Распространяется на все услуги и товары нашего полигона. <br> Сумма сертификата обговаривается лично!" }
        ],
        hydroball: [
            { imgSrc: "img/photoarmor.png", title: "Комплект для гидробола", price: "2500₽", description: "Полный комплект для игры в гидробол и привод P90" },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽", description: "Аренда игрового бронижелета" },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽", description: "Аренда доп.магазина на привод P90" },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽", description: "Аренда защитного комплекта - наколенники и налокотники." },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽", description: "Аренда перчаток для игры в гидробол. В наличии размеры (M/L/XL)." },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽", description: "Аренда шлема  для игры в гидробол (олива / черный)." },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽", description: "Аренда наушников для защиты." },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽", description: "Аренда очков (линза прозрачная/жёлтая)." },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽", description: "Аренда полулицевой маски для защиты нижней части лица." },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽", description: "Аренда фонаря - для игры в темное время суток." },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽", description: "Аренда Нож/мачете/томагавк тренировочный на выбор" },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽", description: "Подарите то, чего действительно хочется, и что есть у нас - на Рубеже! <br>В стоимость входит наша забота, фирменный комфорт и чувство настоящего боя! <br>Распространяется на все услуги и товары нашего полигона. <br> Сумма сертификата обговаривается лично!" }
        ]
    };
    const buttons = document.querySelectorAll(".services__button");
    const grid = document.querySelector(".services__grid");

    // Создаем карточки
    function createCard(service) {
        const card = document.createElement("div");
        card.classList.add("services__card");
        card.innerHTML = `
            <img src="${service.imgSrc}" alt="${service.title}">
            <div class="services__title">${service.title}</div>
            <div class="services__price">${service.price}</div>
            <a href="#" class="services__details-btn" data-title="${service.title}" data-description="${service.description}">Подробнее</a>
        `;
        return card;
    }

    // Отображаем карточки
    function renderCards(category) {
        grid.innerHTML = "";
        const fragment = document.createDocumentFragment();

        servicesData[category].forEach(service => {
            const card = createCard(service);
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);
    }

    // Открываем модальное окно
    function openModal(title, description) {
        const modal = document.getElementById("service-modal");
        const modalTitle = modal.querySelector(".modal__title");
        const modalDescription = modal.querySelector(".modal__description");

        modalTitle.textContent = title;
        modalDescription.innerHTML = description;  // Используем innerHTML для обработки тега <br>
        modal.style.display = "flex";
    }

    // Закрываем модальное окно
    function closeModal() {
        const modal = document.getElementById("service-modal");
        modal.style.display = "none";
    }

    // Добавляем события для кнопок "Подробнее"
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("services__details-btn")) {
            const title = e.target.getAttribute("data-title");
            const description = e.target.getAttribute("data-description");
            openModal(title, description);
        }
    });

    // Закрытие модального окна по крестику
    document.getElementById("modal-close").addEventListener("click", closeModal);

    // Закрытие модального окна при нажатии на Esc
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("service-modal");
        // Проверка, был ли клик именно по фону модального окна, а не по его содержимому
        if (e.target === modal) {
            closeModal();
        }
    });

    // Устанавливаем начальное отображение
    renderCards('strikeball');

    // Обработчики переключения категорий
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            renderCards(category);
        });
    });
});


const buttons = document.querySelectorAll('.services__button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем класс active со всех кнопок сразу
        buttons.forEach(btn => btn.classList.remove('active'));

        // Добавляем класс active сразу
        button.classList.add('active');

        // Плавный рендеринг
        requestAnimationFrame(() => {
            const category = button.getAttribute('data-category');
            renderCards(category);  // Рендерим карточки асинхронно
        });
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Начало области видимости
            inline: 'nearest' // Как только возможно
        });
    });
});