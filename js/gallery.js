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

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.gallery-slider');

    sliders.forEach(function(slider) {
        slider.setAttribute('data-pos', 1);
        const slides = slider.querySelectorAll('.gallery-slider-slide');
        const num = slides.length;
        const dots = slider.querySelector('.gallery-slider-dots');

        const indicator = document.createElement('span');
        indicator.classList.add('gallery-slider-indicator');
        dots.prepend(indicator);

        for (let i = 1; i <= num; i++) {
            const dot = document.createElement('span');
            dot.classList.add('gallery-slider-dot');
            dot.setAttribute('data-pos', i);
            dot.style.width = `${100 / num}%`;
            dots.appendChild(dot);
        }

        const slidesContainer = slider.querySelector('.gallery-slider-slides');
        slidesContainer.style.width = `${100 * num}%`;
        slides.forEach(slide => {
            slide.style.width = `${100 / num}%`;
        });

        const sliderDots = slider.querySelectorAll('.gallery-slider-dot');
        sliderDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const currentPos = slider.getAttribute('data-pos');
                const newPos = this.getAttribute('data-pos');
                resetAutoSlide();
                updateSliderPosition(slider, slidesContainer, indicator, num, currentPos, newPos);
            });
        });

        indicator.style.left = '0';
        indicator.style.right = `${100 - (100 / num)}%`;

        // Переменные для слежения за касанием и перетаскиванием
        let startX = 0;
        let isDragging = false;
        let isSwiping = false;
        const swipeThreshold = 50; // минимальное расстояние для срабатывания свайпа

        // Обработчики для сенсорного экрана
        slidesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            isSwiping = false;
        });

        slidesContainer.addEventListener('touchmove', (e) => {
            if (!isDragging || isSwiping) return;
            const touchX = e.touches[0].clientX;
            if (Math.abs(touchX - startX) > swipeThreshold) {
                handleSwipe(slider, slidesContainer, indicator, num, startX, touchX);
                isSwiping = true;
                resetAutoSlide();
            }
        });

        slidesContainer.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Обработчики для мыши
        slidesContainer.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            isSwiping = false;
            slidesContainer.style.cursor = 'grabbing';
        });

        slidesContainer.addEventListener('mousemove', (e) => {
            if (!isDragging || isSwiping) return;
            const currentX = e.clientX;
            if (Math.abs(currentX - startX) > swipeThreshold) {
                handleSwipe(slider, slidesContainer, indicator, num, startX, currentX);
                isSwiping = true;
                resetAutoSlide();
            }
        });

        slidesContainer.addEventListener('mouseup', () => {
            isDragging = false;
            slidesContainer.style.cursor = 'grab';
        });

        slidesContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            slidesContainer.style.cursor = 'grab';
        });

        // Функция для автоматического перелистывания
        let autoSlideInterval = setInterval(() => autoSlide(slider, slidesContainer, indicator, num), 5000);

        function autoSlide(slider, slidesContainer, indicator, num) {
            const currentPos = parseInt(slider.getAttribute('data-pos'));
            const newPos = currentPos < num ? currentPos + 1 : 1;
            updateSliderPosition(slider, slidesContainer, indicator, num, currentPos, newPos);
        }

        // Функция для сброса автоматического перелистывания
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => autoSlide(slider, slidesContainer, indicator, num), 5000);
        }
    });

    function handleSwipe(slider, slidesContainer, indicator, num, startX, currentX) {
        const diffX = currentX - startX;
        const currentPos = parseInt(slider.getAttribute('data-pos'));
        let newPos;

        if (diffX > 0) { 
            newPos = Math.max(1, currentPos - 1);
        } else {
            newPos = Math.min(num, currentPos + 1);
        }

        updateSliderPosition(slider, slidesContainer, indicator, num, currentPos, newPos);
    }

    function updateSliderPosition(slider, slidesContainer, indicator, num, currentPos, newPos) {
        const newDirection = newPos > currentPos ? 'right' : 'left';
        const currentDirection = newPos < currentPos ? 'right' : 'left';

        indicator.classList.remove(`gallery-slider-indicator-${currentDirection}`);
        indicator.classList.add(`gallery-slider-indicator-${newDirection}`);

        slider.setAttribute('data-pos', newPos);
        slidesContainer.style.transform = `translateX(-${(100 / num) * (newPos - 1)}%)`;
        indicator.style.left = `${(100 / num) * (newPos - 1)}%`;
        indicator.style.right = `${100 - (100 / num) - (100 / num) * (newPos - 1)}%`;
    }
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

