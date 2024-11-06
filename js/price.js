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
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesData = {
        strikeball: [
            { imgSrc: "img/photoarmor.png", title: "Страйкбольный комплект", price: "2500₽" },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽" },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽" },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽" },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽" },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽" },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽" },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽" },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽" },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽" },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽" },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽" }
        ],
        hydroball: [
            { imgSrc: "img/photoarmor.png", title: "Комплект для гидробола", price: "2500₽" },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽" },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽" },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽" },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽" },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽" },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽" },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽" },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽" },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽" },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽" },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽" }
        ]
    };

    const buttons = document.querySelectorAll(".services__button");
    const grid = document.querySelector(".services__grid");

    function createCard(service) {
        const card = document.createElement("div");
        card.classList.add("services__card");
        card.innerHTML = `
          <img src="${service.imgSrc}" alt="${service.title}">
          <div class="services__title">${service.title}</div>
          <div class="services__price">${service.price}</div>
          <a href="#" class="services__details-btn">Подробнее</a>
        `;
        return card;
    }

    function renderCards(category) {
        grid.innerHTML = ""; // Очистка перед добавлением новых карточек
        const fragment = document.createDocumentFragment(); // Создание фрагмента

        servicesData[category].forEach(service => {
            const card = createCard(service);
            fragment.appendChild(card); // Добавляем карточку во фрагмент
        });

        grid.appendChild(fragment); // Добавляем фрагмент в контейнер
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active")); // Снимаем активный класс со всех кнопок
            button.classList.add("active"); // Добавляем активный класс на нажатую кнопку
            renderCards(button.getAttribute("data-category")); // Отображаем карточки для выбранной категории
        });
    });

    renderCards("strikeball"); // Отображение карточек для страйкбола по умолчанию
});
