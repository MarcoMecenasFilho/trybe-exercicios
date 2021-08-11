// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
  let textH1 = document.createElement('h1');
  textH1.innerText = 'Exercícios 5.2 - JavaScript DOM';
  document.body.appendChild(textH1);
// 2 - Adicione a tag main com a classe main-content como filho da tag body ;
  let mainSection = document.createElement('main');
  mainSection.className= 'main-content';
  document.body.appendChild(mainSection);
// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
  let sectionCenter = document.createElement('section');
  sectionCenter.className = 'center-content'
  mainSection.appendChild(sectionCenter);
// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
  let sectionP =document.createElement('p');
  sectionP.innerText = 'Chocolate meio amargo é bom demais, show show';
  sectionCenter.appendChild(sectionP);
// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
mainSection.appendChild(sectionLeft);
// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
mainSection.appendChild(sectionRight);
// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imagemTop = document.createElement('img');
imagemTop.className = 'small-image';
imagemTop.src = 'https://picsum.photos/200';
sectionLeft.appendChild(imagemTop);
// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listTopUl = document.createElement('ul');
sectionRight.appendChild(listTopUl);
let listNumber = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];
for(i=0; i<listNumber.length;i+=1){
  let listNumberIndex = listNumber[i];
  let listNumberItem = document.createElement('li');
  listNumberItem.innerText = listNumberIndex;
  listTopUl.appendChild(listNumberItem);
}
//9 -  Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1 ){
  let sunsOfmain = document.createElement('h3');
  sunsOfmain.innerHTML = 'show' + index; 
  mainSection.appendChild(sunsOfmain);
}
//10 -  Adicione a classe title na tag h1 criada;
textH1.className = 'title';
//11 -  Adicione a classe description nas 3 tags h3 criadas;
let h3suns = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index +=1){
  h3suns[index].className = 'description';
}
// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let leftContent = document.getElementsByClassName('left-content')[0];
mainSection.removeChild(leftContent);
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
let rigthContent = document.getElementsByClassName('right-content')[0];
rigthContent.style.marginRight = 'auto';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let fatherOfCenterContent = document.getElementsByClassName('center-content')[0].parentNode;
fatherOfCenterContent.style.background = 'green'
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let ulLits = document.getElementsByTagName('ul')[0];
ulLits.removeChild(ulLits.lastChild);
ulLits.removeChild(ulLits.lastChild);


