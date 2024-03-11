<?php

if (isset($_POST['email']) and $_POST['email']!=""){
	
	$nombre=$_POST['name'];
	$email=$_POST['email'];
	$mensaje=$_POST['message'];
	
	//-----------------------------------------------------------
	//ENVIO MAIL 
	//-----------------------------------------------------------
	
	
	$correo=$email;
	
	$destinatario="rafaelaguilo@yahoo.com";
	
	$asunto = "Message from www.propellerinnovation.com"; 
	$cuerpo = 'Message sent from www.propellerinnovation.com:
	
	Name: '.$nombre.'
	Email: '.$email.'
	Message: '.$mensaje.''; 
	
	
	if ( mail($destinatario,$asunto,$cuerpo) ) {
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contact_ok.html";
			</SCRIPT>';
	}else{
		echo '<SCRIPT LANGUAGE="javascript">
			location.href = "contact_error.html";
			</SCRIPT>';
	}

}




?>