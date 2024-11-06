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
            { imgSrc: "img/photoarmor.png", title: "Страйкбольный комплект", price: "2500₽", description: "Стандартный комплект (2000 Р): в комплект входит: Маскхалат, перчатки, маска полнолицевая, привод, шары. <br> Максимальный пакет (от 2000 Р): Станьте суперсолдатом! Максимум защиты! Максимум огневой мощи!" },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽", description: "Аренда качественного бронежилета для игры." },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽", description: "Дополнительный магазин для оружия G36 и АК." },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽", description: "Средства защиты для коленей и локтей." },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽", description: "Перчатки для защиты рук." },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽", description: "Аренда защитного шлема." },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽", description: "Аренда активных наушников для прослушивания тактических команд." },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽", description: "Очки для защиты глаз." },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽", description: "Полулицевая маска для защиты лица." },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽", description: "Фонарь для использования в темное время суток." },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽", description: "Аренда ножей для тренировок." },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽", description: "Подарочный сертификат на услуги." }
        ],
        hydroball: [
            { imgSrc: "img/photoarmor.png", title: "Комплект для гидробола", price: "2500₽", description: "Полный комплект для игры в гидробол." },
            { imgSrc: "img/armor.png", title: "Аренда бронежилета", price: "200₽", description: "Аренда бронежилета для игры." },
            { imgSrc: "img/ammunition.png", title: "Доп. магазин (G36/AK)", price: "100₽", description: "Дополнительный магазин для оружия." },
            { imgSrc: "img/support.png", title: "Защита коленей/локтей", price: "100₽", description: "Средства защиты для коленей и локтей." },
            { imgSrc: "img/hands.png", title: "Перчатки", price: "100₽", description: "Перчатки для защиты рук." },
            { imgSrc: "img/helmet.png", title: "Аренда шлема", price: "100₽", description: "Аренда защитного шлема." },
            { imgSrc: "img/headphones.png", title: "Аренда активных наушников", price: "100₽", description: "Аренда активных наушников." },
            { imgSrc: "img/glasses.png", title: "Аренда очков", price: "100₽", description: "Очки для защиты глаз." },
            { imgSrc: "img/mask.png", title: "Аренда полулицевой маски", price: "100₽", description: "Маска для защиты лица." },
            { imgSrc: "img/flashlight.png", title: "Аренда фонаря", price: "100₽", description: "Фонарь для использования в темное время суток." },
            { imgSrc: "img/melee.png", title: "Аренда ножей", price: "100₽", description: "Аренда ножей для тренировок." },
            { imgSrc: "img/sertifPodarok.jpeg", title: "Подарочный сертификат", price: "1₽", description: "Подарочный сертификат на услуги." }
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
        if (e.target === modal) {
            closeModal();
        }
    });

    // Отображаем карточки для страйкбола по умолчанию
    renderCards("strikeball");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderCards(button.getAttribute("data-category"));
        });
    });
});
