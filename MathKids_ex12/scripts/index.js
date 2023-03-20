import shapes from "./shapes.js";

// Data object
var value;

// loacal object
var selectedValue = {
  index: null,
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
  h1.textContent = text;
  return h1;
};

// create button
const createButton = (text, id) => {
  let button = document.createElement("button");
  button.textContent = text;
  button.id = id;
  if (id === "next") button.className = id;

  commonSection.appendChild(button);
};

// create Elememt

const createElement = (elementType , className , content = ""  ) => {
  let element = document.createElement(elementType);
  element.className = className;
  if(content!=""){
    element.appendChild(content);
  }
  return element;
}
// clear section
const clearElement = (element) => {
  element.replaceChildren();
};

// section 1
const sectionOne = (value) => {
  // ELEMENT CREATION-----
  clearElement(mainContainer);
  clearElement(commonSection);
  // add class
  commonSection.className = "ChooseShape";
  // h1
  commonSection.appendChild(createH1("1. Choose a Shape"));

  // shapes
  let shapesContainer = document.createElement("div");
  shapesContainer.classList.add("shapes_holder");
  for (const shape of shapes) {
    let tick = createElement("i" , "fa-solid fa-check tick"  );
    let shapeDiv = createElement("div" , shape.class , tick)
    shapesContainer.appendChild(shapeDiv);
  }
  commonSection.appendChild(shapesContainer);
  // button
  createButton("NEXT", "next");
  mainContainer.appendChild(commonSection);

  // CALCULATION
  // select shape
  const selectedShape = document.querySelectorAll(".shapes_holder > div");
  var previousElement;
  selectedShape.forEach((i , index) => {
    // tick on click
    i.addEventListener("click", () => {
      if(!previousElement){
        previousElement =i;
      }else{
        console.log(previousElement);
        previousElement.getElementsByTagName("i")[0].classList.remove("tickAppear");
        previousElement = i;
      }
      i.getElementsByTagName("i")[0].classList.add("tickAppear");
      commonSection.getElementsByTagName("button")[0].style.visibility =
      "visible";
      selectedValue.index = index;
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
    createH1("2. Enter " + shapes[selectedValue.index].heading)
  );
  // input
  const inputelement = createElement("input" , "getInput");
  inputelement.type = "number"
  commonSection.appendChild(inputelement);
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
  // correct shape
  let correctShape = createElement("div" ,shapes[value.index].class )
  let resultShape = createElement("div" , "ResultShape" ,correctShape )
  //display result
  let displayResult = createElement("div" , "displayResult")
  resultShape.appendChild(displayResult);
  //   h1
  displayResult.appendChild(createH1(shapes[value.index].name));
  // values in table
  shapes[value.index].calculation.forEach((row) => {
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
