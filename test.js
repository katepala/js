﻿new line
console.log('number' + 3 + 3); // Результат: number33 (type string). Приведе все до рядка, бо 'number' це string

console.log(null + 3); // Результат: 3 (type number) - null це нічого

console.log(5 && "qwerty"); // Результат: qwerty. Обидва операнди true, поверне значення останнього true  

console.log(+'40' + +'2' + "hillel"); // Результат: 42hillel (type strig); + приведе строку 42 до числа, + приведе строку 2 до числа, далі йде операнд + що додає строку hillel і приведе все до строки;

console.log('10' - 5 === 6); // Результат: false; '10' буде приводити до числа і зробить обчислення 10 - 5 = 5. 5 не дорівнює 6

console.log(true + false); // Результат: 1 (type number). Функція number перетворює true на число 1. А false це 0. Отже, 1+0=1

console.log('4px'- 3); // Результат: NaN. JS спробує зробити обчислення, а 4px це не число (NaN).

console.log('4' - 3); // Результат: 1 (type number). JS приведе строку "4" до числа 4 і виконає обчислення: 4 - 3 = 1

console.log('6' + 3 ** 0); // Результат: 61 (type string) . 3 в степени 0 = 1, будет конкатенация и приведение к строке

console.log(12 / '6'); // Результат: 2. Пизводе до числа і виконує ділення

console.log('10' + (5 === 6)); // Результат: 10false. 5 не = 6, це буде false, приведе до строки

console.log(null == ''); // Результат: false. Null строго дорівнює відсутності значення

console.log(3 ** (9 / 3)); // Результат: 27. 3 в 3 степени обчисле і видасть 27

console.log(!!'false' == !!'true'); // Результат: true

console.log(0 || '0' && 1); // Результат: 1. 

console.log((+null == false) < 1); // Результат: false. Null і строге дорівнює буде false, а false < 1 поверне false

console.log(false && true || true); // Результат: true. false і true видасть false (бо оператор і зупиняється на першому false), далі false або true видасть перше true (бо опреатор або видає перше true)

console.log(false && (false || true)); // Результат: false. Перша дія буде в дужках. Видасть перше true (бо опреатор або видає перше true). Далі false і true видасть false (бо оператор і зупиняється на першому false)

console.log((+null == false) < 1 ** 5); // Результат: false
