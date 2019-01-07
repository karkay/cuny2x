function checkPass(){
	const pass = document.getElementById('pwd').value;
	if(pass == 12345678){
		document.getElementById('login-status').innerHTML = "access granted."
	}else{
		alert("invalid credentials; try again :(");
		document.getElementById('login-status').innerHTML = "login"
	}
}