
var romanNumeral = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
var results= [];

function splitUp(num) {
  var array = [0, 0, 0, 0, 0, 0, 0];

  for (i = 0; num > 0; i++) {
    if (num >= 1000) {
      array[6] += 1;
      num -= 1000;
    }
    else if (num >= 500) {
      array[5] += 1;
      num -= 500;
    }
    else if (num >= 100) {
      array[4] += 1;
      num -= 100;
    }
    else if (num >= 50) {
      array[3] += 1;
      num -= 50;
    }
    else if (num >= 10) {
      array[2] += 1;
      num -= 10;
    }
    else if (num >= 5) {
      array[1] += 1;
      num -= 5;
    }
    else if (num > 0) {
      array[0] += 1;
      num -= 1;
    }
  }

  // function divide(array2) {
  for (i = 0; i < array.length; i++) {
    if (array[6] > 0) {
      results.push("M");
      array[6]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[5] > 0) {
      results.push("D");
      array[5]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[4] > 0) {
      results.push("C");
      array[4]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[3] > 0) {
      results.push("L");
      array[3]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[2] > 0) {
      results.push("X");
      array[2]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[1] > 0) {
      results.push("V");
      array[1]--;
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[0] > 0) {
      results.push("I");
      array[0]--;
    }
  }
  console.log(results.join(''));
  // }
}


$(function() {
  $('form').submit(function() {

    event.preventDefault();
    var userNumber = parseInt($("#inputNumber").val());
    var userSplit = splitUp(userNumber);
    $(".output").text(results.join(''));

  });
});
