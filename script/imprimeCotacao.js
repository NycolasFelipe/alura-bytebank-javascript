const lista = document.querySelector('[data-lista]');

function imprimeCotacao(nome, valor) {
  lista.innerHTML = '';
  for (let i = 1; i <= 1000; i *= 10) {
    const listaItem = document.createElement('li');
    listaItem.innerHTML = `${i} ${nome}: R$${(valor * i).toFixed(2)}`;
    lista.appendChild(listaItem);
  }
}

export default imprimeCotacao;