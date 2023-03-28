/** @format */

export const alphaOnly = event => {
  const re = /^[A-Za-z\s]*$/g;
  if (!re.test(event.key)) {
    event.preventDefault();
    // alert("Number Not Allowed");
    // document.getElementById("fullNames").style.display = "block";
    var x = document.getElementsByClassName("fullNames");
    x[0].style.display = "block";
  } else {
    var x = document.getElementsByClassName("fullNames");
    x[0].style.display = "none";
  }
};
export const numericOnly = event => {
  const re = /[0-9A-F:]+/g;
  if (!re.test(event.key)) {
    event.preventDefault();
    // alert("Number Not Allowed");
    document.getElementById("mobilesNumber").style.display = "block";
  } else {
    document.getElementById("mobilesNumber").style.display = "none";
  }
};

export const numericPattern = event => {
  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  };

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  };

  // When the user starts to type something inside the password field
  // Validate lowercase letters
  myInput.onkeydown = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
};

export const numericPatternTwo = event => {
  var myInput = document.getElementById("pswtwo");
  var letter = document.getElementById("lettertwo");
  var capital = document.getElementById("capitaltwo");
  var number = document.getElementById("numbertwo");
  var length = document.getElementById("lengthtwo");
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("messageTwo").style.display = "block";
  };

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("messageTwo").style.display = "none";
  };

  // When the user starts to type something inside the password field
  // Validate lowercase letters
  myInput.onkeydown = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
};

export const numericPatternSign = event => {
  var myInput = document.getElementsByClassName("Signs")[0];
  var letter = document.getElementsByClassName("letterSign")[0];
  var capital = document.getElementsByClassName("capitalSign")[0];
  var number = document.getElementsByClassName("numberSign")[0];
  var length = document.getElementsByClassName("lengthSign")[0];
  // When the user clicks on the password field, show the message box
  // myInput.onfocus = function() {
  //   var x = document.getElementsByClassName("messageSign");
  //   x[0].style.display = "block";
  // };

  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    var x = document.getElementsByClassName("messageSign");
    x[0].style.display = "none";
  };

  // When the user starts to type something inside the password field
  // Validate lowercase letters
  myInput.onkeydown = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  };
};

export const sensorPattern = event => {
  const re = /[ A-Za-z0-9]+/g;
  var lblError = document.getElementById("lblErrorS");
  lblError.innerHTML = "";
  if (!re.test(event.key)) {
    event.preventDefault();
    lblError.innerHTML = "Spacial character Not Allowed";
  } else {
  }
};

export const emailPattern = event => {
  var email = document.getElementById("emails").value;
  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "";
  var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!expr.test(email)) {
    lblError.innerHTML = "Invalid email address.";
  }
};
