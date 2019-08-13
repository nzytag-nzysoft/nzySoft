'use strict';


//*** changes the: welcome to quiz fellows depending on the time of the day ***
function displayTime() {
  if (localStorage.username) {
    var today =  new Date ();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
      greeting = 'Buenas noches ' + localStorage.username + '! Bienvenido a nzysoft.com';
    } else if (hourNow > 12) {
      greeting = 'Buenas tardes ' + localStorage.username + '! Bienvenido a nzysoft.com';
    } else if (hourNow > 0) {
      greeting = 'Buenos dias ' + localStorage.username + '! Bienvenido a nzysoft.com';
    } else {
      greeting = 'Welcome!';
    }
    document.write('<h1>' + greeting + '</h1>');
  } else {
    var todayNoUser =  new Date ();
    var hourNowNoUser = todayNoUser.getHours();
    var greetingNoUser;

    if (hourNowNoUser > 18) {
      greetingNoUser = 'Buenas noches, bienvenidos a nzysoft.com!';
    } else if (hourNowNoUser > 12) {
      greetingNoUser = 'Buenas tardes, bienvenidos a nzysoft.com!';
    } else if (hourNowNoUser > 0) {
      greetingNoUser = 'Buenos dias, bienvenidos a nzysoft.com';
    } else {
      greetingNoUser = 'Bienvenido!';
    }
    document.write('<h1>' + greetingNoUser + '</h1>');
  }
}
displayTime(); //calls the date function