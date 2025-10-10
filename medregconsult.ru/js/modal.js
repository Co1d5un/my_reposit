function openModal() {
    const modal = document.getElementById('modal');
    const content = modal.querySelector('.modal-content');

    // Показываем overlay
    modal.style.display = 'block';

    // Запускаем анимации после отображения элемента
    setTimeout(() => {
        modal.classList.add('active');
        content.classList.add('active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    const content = modal.querySelector('.modal-content');

    // Убираем классы для анимации закрытия
    modal.classList.remove('active');
    content.classList.remove('active');

    // Скрываем overlay после завершения анимации
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Должно совпадать с временем transition
}

// Закрытие при клике вне окна
document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});