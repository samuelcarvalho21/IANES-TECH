
function menuShow(){

    let menuMobile = document.querySelector('.mobile-menu');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}


//começo do cadastro
let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')
let phone = document.getElementById('phone')
let cpf = document.getElementById('cpf')

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    checkInput();
})

function checkInput(){


const usernameValue = username.value;
const emailValue = email.value;
const passwordValue = password.value
const passwordConfirmationValue = passwordConfirmation.value;
const phoneValue = phone.value;
const cpfValue = cpf.value;



    if (usernameValue=="") {

        setErroFor(username,"Este campo é obrigatório");
        
    }
    else{
        setSuccessFor(username);
    }


    if (emailValue=="") {

        setErroFor(email,"Este campo é obrigatório");
        
    }else{
        setSuccessFor(email);
    }

    if (passwordValue=="") {

        setErroFor(password,"Este campo é obrigatório");
        
    }else if (passwordValue.length < 6) {

        setErroFor(password,"campo precisa de pelo menos 6 caracteres ");
        
    }
    else{
        setSuccessFor(password);
    }


    if (passwordConfirmationValue=="") {

        setErroFor(passwordConfirmation,"Este campo é obrigatório");
        
    }else if (passwordConfirmationValue != passwordValue) {

        setErroFor(passwordConfirmation,"As senhas não são iguais ...");
        
    }
    else{
        setSuccessFor(passwordConfirmation);
    }
    if (phoneValue=="") {

        setErroFor(phone,"Este campo é obrigatório");
        
    }else{
        setSuccessFor(phone);
    }
    if (cpfValue=="") {

        setErroFor(cpf,"Este campo é obrigatório");
        
    }else{
        setSuccessFor(cpf);
    }


   
    
}

function setErroFor(input,message){

    const formControl = input.parentElement;

    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = "form-control error"


}

function setSuccessFor(input){

    const formControl = input.parentElement;

    formControl.className = "form-control success";
}


let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess');


let username1 = document.querySelector('#username');
let labelusername1 = document.querySelector('#labelUsername');
let validUsername1 = false;

let email1 = document.querySelector('#email');
let labelEmail1 = document.querySelector('#labelEmail');
let validEmail1 = false;

let password1 = document.querySelector('#password');
let labelPassword1 = document.querySelector('#labelPassword');
let validPassword1 = false;

let passwordConfirmation1 = document.querySelector('#password-confirmation');
let labelPasswordConfirmation1 = document.querySelector('#labelPasswordConfirmation');
let validPasswordConfirmation1 = false;

let phone1 = document.querySelector('#phone');
let labelPhone1 = document.querySelector('#labelPhone');
let validPhone1 = false;




let cpf1 = document.querySelector('#cpf');
let labelCPF1 = document.querySelector('#labelCPF');
let validCPF1 = false;

username1.addEventListener('keyup', () =>
{

    if (username1.value.length <= 2) {
        labelusername1.setAttribute('style', 'color: red');
        labelusername1.innerHTML = ' <strong>Nome * insira no mínimo 3 caracteres</strong>';
        username1.setAttribute('style', 'border-color:red')
        validUsername1 = false;
    }else{

        labelusername1.setAttribute('style', 'color: green');
        labelusername1.innerHTML = '<strong>Nome</strong> ';
        username1.setAttribute('style', 'border-color:green')
        validUsername1 = true;

    }
});

email1.addEventListener('keyup', () =>{

    if (email1.value.length <= 5) {
        labelEmail1.setAttribute('style', 'color: red');
        labelEmail1.innerHTML = ' <strong>Email * insira no mínimo 5 caracteres</strong>';
        email1.setAttribute('style', 'border-color:red');
        validEmail1 = false;
    }else{

        labelEmail1.setAttribute('style', 'color: green');
        labelEmail1.innerHTML = '<strong>Email</strong> ';
        email1.setAttribute('style', 'border-color:green');
        validEmail1 = true;

    }
})

