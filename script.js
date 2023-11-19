function convertTemperature() {
  // Get values from input fields
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');

  // Convert Celsius to Fahrenheit
  var celsiusValue = parseFloat(celsiusInput.value);
  var fahrenheitValue = (celsiusValue * 9 / 5) + 32;

  // Convert Fahrenheit to Celsius
  var fahrenheitInputValue = parseFloat(fahrenheitInput.value);
  var celsiusInputValue = (fahrenheitInputValue - 32) * 5 / 9;

  // Update input fields with converted values
  if (!isNaN(celsiusValue)) {
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  }

  if (!isNaN(fahrenheitInputValue)) {
    celsiusInput.value = celsiusInputValue.toFixed(2);
  }
}
