const outputNode = document.getElementById("output");
const inputNode = document.getElementById("input");
const buttonNode = document.getElementById("inputButton");
const key = "my-storage-key";

function log(msg) {
  outputNode.textContent += msg + "\n";
}

function getValue() {
  return sessionStorage.getItem(key);
}

function setValue(value) {
  return sessionStorage.setItem(key, value);
}

buttonNode.addEventListener("click", function() {
  const value = inputNode.value.trim();
  setValue(value);
  log('Session value now ' + getValue());
});

log("Script started at " + new Date());

log("Current session value: " + getValue());
