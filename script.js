/**
 * Лабораторная работа №6: Динамический HTML
 * Выбранные задачи: 2, 10, 28.
 */

// 2. Найти минимальный элемент в последовательности
function findMin(sequence) {
    if (!sequence.length) return "Пусто";
    // Используем встроенный объект Math, как в теории
    return Math.min(...sequence);
}

// 10. Определить среднее арифметическое элементов
function findAverage(sequence) {
    if (!sequence.length) return 0;
    var sum = 0;
    // Используем цикл for, описанный в синтаксисе
    for (var i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    return (sum / sequence.length).toFixed(2);
}

// 28. Проверка знака суммы элементов
function checkSumSign(sequence) {
    var totalSum = sequence.reduce(function(a, b) { return a + b; }, 0);
    
    if (totalSum > 0) return 1;
    if (totalSum < 0) return -1;
    return 0;
}

// Функция для демонстрации работы 
function runLab6() {
    // Входные данные
    var myData = [12, -5, 8, 23, -10, 2]; 

    var minResult = findMin(myData);
    var avgResult = findAverage(myData);
    var signResult = checkSumSign(myData);

    alert(
        "Результаты Лабораторной №6\n" +
        "Последовательность: " + myData.join(", ") + "\n\n" +
        "2. Минимум: " + minResult + "\n" +
        "10. Среднее арифметическое: " + avgResult + "\n" +
        "28. Статус суммы (1/-1/0): " + signResult
    );
}



//  ЛАБОРАТОРНАЯ РАБОТА №7 

// 1. Вывод информации о ссылках, якорях и изображениях
window.onload = function() {
    console.log("--- Информация о странице ---");
    console.log("Количество ссылок (links): " + document.links.length);
    console.log("Количество изображений (images): " + document.images.length);
    console.log("Количество якорей (anchors): " + document.anchors.length);
    
    // Выведем URL всех ссылок для примера
    for (var i = 0; i < document.links.length; i++) {
        console.log("Ссылка #" + (i+1) + ": " + document.links[i].href);
    }
};

// 2. Обработчики событий разных типов
// Способ: addEventListener (Модель Level 2)
document.addEventListener("DOMContentLoaded", function() {
    // Событие наведения на заголовок
    var mainTitle = document.querySelector('h1');
    if (mainTitle) {
        mainTitle.addEventListener("mouseover", function() {
            console.log("Событие: Мышь наведена на главный заголовок");
        });
    }

    // Событие нажатия клавиши
    document.addEventListener("keydown", function(e) {
        console.log("Событие: Нажата клавиша - " + e.key);
    });
});

// 3. Листание картинок (Подмена src)
var imagesArray = [
    "https://media.tenor.com/jJr0cRvWu0UAAAAM/pong-videogame.gif",
    "https://computerhistory.org/wp-content/uploads/2022/11/Atari_Pong_arcade_game_cabinet-749x1024.jpg",
    "https://computerhistory.org/wp-content/uploads/2022/11/christmas-1975-pong.jpg",
    "https://computerhistory.org/wp-content/uploads/2022/11/PONG-Quest-for-Sony-Playstation-4.png"
];
var currentImgIndex = 0;

function nextImage() {
    var imgElement = document.getElementById("dynamic-img");
    if (imgElement) {
        currentImgIndex = (currentImgIndex + 1) % imagesArray.length;
        imgElement.src = imagesArray[currentImgIndex];
        console.log("Событие: Картинка изменена на индекс " + currentImgIndex);
    }
    
}


// --- ЛАБОРАТОРНАЯ РАБОТА №8: ОБЪЕКТЫ ---

// 1. Способы создания объектов и доступа к свойствам
function demoObjects() {
    console.log("--- Часть 1: Создание объектов ---");

    // Способ А: Литерал объекта
    var game1 = {
        title: "Pong",
        year: 1972,
        developer: "Atari"
    };

    // Способ Б: Оператор new Object()
    var game2 = new Object();
    game2.title = "Pac-Man";
    game2["year"] = 1980; // Доступ через скобки (ассоциативный массив)

    // Чтение свойств
    console.log("Игра 1: " + game1.title + " (" + game1.year + ")");
    console.log("Игра 2: " + game2["title"] + " (" + game2["year"] + ")");

    // Запись/изменение
    game1.year = 1973; 
    console.log("Обновленный год для Pong: " + game1.year);
}

// 2. Конструктор собственного объекта
function VideoGame(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;

    // Метод объекта
    this.getInfo = function() {
        return this.title + " — это " + this.genre + " (" + this.year + "г.)";
    };
}

// Добавление метода через прототип (как в теории)
VideoGame.prototype.isRetro = function() {
    return this.year < 2000;
};

function demoConstructor() {
    console.log("--- Часть 2: Конструкторы ---");
    
    var myGame = new VideoGame("Super Mario Bros", 1985, "Платформер");
    var modernGame = new VideoGame("Cyberpunk 2077", 2020, "RPG");

    console.log(myGame.getInfo());
    console.log("Это ретро? " + (myGame.isRetro() ? "Да" : "Нет"));
    console.log(modernGame.getInfo());
    console.log("Это ретро? " + (modernGame.isRetro() ? "Да" : "Нет"));
}

// 3. Расширение встроенного типа
// Добавим массиву метод для поиска среднего арифметического
Array.prototype.average = function() {
    if (this.length === 0) return 0;
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this.length[i] || 0; // На всякий случай проверка на число
        // Но лучше просто:
        // sum += this[i];
    }
    // Используем более надежный вариант через reduce
    var total = this.reduce(function(a, b) { return a + b; }, 0);
    return total / this.length;
};

function demoPrototypeExtension() {
    console.log("--- Часть 3: Расширение Array ---");
    var ratings = [5, 4, 5, 3, 5];
    console.log("Массив оценок: " + ratings);
    console.log("Средняя оценка: " + ratings.average());
}

// Общая функция для запуска всех демонстраций (вызови её кнопкой)
function runLab8() {
    demoObjects();
    demoConstructor();
    demoPrototypeExtension();
    alert("Проверки ЛР8 выполнены. Результаты в консоли (F12)!");
}