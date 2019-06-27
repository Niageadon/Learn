/*
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'IE':

    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':

    break;

  default:

}
*/

function getResult(browser){
  if (browser === "IE"){ alert( 'О, да у вас IE!' );}
  else if ((browser === "Chrome")
    || (browser === "Firefox")
    || (browser === "Safari")
    || (browser === "Opera")){
    alert( 'Да, и эти браузеры мы поддерживаем' );
  } else alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
getResult('Safari');
