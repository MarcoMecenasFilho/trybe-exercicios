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