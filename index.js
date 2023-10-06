// Функция для показа индикатора загрузки
function showLoader() {
var loaderContainer = document.getElementById("loader-container");
loaderContainer.style.display = "flex";
}

// Функция для скрытия индикатора загрузки
function hideLoader() {
var loaderContainer = document.getElementById("loader-container");
loaderContainer.style.display = "none";
}

// Пример использования функций
showLoader();

// Здесь код загрузки данных

hideLoader();