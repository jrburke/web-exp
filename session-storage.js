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
  log("Session value now " + getValue());
});

const dateString = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short"
}).format(new Date());

// Log when we start
log("Script started at " + dateString);

// Show current value
log("Current session value: " + getValue());
