/**
*     =============== #1 =================
* нужно написать модуль в файле module.js
* из модуля будет доступен конструктор CreateTrafficLightButton
* конструктор принимает название id кнопки (строка), цвет с которого начинать
* при вызове метода init у наследника - создает кнопку и вставляет ее в div#root
* при клике на кнопку в консоль должен выводится цвет с которого начинать или если цвет не передали или передали не из допустимых, 
* то первый по порядку
* и количество кликов на кнопку (сколько раз нажали)
* при последующих нажатиях цвет меняет по порядку
* 
* метой reset сбрасывает цвет до первого по порядку и обнуляет счетчик нажатий
* метод destroy удаляет кнопку из div#root
* 
* 
* 
* ПРИМЕР:
* let button1 = new CreateTrafficLightButton('button1', 'yellow')
* button1.init() ---> появилась кнопка ---> нажала на кнопку и увидела в консоли "yellow, 1"
* нажала на кнопку еще раз и ---> "green, 2"
* нажала на кнопку еще раз и ---> "red, 3"
* button1.reset()
* нажала на кнопку еще раз и ---> "red, 1"
* нажала на кнопку еще раз и ---> "yellow, 2"
* нажала на кнопку еще раз и ---> "green, 3"
* нажала на кнопку еще раз и ---> "red, 4"
* button1.destroy() ---> кнопки нет 
*
*
*
* let button2 = new CreateTrafficLightButton('button1')
* button2.init() ---> появилась кнопка ---> нажала на кнопку и увидела в консоли "red, 1"
* нажала на кнопку еще раз и ---> "yellow, 2"
* нажала на кнопку еще раз и ---> "green, 3"
* button2.reset()
* нажала на кнопку еще раз и ---> "red, 1"
* нажала на кнопку еще раз и ---> "yellow, 2"
* нажала на кнопку еще раз и ---> "green, 3"
* нажала на кнопку еще раз и ---> "red, 4"
* button2.destroy() ---> кнопки нет 
*
* массив цветов по порядку ['red', 'yellow', 'green']
*
* ========================= #2 =======================
* из модуля доступна функция которая принимает число и проходится циклом for (var i = 0; i < число; i++)
* при каждой итерации цилка setTimeout(() => console.log(i), 1000) 
* нужно чтобы в консоли вывелось 0, 1 и до указаного числа
* подсказка --- замыкание
*/

let button1 = new module.CreateTrafficLightButton('button1', 'yellow')
button1.init()
let button2 = new module.CreateTrafficLightButton('button2')
button2.init()

module.timeOutCircle(5)