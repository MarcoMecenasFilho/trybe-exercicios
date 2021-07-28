// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina);
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu;
// Utilize o console.log() para imprimir as constantes e variáveis que você criou;
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔


let myName = "Marco Antonio de Mecenas Filho";
let birthCity = "São Francisco Xavier";
let birthYear = 1994;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
// Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() 
//para imprimir as variáveis e checar os resultados das operações!
// Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)

let base = 5;
let altura = 8;

let area = base*altura;
console.log(area);

let perimetro = (2*base)+(2*altura);
console.log(perimetro);

// Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
//Altere o valor da nota para verificar se as condições que você implementou funcionam;


let nota =89;

if( nota >= 80){
console.log("Passou HuHUl!!")}

else if (nota >=60 && nota <80){
    console.log("vc esta na lista de espera!!")
}

else {
    console.log("Reprovado!")
}

// candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case 
// que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata 
//for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' 

let situacao = "lista" ;

switch(situacao) {
  case "aprovado":
  console.log("Aprovadado HuHulll");
  break

  case "lista":
    console.log("Vc esta na lista de espera");
    break;
    
  case "reprovado":
    console.log(" Infelizmente vc foi reprovado");
    break;
  
  default:
    console.log(" Deu ruim");
  }



// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 21;
let b = 71;

console.log("soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + (a * b));
console.log("Divisão: " + (a / b));
console.log("Módulo: " + (a % b));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 10;
let b = 22;
 
if(b>a){
  console.log("b é maior que é");
}

else {
  console.log( "a é maior que b") ;
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let a = 10;
let b = 2;
let c = 18;

if (b>c && b>a) {
  console.log("B é p big boss valendo: " + b )
}

else if (c>a && c>b) {
  console.log("C é o big boss valendo: " + c )
}

else {
  console.log("A é o big boss valendo: " + a)
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
let a = -23;
if (a<=0) {
  console.log("Negativo")
}
else {
  console.log("Positivo")
}

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , 
// caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
let a = -60;
let b = 40;
let c = 80;
let angulosValidos = a>0 && b>0 && c>0;
let soma = a + b + c;

if (angulosValidos){
  if (soma===180){
    console.log("True")
  }
  else {
    console.log("false")
  }
}else{
  console.log("Erro,angulo errado!");
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
// quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let posicao = "Rei";
switch(posicao.toLowerCase()){
  case "rei":
    console.log("Rei-> Anda uma casa para qualquer direção.");
  break;

  case "bispo":
    console.log("Bispo-> Anda apenas na diagonal quantas casas desejar.");
  break;

  case "rainha":
    console.log("Anda para todos os lados, quantas casas desejar.");
  break;

  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;

  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;

  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;

  default:
    console.log('Erro, peça inválida!');
    break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
let nota = 72;
if(nota <0 || nota >100){
  console.log("Erro!Nota invalida!!");
 }
else if (nota >=90){
  console.log("A");
}
else if (nota>=80){
  console.log("B");
}
else if(nota >=70){
  console.log("C");
}
else if (nota>=60){
  console.log("D");
}
else if (nota>=50)
  console.log("E");
else{
  console.log("F");
}

// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma 
// das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
let a = 3
let b = 4
let c = 5
let result = false

if(a%2==0 ||b%2==0||c%2==0){
  result = true
}
console.log(result)