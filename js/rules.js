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


// Функция для проверки видимости секции
function checkVisibility() {
    const sections = document.querySelectorAll('.rules-section');
    
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        // Проверяем, если секция видна на экране
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Слушаем событие прокрутки
window.addEventListener('scroll', checkVisibility);

// Проверим видимость при загрузке страницы
document.addEventListener('DOMContentLoaded', checkVisibility);
