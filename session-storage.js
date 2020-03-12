const outputNode = document.getElementById("output");
const inputNode = document.getElementById("input");
const buttonNode = document.getElementById("inputButton");
const printNode = document.getElementById("printButton");

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

printNode.addEventListener("click", function() {
    log("Session value is currently " + getValue());
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
