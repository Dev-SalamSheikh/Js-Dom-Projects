window.onload = () => {
  main();
};

// Globals
let result = 0;

// References
function main() {
  const output = document.getElementById("output");
  const IncrementInp = document.getElementById("increment-inp");
  const IncrementBtn = document.getElementById("increment-btn");
  const DecrementInp = document.getElementById("decrement-inp");
  const DecrementBtn = document.getElementById("decrement-btn");

  displayResult(output);

  IncrementBtn.addEventListener("click", function () {
    const increment = parseInt(IncrementInp.value);
    result += increment;
    displayResult(output);
  });
  DecrementBtn.addEventListener("click", function () {
    const decrement = parseInt(DecrementInp.value);
    result -= decrement;
    displayResult(output);
  });

  IncrementInp.addEventListener("keyup", handleInputs);
  DecrementInp.addEventListener("keyup", handleInputs);
}

function displayResult(output) {
  if (result < 0) {
    result = 0;
  }

  let finalResult = result;
  if (result < 10) {
    finalResult = `0${result}`;
  }

  output.innerText = finalResult;
}

function handleInputs(e) {
  if (parseInt(e.target.value) > 100) {
    e.target.value = 100;
  }
  if (parseInt(e.target.value) < 0) {
    e.target.value = 0;
  }
}
