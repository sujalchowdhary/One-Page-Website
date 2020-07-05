function validateForm()
{
  var x = document.forms["myForm"]["fname"].value;
  if (x == " " || x==null)
  {
    alert("Name must be filled.");
    return false;
  }

  var a = document.form.phone.value;
  if(a=="")
  {
    alert("Please Enter Your Mobile Number");
    document.form.phone.focus();
    return false;
  }
}
