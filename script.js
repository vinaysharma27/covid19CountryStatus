function validateForm() {
    var x = document.forms["Form"]["countryName"].value;
    if (x == "") {
      alert("Field is empty");
      return false;
    }
}
