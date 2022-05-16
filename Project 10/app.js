window.onload = () => {
  main();
};

function main() {
  const submitBtn = document.getElementById("submit-btn");
  const resetBtn = document.getElementById("reset-btn");
  const nameInp = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");
  const resultBody = document.getElementById("result-body");

  resultBody.style.display = "none";

  resetBtn.addEventListener("click", function () {
    nameInp.value = "";
    resultBody.style.display = "none";
  });

  submitBtn.addEventListener("click", function () {
    const name = nameInp.value;

    if (!name) {
      alert("Please Enter a Valid Name First");
    } else {
      resultBody.style.display = "block";
      nameOutput.innerText = name;
      nameInp.value = "";
    }
  });
}
