# Задание к лабораторной работе 4
Цель лабораторной работы: изучение современного CSS, обработки событий на JavaScript и асинхронности.
Задание на программирование: модернизировать web-сайт из лабораторной работы №2 с использованием технологий HTML, CSS и JavaScript, и загрузить проект в репозиторий.

Требования к web-сайту:
1.  Вёрстка с помощью Flexbox – 1 страница.
2.  Вёрстка с помощью Grid – 1 страница.
3.  Реализация анимации (красивой!) с помощью CSS – 1шт.
4.  Реализация формы с отправкой POST-запроса на сервер по нажатию кнопки (без обработки на серверной стороне).
5.  Проверка введённых данных с использованием событийной модели JavaScript.
6.  Реализация асинхронного запроса на сервер для получения данных (например, для заполнения одной из таблиц) с обязательной обработкой возможных ошибок.

Порядок выполнения работы:
0.  Выполнить слияние предыдущих лабораторных в master-ветку (через pull-request).
1.  Создать отдельную ветку lab4 в репозиторий для лабораторных работ.
2.  Дополнить файл Readme.md описанием лабораторной №4.
3.  Создать папку lab4.
4.  Реализовать web-сайт в соответствии с заданием.
5.  Выполнить слияние в master-ветку.

Особенности работы с СSS, JavaScript и асинхронными событиями, а также теоретическую часть смотреть в презентациях к лекциям: «5. Modern CSS», «6. OOP in JS», «7. DOM/BOM», «8. Async».
В качестве реализации серверной части использовать https://github.com/ajoelp/mock-json-server (JSON-файл с данными разместить в папке lab4).

### Запускал сервер с помощью команды:
npx mock-json-server lab4/data.json --port=8000
