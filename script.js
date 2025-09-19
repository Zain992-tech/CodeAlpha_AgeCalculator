function calculateAge(){
const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const errorElement = document.getElementById("error");
const resultElement = document.getElementById("result");

resultElement.textContent = "";
errorElement.textContent = "";

const today = new Date();
const dateOfBirth = new Date(year, month-1, day);

// Input Validation
if(isNaN(day) || isNaN(month) || isNaN(year)){
    errorElement.textContent = "Enter Valid Date of Birth";
    return;
}

if(dateOfBirth > today){
    errorElement.textContent = "Date of Birth cannot be in future! :)";
    return;
}

if (day < 1 || day > 31) {
  errorElement.textContent = "Day must be between 1 and 31.";
  return;
}

if (month < 1 || month > 12) {
  errorElement.textContent = "Month must be between 1 and 12.";
  return;
}

// Calculation
let years = today.getFullYear() - dateOfBirth.getFullYear();
let months = today.getMonth() - dateOfBirth.getMonth();
let days = today.getDate() - dateOfBirth.getDate();

// Days Error
if(days < 0){
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
}

// Months Error
if(months < 0){
    years--;
    months += 12;
}

// Result
resultElement.textContent = `You are ${years} years, ${months} months, and ${days} days Old`
}

// Reset Button
function clearForm() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("error").textContent = "";
  document.getElementById("result").textContent = "";
}
