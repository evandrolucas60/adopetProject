
//criação do indíce dinâmico
class Bd {

  constructor () {
    let id = localStorage.getItem('id');

    if (id === null) {
      localStorage.setItem('id', 0);
    }
  }

  getProximoId () {
    let proximoId = localStorage.getItem('id');
    return parseInt(proximoId) + 1;
  }

  gravar(cadastro){
    let id = this.getProximoId();

    localStorage.setItem(id, JSON.stringify(cadastro));

    localStorage.setItem('id', id)
  }
}

let bd = new Bd()

let form = document.getElementById('cpa-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

let btn = document.getElementById('btnSub');

btn.addEventListener('click', cadastrar);


function cadastrar() {
    let email = document.getElementById('email');
    let nome = document.getElementById('name');
    let senha = document.getElementById('password');
    let confirmaSenha = document.getElementById('repeat');

    let cadastro = new Cadastro(
        email.value,
        nome.value,
        senha.value,
        confirmaSenha.value);

    if (cadastro.validarDados()) {
        bd.gravar(cadastro);
        window.location.reload();
    } else {
        console.log('senha não coincidem');
    }
}





