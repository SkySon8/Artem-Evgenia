console.log('Happy developing ✨')

(function() {
    // Устанавливаем дату свадьбы: 1 августа 2026 года, 15:00:00 (можно выбрать любое время, пусть будет 15:00 по местному)
    const weddingDate = new Date(2026, 7, 1, 15, 0, 0); // месяц 7 = август (0-индекс)

    // Функция обновления таймера
    function updateCountdown() {
        const now = new Date().getTime();
        const targetTime = weddingDate.getTime();
        const distance = targetTime - now;

        // Если событие уже наступило или прошло
        if (distance < 0) {
            document.getElementById('days').innerText = "00";
            document.getElementById('hours').innerText = "00";
            document.getElementById('minutes').innerText = "00";
            document.getElementById('seconds').innerText = "00";
            // Дополнительно можно показать сообщение
            const countdownDiv = document.querySelector('.countdown-container');
            if (!document.getElementById('event-message')) {
                const msgDiv = document.createElement('div');
                msgDiv.id = 'event-message';
                msgDiv.style.textAlign = 'center';
                msgDiv.style.marginTop = '1rem';
                msgDiv.style.fontSize = '1.3rem';
                msgDiv.style.fontWeight = 'bold';
                msgDiv.style.color = '#b48c48';
                msgDiv.innerHTML = '🎉 Событие уже наступило! Свадебное торжество идёт! 🎉';
                countdownDiv.appendChild(msgDiv);
            }
            return;
        }

        // Расчет дней, часов, минут, секунд
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Форматирование с лидирующими нулями
        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Первый вызов
    updateCountdown();
    // Обновляем каждую секунду
    const interval = setInterval(updateCountdown, 1000);

    // Очистка интервала при выгрузке страницы (необязательно, но хороший тон)
    window.addEventListener('beforeunload', function() {
        if (interval) clearInterval(interval);
    });

    // Дополнительный эффект: мягкое изменение фона таймера в зависимости от приближения события (просто для настроения)
    // Ничего лишнего, но можно добавить динамический акцент на дату.
    // Добавим приветственный консоль-месседж (милый сюрприз для разработчиков)
    console.log('%c✨ Свадебный сайт — 1 августа 2026 года ✨', 'color: #d4b87a; font-size: 14px;');
    console.log('%cСпасибо, что вы с нами! Ждём вас в пастельных тонах.', 'color: #8f9c7b;');
})();
