let firstLi = document.getElementById('firstLi');
let secondLi = document.getElementById('secondLi');
let thirdLi = document.getElementById('thirdLi');
let input = document.getElementById('input');
let myWebpage = document.getElementById('myspotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 
// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech(event){
  let techElement = document.querySelector('.tech');
  techElement.classList.remove('tech'),
  event.target.classList.add('tech');
  input.value='';
} 

firstLi.addEventListener('click',addClassTech);
secondLi.addEventListener('click',addClassTech);
thirdLi.addEventListener('click',addClassTech);



// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event) {
  let techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://blog.betrybe.com/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});
// Segue abaixo um exemplo do uso de event.target:
// // */


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// // Não precisa passar o parâmetro dentro da callback resetText. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'firstLi'.