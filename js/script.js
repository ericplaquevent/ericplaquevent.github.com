(function() {
  var getAgeFromBirthDate = function getAgeFromBirthDate(birthdate) {
    return Math.floor(((new Date() - new Date(birthdate)) / 1000 / (60 * 60 * 24)) / 365.25);
  };

  var age = getAgeFromBirthDate('1988-02-02');
  document.getElementById("age").innerHTML = age;
})();
