function displayName(){
  var inputName = document.getElementById('yourname').value;
  document.getElementById('showName').innerHTML = alert("Congratulation \""+ inputName + "\" You are subcribed to our Website.");
}

function addToCart(){
  var chbox = document.getElementsByClassName('chitem');
  var str = '';

  for (i = 0; i < 12; i++) {
    if (chbox[i].checked === true) {
      str += chbox[i].value + "\n";
    }
}
    alert('Following items are added to the cart:\n' + str);
}
