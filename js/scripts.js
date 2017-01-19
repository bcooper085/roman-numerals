
var romanNumeral = ['I', 'IV', 'V', 'X', 'L', 'C', 'D', 'M']
console.log(romanNumeral[0]);
function numerals(x) {

}


function converter(n) {
  if (n === 1) {
    return userNumber = romanNumeral[0];
  } else if (n < 4) {
    return userNumber = romanNumeral[0].repeat(n);
  } else if (n === 4) {
    return userNumber = romanNumeral[0] + romanNumeral[1];
  } else if (n < 9) {
    return userNumber = romanNumeral[1] + romanNumeral[0].repeat(n - 5);
  } else if (n === 9) {
    return userNumber = romanNumeral[0] + romanNumeral[2];
  } else if (n === 10) {
    return userNumber = romanNumeral[2];
  // } else if (number === 50) {
  //   return userNumber = "L";
  // } else if (number === 100) {
  //   return userNumber = "C";
  // } else if (number === 500) {
  //   return userNumber = "D";
  // } else if (number === 1000) {
  //   return userNumber = "M";
  // } else {
  //   console.log('error');
  // }
}



$(function() {
  $('form').submit(function() {

    event.preventDefault();
    var userNumber = parseInt($("#inputNumber").val());
    var userConvert = converter(userNumber);
    $(".output").text(userConvert);

  });
});
