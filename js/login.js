

let form = document.getElementById('cpa-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

//checking
function check(){
    var storedName = localStorage.getItem(JSON.parse(localStorage.getItem('email')));
    var storedPw = localStorage.getItem(JSON.parse(localStorage.getItem('Cadastro.senha')));

    var userName = document.getElementById('username');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}