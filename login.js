function validar(){
	var email=document.getElementByld("email");
	var senha=document.getElementByld("senha");

	if (email.value == "") {
		alert("E-mail não informado");
		email.focus();
		return;
	}

if(senha.value ==""){
	alert("Senha não informada");
	senha.focus();
	return;
}
alert("SEJA BEM VINDO NOVAMENTE!!!");
}