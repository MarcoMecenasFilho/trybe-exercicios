// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name, index, array) => {
  if (name.length === 5) {
    return name;
  }
  console.log(index);
  console.log(array);
  // Adicione seu código aqui:
})

console.log(findNameWithFiveLetters);

// With callBack;

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const callback = (name) => {
  if (name.length === 5) {
    return name;
  }
}

const findNameWithFiveLetters = names.find(callback);  
  // Adicione seu código aqui:

console.log(findNameWithFiveLetters);