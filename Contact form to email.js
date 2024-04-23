function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;

	var messageBody = document.getElementById('message').value;;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kandula.tarun99895@gmail.com",
    Password : "53607CD51A190BC577A549FE53B66D817C59",
    To : 'kandula.tarun99895@gmail.com',
    From : email,
    Subject : document.getElementById('subject').value;,
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
