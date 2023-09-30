const form = document.getElementById('formulario')
let linhas = ''
let rodapes = ''
const nomes = []
const telefones = []


form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  TotalContatos();
})

function adicionaLinha() {

  const NomeCompleto = document.getElementById('nome-usuario')
  const Telefone = document.getElementById('telefone-usuario')

  if (nomes.includes(NomeCompleto.value)) {
    alert(`Nome ${NomeCompleto.value} já existente!`)
  } else if (telefones.includes(Telefone.value)) {
    alert(`Telefone ${Telefone.value} já existente!`)
  } else {
    nomes.push(NomeCompleto.value)
    telefones.push(Telefone.value)
    
    let linha = `<tr>`
    linha += `<td>${NomeCompleto.value}</td>`
    linha += `<td>${Telefone.value}</td>`
    linha += `</tr>`

    linhas += linha

    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas
  }
}

function TotalContatos() {
  let rodape = `<tr>`
  rodape += `<td>Total Contatos</td>`
  rodape += `<td><span class="total">${telefones.length}</span></td>`
  rodape += `</tr>`

  rodapes = rodape

  const RodapeTabela = document.querySelector('tfoot')
  RodapeTabela.innerHTML = rodapes
}
