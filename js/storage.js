class Cadastro {
    constructor(email, nome, senha, confirmaSenha){
      this.email = email    
      this.nome = nome
      this.senha = senha
      this.confirmaSenha = confirmaSenha 
    }

    validarDados() {
      for(let i in this)
       if(this[i] == undefined || this[i] == '' || this[i] == null) {
        return false;
      } else {
        return true;
      }
      
    }
};