password1.addEventListener('keyup', () =>{

    if (password1.value.length <= 6) {
        labelPassword1.setAttribute('style', 'color: red');
        labelPassword1.innerHTML = ' <strong>Senha * insira no mínimo 6 caracteres</strong>';
        password1.setAttribute('style', 'border-color:red');
        validPassword1 = false;
    }else{

        labelPassword1.setAttribute('style', 'color: green');
        labelPassword1.innerHTML = '<strong>Senha</strong> ';
        password1.setAttribute('style', 'border-color:green');
        validPassword1 = true;

    }
})
passwordConfirmation1.addEventListener('keyup', () =>{

    if (password1.value != passwordConfirmation1.value) {
        labelPasswordConfirmation1.setAttribute('style', 'color: red');
        labelPasswordConfirmation1.innerHTML = ' <strong>Confirmação de senha * as senhas não são iguais</strong>';
        passwordConfirmation1.setAttribute('style', 'border-color:red')
        validPasswordConfirmation1 = false;
    }else{

        labelPasswordConfirmation1.setAttribute('style', 'color: green');
        labelPasswordConfirmation1.innerHTML = '<strong>confirmação de senha</strong> ';
        passwordConfirmation1.setAttribute('style', 'border-color:green')
        validPasswordConfirmation1 = true;
    }
})

cpf1.addEventListener('keyup', () =>{

    if (cpf1.value.length <= 5) {
        labelCPF1.setAttribute('style', 'color: red');
        labelCPF1.innerHTML = ' <strong> CPF * insira no mínimo 5 caracteres</strong>';
        cpf1.setAttribute('style', 'border-color:red')
        validCPF1 = false;
    }else{

        labelCPF1.setAttribute('style', 'color: green');
        labelCPF1.innerHTML = '<strong>CPF</strong> ';
        cpf1.setAttribute('style', 'border-color:green');
        validCPF1 = true;

    }
})

    phone1.addEventListener('keyup', () =>{

        if (phone1.value.length <= 7) {
            labelPhone1.setAttribute('style', 'color: red');
            labelPhone1.innerHTML = ' <strong>Telefone * insira no mínimo 8 caracteres</strong>';
            phone1.setAttribute('style', 'border-color:red')
            validPhone1 = false;
        }else{
    
            labelPhone1.setAttribute('style', 'color: green');
            labelPhone1.innerHTML = '<strong>Telefone</strong> ';
            phone1.setAttribute('style', 'border-color:green');
            validPhone1 = true;
    
        }
    })

    function register(){
        if ( validUsername1 && validEmail1&& validPassword1 && validPasswordConfirmation1&& validPhone1 && validCPF1 )
        {

            let listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

            listUser.push({
                username1: username1.value,
                email1: email1.value,
                password1: password1.value

            })

            localStorage.setItem('listUser', JSON.stringify(listUser))

            msgError.setAttribute('style', 'display:none')
            msgError.innerHTML = ''
            msgSucess.setAttribute('style', 'display:block')
            msgSucess.innerHTML = '<strong>Cadastrado com sucesso</strong>'
            setTimeout(() =>{
                window.location.href = './login.html'
            }, 3000)

            
            
        }else{
            msgSucess.setAttribute('style', 'display:none')
            msgSucess.innerHTML = ''
            msgError.setAttribute('style', 'display:block')
            msgError.innerHTML = '<strong>Você deve preencher todos os campos corretamente</strong>'
        }
    }

    function logIn(){
        let emailLogin =  document.querySelector('#login-email');
        let labelEmailLogin = document.querySelector('#label-login-email');

        let loginPassword = document.querySelector('#login-password');
        let labelLoginPassword = document.querySelector('#label-login-senha');

        let msgErrorLogin = document.querySelector('#msgError-login');

        let listUser = [];

        let userValid = {

            username1: '',
            email1: '',
            password1: ''

        }

        listUser = JSON.parse(localStorage.getItem('listUser'))
        
        listUser.forEach((item) =>{

            if (emailLogin.value == item.email1 && loginPassword.value == item.password1 ) {
                userValid = {

                    username1: item.username1,
                    email1: item.email1,
                    password1: item.password1
        
                }
            }

        })
        if (emailLogin.value == userValid.email1 && emailLogin.value != "" && loginPassword.value == userValid.password1 && loginPassword.value != "") {
            window.location.href = 'logado.html';
            

            
        } else {
            labelEmailLogin.setAttribute('style','color:red');
            emailLogin.setAttribute('style','border-color:red');
            labelLoginPassword.setAttribute('style','color:red');
            loginPassword.setAttribute('style','border-color:red');
            msgErrorLogin.setAttribute('style', 'display:block');
            msgErrorLogin.innerHTML ='Usuário ou senha incorretos';
            emailLogin.focus();
        }

   
    }


 


