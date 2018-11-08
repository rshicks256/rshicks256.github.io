// https://stackoverflow.com/questions/8239782/how-to-create-an-email-form-that-can-send-email-using-html

<script language="JavaScript">

var frmvalidator  = new Validator("contactform");

frmvalidator.addValidation("email","email",
  "Please enter a valid email address.");

</script>