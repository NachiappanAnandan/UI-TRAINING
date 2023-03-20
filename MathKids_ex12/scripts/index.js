import shapes from "./shapes.js";

// Data object
var value;

// loacal object
var selectedValue = {
  shape: "",
  section: 1,
  value: 0,
};

// LOCAL STORAGE
const getLocalStorage = () => {
  let temp = localStorage.getItem("backup");
  if (temp == null) {
    localStorage.setItem("backup", JSON.stringify(selectedValue));
  } else {
    selectedValue = JSON.parse(temp);
    value = parseInt(selectedValue.value);
  }
};

const setLocalStorage = () => {
  localStorage.setItem("backup", JSON.stringify(selectedValue));
};

// Default main container
const mainContainer = document.getElementById("main");
// Section for all
let commonSection = document.createElement("section");

// create h1
const createH1 = (text) => {
  let h1 = document.createElement("h1");
  h1.innerHTML = text;
  return h1;
};

// create button
const createButton = (text, id) => {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.id = id;
  if (id === "next") button.className = id;

  commonSection.appendChild(button);
};

// clear section
const clearElement = (element) => {
  element.innerHTML = "";
};

// section 1
const sectionOne = (value) => {
  // ELEMENT CREATION-----
  clearElement(mainContainer);
  clearElement(commonSection);
  // add class
  commonSection.className = "ChooseShape";
  // h1
  commonSection.appendChild(createH1("1.Choose any one"));

  // shapes
  let shapesContainer = document.createElement("div");
  shapesContainer.classList.add("shapes_holder");
  for (const shape of Object.keys(shapes)) {
    console.log(Object.keys(shape));
    let shapeDiv = document.createElement("div");
    shapeDiv.classList.add(shape);
    let tick = document.createElement("i");
    tick.className = "fa-solid fa-check tick";

    shapeDiv.appendChild(tick);
    shapesContainer.appendChild(shapeDiv);
  }
  commonSection.appendChild(shapesContainer);

  // button
  createButton("NEXT", "next");
  mainContainer.appendChild(commonSection);

  // CALCULATION
  // select shape
  const selectedShape = document.querySelectorAll(".shapes_holder > div");
  // loading time tick
  selectedShape.forEach((i) => {
    if (i.className === value.shape) {
      i.getElementsByTagName("i")[0].classList.add("tickAppear");
      commonSection.getElementsByTagName("button")[0].style.display =
        "inline-block";
    }
    // tick on click
    i.addEventListener("click", (e) => {
      selectedShape.forEach((el) =>
        el.getElementsByTagName("i")[0].classList.remove("tickAppear")
      );
      i.getElementsByTagName("i")[0].classList.add("tickAppear");
      commonSection.getElementsByTagName("button")[0].style.display =
        "inline-block";
      selectedValue.shape = i.className;
      setLocalStorage();
    });
  });
  // button onclick event  (next button)
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    // change section value
    selectedValue.section = 2;
    setLocalStorage();
    sectionTwo(selectedValue);
  });
};

// section2
const sectionTwo = (selectedValue) => {
  clearElement(mainContainer);
  clearElement(commonSection);
  // add class
  commonSection.className = "EnterSide";
  // h1
  console.log();
  commonSection.appendChild(
    createH1("2. Enter " + shapes[selectedValue.shape].heading)
  );
  // input
  const inputElement = document.createElement("input");
  inputElement.type = "number";
  inputElement.className = "getInput";
  commonSection.appendChild(inputElement);
  createButton("CALCULATE", "calculate");
  mainContainer.appendChild(commonSection);

  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    selectedValue.value = document.getElementsByTagName("input")[0].value;
    if (selectedValue.value != 0) {
      // change section value
      selectedValue.section = 3;
      value = selectedValue.value;
      setLocalStorage();
      sectionThree(selectedValue);
    }
  });
};

// section three
const sectionThree = (value) => {
  clearElement(mainContainer);
  clearElement(commonSection);
  //common section
  commonSection.className = "Result";
  // Result shape
  let resultShape = document.createElement("div");
  resultShape.className = "ResultShape";

  // correct shape
  let correctShape = document.createElement("div");
  correctShape.className = value.shape;
  resultShape.appendChild(correctShape);

  //display result
  let displayResult = document.createElement("div");
  displayResult.className = "displayResult";
  resultShape.appendChild(displayResult);

  //   h1
  displayResult.appendChild(createH1(shapes[value.shape].name));

  // values in table
  shapes[value.shape].calculation.forEach((row) => {
    let rowDiv = document.createElement("div");
    rowDiv.className = "detailsContainer";
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let col3 = document.createElement("div");
    col1.innerHTML = row["name"];
    rowDiv.appendChild(col1);
    col2.innerHTML = row.formula;
    rowDiv.appendChild(col2);
    col3.innerHTML = row.calculate(value.value);
    rowDiv.appendChild(col3);
    displayResult.appendChild(rowDiv);
  });
  commonSection.appendChild(resultShape);

  // start again button
  createButton("START AGAIN", "start_again");
  mainContainer.appendChild(commonSection);
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    selectedValue.section = 1;
    selectedValue.value = 0;
    selectedValue.shape = "";
    setLocalStorage();
    sectionOne(selectedValue);
  });
};

window.addEventListener("load", () => {
  getLocalStorage();
  switch (selectedValue.section) {
    case 1:
      sectionOne(selectedValue);
      break;
    case 2:
      sectionTwo(selectedValue);
      break;
    case 3:
      sectionThree(selectedValue);
      break;
  }
});
