function adicionarEstados() {
  let estados = document.getElementById('estado');
  let selecionarEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < selecionarEstados.length; index += 1) {
    let criarEstados = document.createElement('option');
    estados.appendChild(criarEstados).innerText = selecionarEstados[index];
    estados.appendChild(criarEstados).value = selecionarEstados[index];
  }
}

adicionarEstados();