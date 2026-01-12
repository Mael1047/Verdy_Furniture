// Кнопки меню

// Функция для открытия всплывающего окна
function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "block";
  } else {
    console.error(`Всплывающее окно с ID "${popupId}" не найдено.`);
  }
}

// Функция для закрытия всплывающего окна
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "none";
    } else {
      console.error(`Всплывающее окно с ID "${popupId}" не найдено.`);
    }
}

// Добавляем обработчики событий на кнопки
const buttons = document.querySelectorAll("[data-popup-id]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.dataset.popupId; // Получаем ID из атрибута data-popup-id
    openPopup(popupId); // Вызываем универсальную функцию
  });
});

// Добавляем обработчики событий на кнопки закрытия
const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события (чтобы не сработало закрытие по клику вне окна)
    const popup = button.closest('.popup'); // Находим родительский элемент с классом "popup"
    if(popup){
        closePopup(popup.id);
    }
  });
});

// Закрытие окна при клике вне окна
window.addEventListener("click", (event) => {
  if (event.target.classList.contains('popup')) { //проверяем что кликнули именно по backdrop
    closePopup(event.target.id);
  }
});