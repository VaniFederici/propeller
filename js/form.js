function validate() {
  permitidos = /[^0-9.]/;
  permitidosmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  if (document.form.name.value == "") {
    document.form.name.focus();
    document.getElementById("form-error").innerHTML = "You must enter a name.";
    document.getElementById("form-error").style.display = "inline-block";

    return false;
  } else if (document.form.email.value == "") {
    document.form.email.focus();
    document.getElementById("form-error").innerHTML =
      "You must enter a e-mail.";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else if (!document.form.email.value.match(permitidosmail)) {
    document.form.email.focus();
    document.getElementById("form-error").innerHTML =
      "You must enter a valid e-mail.";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else if (document.form.message.value == "") {
    document.form.message.focus();
    document.getElementById("form-error").innerHTML =
      "You must enter a message.";
    document.getElementById("form-error").style.display = "inline-block";
    return false;
  } else {
    document.form.submit();
    return true;
  }
}
