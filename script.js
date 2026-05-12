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
        // можно просто:
        // sum += this[i];
    }
    // более надежный вариант через reduce
    var total = this.reduce(function(a, b) { return a + b; }, 0);
    return total / this.length;
};

function demoPrototypeExtension() {
    console.log("--- Часть 3: Расширение Array ---");
    var ratings = [5, 4, 5, 3, 5];
    console.log("Массив оценок: " + ratings);
    console.log("Средняя оценка: " + ratings.average());
}

//  для запуска 
function runLab8() {
    demoObjects();
    demoConstructor();
    demoPrototypeExtension();
    alert("Проверки ЛР8 выполнены. Результаты в консоли (F12)!");
}



/**
 * ЛАБОРАТОРНАЯ РАБОТА №9: Динамическое изменение DOM
 */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Выборка элементов (разными способами по заданию)
    var addButton = document.getElementById("add-task-btn"); // По ID
    var taskInput = document.querySelector("#task-input");   // По селектору
    var taskList = document.querySelector(".list-group");    // По классу

    // 2. Функция добавления нового элемента
    function addNewTask() {
        var text = taskInput.value.trim();
        
        if (text === "") {
            alert("Введите название!");
            return;
        }

        // Создаем новый элемент списка <li>
        var li = document.createElement("li");
        li.className = "list-group-item bg-black text-white border-secondary d-flex justify-content-between align-items-center";
        
        // Создаем текстовый узел для безопасного добавления текста
        var textNode = document.createTextNode(text);
        li.appendChild(textNode);

        // Создаем кнопку удаления
        var removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Удалить";
        removeBtn.className = "btn btn-sm btn-danger";
        
        // Регистрация события удаления через addEventListener
        removeBtn.addEventListener("click", function() {
            // Демонстрация удаления узла
            li.remove(); 
            console.log("Узел удален: " + text);
        });

        // Добавляем кнопку в li, а li в список
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Очищаем поле ввода
        taskInput.value = "";
        console.log("Добавлен новый узел: " + text);
    }

    // 3. Регистрация события клика на основную кнопку
    if (addButton) {
        addButton.addEventListener("click", addNewTask);
    }

    // Дополнительно: добавление по нажатию Enter
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addNewTask();
        }
    });

    // Работа с уже существующими кнопками (делегирование или прямой обход)
    var initialRemoveBtns = document.querySelectorAll(".btn-remove");
    initialRemoveBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            this.closest("li").remove();
        });
    });
});

// ЛАБОРАТОРНАЯ РАБОТА №10: ФОРМЫ

document.addEventListener("DOMContentLoaded", function() {
    // Получаем доступ к форме по имени и элементам по ID
    var form = document.forms.orderForm;
    var submitBtn = document.getElementById('submit-btn');
    var timeContainer = document.getElementById('timePickerContainer');
    var deliveryScheduled = document.getElementById('deliveryScheduled');
    var labelScheduled = document.getElementById('labelScheduled');

    if (!form) return;

    // 1. Логика переключателя "Это подарок" (зависимости элементов)
    form.isGift.addEventListener('change', function() {
        var isGift = this.checked;
        
        // Блокировка/разблокировка поля сообщения
        form.giftMessage.disabled = !isGift;
        if (!isGift) form.giftMessage.value = "";

        // Управление доступом к режиму "Ко времени"
        deliveryScheduled.disabled = !isGift;
        
        if (isGift) {
            labelScheduled.classList.remove('text-secondary');
            labelScheduled.classList.add('text-danger');
        } else {
            labelScheduled.classList.add('text-secondary');
            labelScheduled.classList.remove('text-danger');
            // Если не подарок - принудительно возвращаем режим "Мгновенно"
            form.delivery.value = "instant";
            timeContainer.style.display = 'none';
        }
        validateForm();
    });

    // 2. Показ выбора времени при переключении радиокнопок
    form.addEventListener('change', function(e) {
        if (e.target.name === 'delivery') {
            timeContainer.style.display = (e.target.value === 'scheduled') ? 'block' : 'none';
        }
        validateForm();
    });

    // 3. Валидация формы в реальном времени
    function validateForm() {
        var nameValid = form.userName.value.length >= 2;
        var emailValid = form.userEmail.value.includes('@');
        var gameSelected = form.hardware.value !== "";
        
        // Проверка времени, если выбран запланированный подарок
        var timeValid = true;
        if (form.delivery.value === 'scheduled' && form.isGift.checked) {
            timeValid = form.sendTime.value !== "";
        }

        var isValid = nameValid && emailValid && gameSelected && timeValid;

        // Изменение стиля и текста кнопки в зависимости от готовности формы
        if (isValid) {
            submitBtn.textContent = "ПОДТВЕРДИТЬ ТРАНЗАКЦИЮ";
            submitBtn.classList.replace('btn-invalid', 'btn-valid');
            submitBtn.disabled = false;
        } else {
            submitBtn.textContent = "ОЖИДАНИЕ ДАННЫХ...";
            submitBtn.classList.replace('btn-valid', 'btn-invalid');
            submitBtn.disabled = true;
        }
    }

    // Слушатели событий для мгновенной валидации
    form.userName.addEventListener('input', validateForm);
    form.userEmail.addEventListener('input', validateForm);
    form.hardware.addEventListener('change', validateForm);
    form.sendTime.addEventListener('change', validateForm);

    // 4. Сбор данных в объект и обработка Submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var orderData = {
            user: form.userName.value,
            game: form.hardware.options[form.hardware.selectedIndex].text,
            isGift: form.isGift.checked,
            delivery: form.delivery.value,
            time: (form.delivery.value === 'scheduled') ? form.sendTime.value : "мгновенно",
            message: form.giftMessage.value,
            timestamp: new Date().toLocaleString()
        };

        console.log("--- ОТЧЕТ ПО ЗАКАЗУ (ПР10) ---");
        console.table(orderData);

        // Финальный вывод пользователю
        if (!orderData.isGift) {
            alert("Транзакция завершена! Игра " + orderData.game + " в библиотеке.");
        } else {
            var msg = orderData.delivery === 'instant' ? "мгновенно" : "в " + orderData.time;
            alert("Подарок оформлен!" + msg);
        }
    });

    // 5. Обработчик события Reset
    form.addEventListener('reset', function(e) {
        if (!confirm("Действительно очистить форму?")) {
            e.preventDefault();
        } else {
            // Используем таймаут, чтобы дождаться очистки полей перед валидацией
            setTimeout(function() {
                timeContainer.style.display = 'none';
                deliveryScheduled.disabled = true;
                validateForm();
            }, 10);
        }
    });
});