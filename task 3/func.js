// Function to convert input temperature to Celsius
function convertTemperature() {
  const tempInput = document.getElementById("tempInput").value;
  const inputType = document.getElementById("inputType").value;
  const result = document.getElementById("result");

  if (tempInput === "") {
    result.innerHTML = "⚠️ Please enter a temperature.";
    return;
  }

  const temp = parseFloat(tempInput);
  let celsius;

  if (inputType === "Kelvin") {
    celsius = temp - 273.15;
  } else if (inputType === "Fahrenheit") {
    celsius = (temp - 32) * (5 / 9);
  } else {
    result.innerHTML = "⚠️ Invalid input type selected.";
    return;
  }

  result.innerHTML = `🌡️ Converted Temperature: <strong>${celsius.toFixed(2)} °C</strong>`;
}

// Function to reset input and output
function resetFields() {
  document.getElementById("tempInput").value = "";
  document.getElementById("inputType").selectedIndex = 0;
  document.getElementById("result").innerHTML = "Result will appear here.";
}
