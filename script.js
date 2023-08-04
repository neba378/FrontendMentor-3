var yearInput = document.getElementById("year");
var monthInput = document.getElementById("month");
var dayInput = document.getElementById("day");
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function () {
  var year = yearInput.value;
  var month = monthInput.value;
  var day = dayInput.value;

  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth() + 1;
  var currentDay = new Date().getDay() - 1;
  if (
    year > currentYear ||
    month > 12 ||
    month < 1 ||
    day < 1 ||
    day > 30 ||
    year < 1
  ) {
    alert("The year/month/day is not correct!!");
  } else {
    var yourYear = currentYear - year;
    var yourMonth = currentMonth - month;
    var yourDay = currentDay - day;
    if (currentMonth < month) {
      yourYear = currentYear - year - 1;
      yourMonth = 12 - month + currentMonth;
    }
    if (currentDay < day) {
      yourMonth--;
      yourDay = 30 - day + currentDay;
    }
    var resultYear = document.getElementById("years");
    var resultMonth = document.getElementById("months");
    var resultDay = document.getElementById("days");
    resultDay.innerHTML = yourDay + " ";
    resultMonth.innerHTML = yourMonth + " ";
    resultYear.innerHTML = yourYear + " ";
  }
});
