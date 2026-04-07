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

// Функция для демонстрации работы (вызывает алерты)
function runLab6() {
    // Входные данные (можно менять для теста)
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