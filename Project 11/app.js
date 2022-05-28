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

function main() {
  const categorySelect = document.getElementById("category-select");
  const leftSelect = document.getElementById("left-select");
  const rightSelect = document.getElementById("right-select");

  const converterKeys = Object.keys(converter).sort();
  removeChild(categorySelect);

  converterKeys.forEach((item) => {
    addOption(categorySelect, { value: item, text: converter[item].name });
  });

  // Update Default Category Units
  updateCategoryChanges(categorySelect, leftSelect, rightSelect);

  categorySelect.addEventListener("change", function () {
    // Update Default Category Units
    updateCategoryChanges(categorySelect, leftSelect, rightSelect);

    rightSelect.getElementsByTagName("option")[2].selected = "selected";
  });

  // Handle Left Select

  removeChild(leftSelect);
  const leftOptions = Object.keys(units);
  leftOptions.forEach((item) => {
    addOption(leftSelect, { value: item, text: units[item] });
  });

  // Handle Right Select

  removeChild(rightSelect);
  const rightOptions = Object.keys(units);
  rightOptions.forEach((item) => {
    addOption(rightSelect, { value: item, text: units[item] });
  });

  rightSelect.getElementsByTagName("option")[2].selected = "selected";
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

  // Handle Right Select

  removeChild(rightSelect);

  Options.forEach((item) => {
    addOption(rightSelect, { value: item, text: units[item] });
  });

  //  Chage Default Options of right select
  rightSelect.getElementsByTagName("option")[2].selected = "selected";
}
