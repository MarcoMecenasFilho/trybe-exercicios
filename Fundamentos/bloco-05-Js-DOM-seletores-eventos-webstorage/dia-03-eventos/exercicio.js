function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
//  Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
//  Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
let getDay = document.querySelector('#days');

for (let i = 0; i < dezDaysList.length; i += 1) {
  let day = dezDaysList[i];
  let daysItem = document.createElement('li');

  if (day === 24| day === 31) {
    daysItem.className = 'day holiday';
    daysItem.innerHTML = day;
    getDay.appendChild(daysItem);
  } else if (day === 4| day === 11| day === 18) {
    daysItem.className = 'day fryday';
    daysItem.innerHTML = day;
    getDay.appendChild(daysItem);
  } else if (day === 25) {
    daysItem.className = 'day  holiday friday';
    daysItem.innerHTML = day;
    getDay.appendChild(daysItem);
  } else {
    daysItem.innerHTML = day;
    daysItem.className = 'day';
    getDay.appendChild(daysItem);
    }
  };
};
createDaysOfTheMonth();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function buttonHoliday(buttonName) {
  let buttonContanier = document.querySelector('.buttons-container');
  let newbutton = document.createElement('button');
  let newButtonID = 'btn-holiday'

  newbutton.innerHTML = buttonName;
  newbutton.id = newButtonID;
  buttonContanier.appendChild(newbutton);
};

buttonHoliday('Feriado');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" 
// que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado 
// novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function colorHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'blue';
 
 
  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else{
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

colorHolidays();