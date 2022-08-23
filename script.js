'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  timeData: time
};

/*

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется?", "");

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else if (isFinite(b) || a == null || b == null || a == '' || b == '') {
    console.log("Произошла ошибка");
  };
};

// Еще 2 вида циклов

let i = 0;

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else if (isFinite(b) || a == null || b == null || a == '' || b == '') {
        console.log("Произошла ошибка");
  };

    i++;
} while (i < 2);

let i = 0;

while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else if (isFinite(b) || a == null || b == null || a == '' || b == '') {
        console.log("Произошла ошибка");
  };

    i++;
};

*/

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
  
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
    
    appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();