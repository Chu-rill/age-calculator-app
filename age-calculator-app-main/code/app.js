let daysInput = document.querySelector(".days-input");
let monthInput = document.querySelector(".month-input");
let yearInput = document.querySelector(".year-input");
let daysOutput = document.querySelector(".days-output");
let monthOutput = document.querySelector(".month-output");
let yearOutput = document.querySelector(".year-output");
let button = document.querySelector(".svg");
let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");
let errors = document.querySelectorAll(".error");
let headerDay = document.querySelector(".header-day");
let headerMonth = document.querySelector(".header-month");
let headerYear = document.querySelector(".header-year");

button.addEventListener("click", () => {
  const day = parseInt(daysInput.value);
  const month = parseInt(monthInput.value) - 1; // JavaScript months are 0-based
  const year = parseInt(yearInput.value);

  if (daysInput.value > 31 && monthInput.value > 12 && yearInput.value > 2023) {
    errorDay.innerText = "Most be a valid day";
    errorMonth.innerText = "Most be a valid month";
    errorYear.innerText = "Most be in the past";
    errorDay.style.display = "block";
    errorMonth.style.display = "block";
    errorYear.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (daysInput.value > 31) {
    errorDay.innerText = "Most be a valid day";
    errorDay.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (monthInput.value > 12) {
    errorMonth.innerText = "Most be a valid month";
    errorMonth.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (yearInput.value > 2023) {
    errorYear.innerText = "Most be a valid year";
    errorYear.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (
    daysInput.value === "" ||
    monthInput.value === "" ||
    yearInput.value === ""
  ) {
    errorDay.innerText = "This field is required";
    errorMonth.innerText = "This field is required";
    errorYear.innerText = "This field is required";
    errorDay.style.display = "block";
    errorMonth.style.display = "block";
    errorYear.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (daysInput.value > 31) {
    errorDay.innerText = "Most be a valid input";
    errorDay.style.display = "block";
    headerDay.style.color = "red";
    headerMonth.style.color = "red";
    headerYear.style.color = "red";
    daysInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    yearInput.style.borderColor = "red";

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  } else if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
    const inputDate = new Date(year, month, day);
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    let timeDifference = currentDate - inputDate;

    // Convert the time difference to years, months, and days
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44;
    const millisecondsInYear = millisecondsInDay * 365.25;

    const years = Math.floor(timeDifference / millisecondsInYear);
    timeDifference %= millisecondsInYear;

    const months = Math.floor(timeDifference / millisecondsInMonth);
    timeDifference %= millisecondsInMonth;

    const days = Math.floor(timeDifference / millisecondsInDay);

    daysOutput.innerText = days;
    monthOutput.innerText = months;
    yearOutput.innerText = years;

    daysInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  }
});
