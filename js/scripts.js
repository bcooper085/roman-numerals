
var romanNumeral = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
var array = [0, 0, 0, 0, 0, 0, 0];
var results= [];

for (i = 0; i < romanNumeral.length ; i++) {
  if (array[0] > 0) {
    return results = romanNumeral[0].repeat(array[0]);
  }
}
else if (n < 4) {
  return userNumber = romanNumeral[0].repeat(n);
array[0]


function splitUp(num) {
  for (i = 0; num > 0; i++) {
    if (num >= 1000) {
      array[6] += 1;
      num -= 1000;
    }
    if (num >= 500) {
        array[5] += 1;
        num -= 500;
    }
    if (num >= 100) {
        array[4] += 1;
        num -= 100;
    }
    if (num >= 50) {
        array[3] += 1;
        num -= 50;
    }
    if (num >= 10) {
      array[2] += 1;
      num -= 10;
    }
    if (num >= 5) {
      array[1] += 1;
      num -= 5;
    }
    if (num > 0) {
      array[0] += 1;
      num -= 1;
    }
  }
  return array;

}
splitUp(3999);

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
  }
}



$(function() {
  $('form').submit(function() {

    event.preventDefault();
    var userNumber = parseInt($("#inputNumber").val());
    var userSplit = splitUp(userNumber);
    // var userConvert = converter(userNumber);
    // $(".output").text(userConvert);

  });
});
