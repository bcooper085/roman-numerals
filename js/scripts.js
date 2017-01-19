
var romanNumeral = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

function converter(number) {
  if (number === 1) {
    return userNumber = "I";
  } else if (number === 5) {
    return userNumber = "V";
  } else if (number === 10) {
    return userNumber = "X";
  } else if (number === 50) {
    return userNumber = "L";
  } else if (number === 100) {
    return userNumber = "C";
  } else if (number === 500) {
    return userNumber = "D";
  } else if (number === 1000) {
    return userNumber = "M";
  } else {
    console.log('error');
  }
}



$(function() {
  $('form').submit(function() {

    event.preventDefault();
    var userNumber = parseInt($("#inputNumber").val());
    var userConvert = converter(userNumber);
    $(".output").text(userConvert);

  });
});
