var radioValue = "";
console.log(onChangeRadio);
function onChangeRadio(value) {
  if (value != radioValue) {
    radioValue = value;
    if (value == "Hiring") {
      let k = document.getElementById("hourlyRate");
      k.innerHTML =
        "<label for='hourlyRate'>Hourly Rate</label><input type='text' id='hourlyRate' name='hourlyRate' placeholder='Hourly Rate here...' required pattern='[0-9]+'/>";
    } else {
      let k = document.getElementById("hourlyRate");
      k.innerHTML = "";
    }
  }
}
