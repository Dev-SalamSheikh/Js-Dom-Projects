window.onload = function () {
  main();
};

const converter = {
  area: {
    name: "Area",
    units: {
      squareKm: "Square Kilometer",
      squareM: "Square Meter",
      squareMile: "Square Mile",
      squareYard: "Square Yard",
      squareFoot: "Square Foot",
    },
    variant: {
      "squareKm:squareM": {
        formula: "multiply the length value by 100000",
        calculation(n) {
          return n * 100000;
        },
      },
      "squareKm:squareMile": {
        formula: "divide the length value by 2.59",
        calculation(n) {
          return n / 2.59;
        },
      },
      "squareKm:squareYard": {
        formula: "multiply the length value by 1196000",
        calculation(n) {
          return n * 1196000;
        },
      },
      "squareKm:squareFoot": {
        formula: "multiply the length value by 10760000",
        calculation(n) {
          return n * 10760000;
        },
      },
      "squareM:squareKm": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "squareM:squareMile": {
        formula: "divide the length value by 2.59e+6",
        calculation(n) {
          return n / new Number("2.59e+6");
        },
      },
      "squareM:squareYard": {
        formula: "multiply the length value by 1.196",
        calculation(n) {
          return n * 1.196;
        },
      },
      "squareM:squareFoot": {
        formula: "multiply the area value by 10.764",
        calculation(n) {
          return n * 10.764;
        },
      },
      "squareMile:squareKm": {
        formula: "multiply the length value by 2.59",
        calculation(n) {
          return n * 2.59;
        },
      },
      "squareMile:squareM": {
        formula: "multiply the length value by 2.596e+6",
        calculation(n) {
          return n * new Number("2.59e+6");
        },
      },
      "squareMile:squareYard": {
        formula: "multiply the length value by 3.098e+6",
        calculation(n) {
          return n * new Number("3.098e+6");
        },
      },
      "squareMile:squareFoot": {
        formula: "multiply the length value by 2.788e+7",
        calculation(n) {
          return n * new Number("2.788e+7");
        },
      },
      "squareYard:squareKm": {
        formula: "divide the length value by 1.196e+6",
        calculation(n) {
          return n / new Number("1.196e+6");
        },
      },
      "squareYard:squareM": {
        formula: "divide the length value by 1.196",
        calculation(n) {
          return n / new Number("1e+6");
        },
      },
      "squareYard:squareMile": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / 1.196;
        },
      },
      "squareYard:squareFoot": {
        formula: "divide the length value by 3.098e+6",
        calculation(n) {
          return n / new Number("3.098e+6");
        },
      },
      "squareFoot:squareKm": {
        formula: " divide the area value by 1.076e+7",
        calculation(n) {
          return n / new Number("1.076e+7");
        },
      },
      "squareFoot:squareM": {
        formula: "divide the length value by 10.764",
        calculation(n) {
          return n / 10.764;
        },
      },
      "squareFoot:squareMile": {
        formula: "divide the length value by 2.788e+7",
        calculation(n) {
          return n / 2.788e7;
        },
      },
      "squareFoot:squareYard": {
        formula: "divide the length value by 9",
        calculation(n) {
          return n / 9;
        },
      },
    },
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      gram: "Gram",
      miligram: "Miligram",
    },
  },
  length: {
    name: "Length",
    units: {
      kilometer: "Kilometer",
      meter: "Meter",
      centimeter: "Centimeter",
      milimeter: "Milimeter",
    },
  },
  time: {
    name: "Time",
    units: {
      second: "Second",
      minutes: "Minutes",
      hour: "Hour",
      day: "Day",
    },
  },
};

let lastLeftSelectedValue = "";
let lastRightSelectedValue = "";

function main() {
  const categorySelect = document.getElementById("category-select");
  const leftSelect = document.getElementById("left-select");
  const rightSelect = document.getElementById("right-select");
  const leftInput = document.getElementById("left-inp");
  const rightInput = document.getElementById("right-inp");
  const formulaText = document.getElementById("formula-text");

  const converterKeys = Object.keys(converter).sort();
  removeChild(categorySelect);

  converterKeys.forEach((item) => {
    addOption(categorySelect, { value: item, text: converter[item].name });
  });

  // Update Default Category Units
  updateCategoryChanges(categorySelect, leftSelect, rightSelect);

  const converterName = categorySelect.value;
  const variants = converter[converterName].variant;
  const variantKey = `${leftSelect.value}:${rightSelect.value}`;
  const variant = variants[variantKey];
  formulaText.innerText = variant.formula;
  leftInput.value = 1;
  rightInput.value = variant.calculation(1);

  categorySelect.addEventListener("change", function () {
    // Update Default Category Units
    updateCategoryChanges(categorySelect, leftSelect, rightSelect);
  });

  leftSelect.addEventListener("change", function (event) {
    if (event.target.value === rightSelect.value) {
      const options = rightSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastLeftSelectedValue === options[i].value) {
          options[i].selected = "selected";
          lastRightSelectedValue = options[i].value;
        }
      }
    }
    lastLeftSelectedValue = event.target.value;
  });

  rightSelect.addEventListener("change", function (event) {
    if (event.target.value === leftSelect.value) {
      const options = leftSelect.getElementsByTagName("option");
      for (let i = 0; i < options.length; i++) {
        if (lastRightSelectedValue === options[i].value) {
          options[i].selected = "selected";
          lastLeftSelectedValue = options[i].value;
        }
      }
    }
    lastRightSelectedValue = event.target.value;
  });
}

function addOption(parent, option) {
  const opt = document.createElement("option");
  opt.setAttribute("value", option.value);
  opt.innerText = option.text;

  parent.appendChild(opt);
}

function removeChild(parent) {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
}

function updateCategoryChanges(categorySelect, leftSelect, rightSelect) {
  // Global varriables
  const converterName = categorySelect.value;
  const units = converter[converterName].units;
  const Options = Object.keys(units);

  // Handle Left Select

  removeChild(leftSelect);

  Options.forEach((item) => {
    addOption(leftSelect, { value: item, text: units[item] });
  });

  lastLeftSelectedValue = leftSelect.value;

  // Handle Right Select

  removeChild(rightSelect);

  Options.forEach((item) => {
    addOption(rightSelect, { value: item, text: units[item] });
  });

  //  Chage Default Options of right select
  rightSelect.getElementsByTagName("option")[1].selected = "selected";
  lastRightSelectedValue = rightSelect.value;
}
