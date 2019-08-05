/*
Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
*/

let answer = prompt('enter value: ');
if (answer == 0){alert(0)}
  else if(answer > 0){alert(1)}
  else alert(-1);
