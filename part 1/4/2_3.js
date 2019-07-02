/*
Представьте себе электронный магазин. Цены даны с точностью до копейки(цента, евроцента и т.п.).

Вы пишете интерфейс для него. Основная работа происходит на сервере, но и на клиенте все должно быть хорошо. Сложение цен на купленные товары и умножение их на количество является обычной операцией.

Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$ человек получит общую стоимость 0.30000000000000004$:

 alert( 0.1 + 0.2 + '$' );
Что можно сделать, чтобы избежать проблем с ошибками округления?
*/

console.log('Округлять значения до меньшего значения.');
console.log( (0.1 + 0.2).toFixed(2)+ '$' );
console.log('Либо вести подсчёт, используя меньшие порядки (центы, копейки), масштабируя значение при отображении');

