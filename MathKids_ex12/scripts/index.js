import shapes from "./shapes.js";
import staticContent from "./staticContent.js"

// Data object
var value;
// local object
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
const createButton = (content) => {
  console.log(content);
  let button = document.createElement("button");
  button.textContent = content.button.text;
  if (content.button.class) button.className = content.button.class;
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
const clearElement = () => {
  mainContainer.replaceChildren();
  commonSection.replaceChildren();
};
// section 1
const sectionOne = (content) => {
  getLocalStorage();
  switch (selectedValue.section) {
        case 2:
          sectionTwo(selectedValue , staticContent.sectionTwo);
          return;
        case 3:
          content = staticContent.sectionThree;
          sectionThree(selectedValue , staticContent.sectionThree);
          return;
      }
  // ELEMENT CREATION-----
  clearElement();
  // add class
  commonSection.className = content.class;
  // h1
  commonSection.appendChild(createH1(content.heading));
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
  createButton(content);
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
        
        previousElement.getElementsByTagName("i")[0].classList.remove("tickAppear");
        previousElement = i;
      }
      i.getElementsByTagName("i")[0].classList.add("tickAppear");
      commonSection.getElementsByTagName("button")[0].style.visibility ="visible";
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
    sectionTwo(selectedValue , staticContent.sectionTwo);
  });
};

// section2
const sectionTwo = (selectedValue , content) => {
  clearElement();
  // add class
  commonSection.className = content.class;
  // h1
  commonSection.appendChild(createH1(content.heading + shapes[selectedValue.index].heading));
  // input
  const inputelement = createElement(content.input.element , content.input.class);
  inputelement.type = "number"
  commonSection.appendChild(inputelement);
  createButton(content);
  mainContainer.appendChild(commonSection);
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    selectedValue.value = document.getElementsByTagName("input")[0].value;
    if (selectedValue.value != 0) {
      // change section value
      selectedValue.section = 3;
      value = selectedValue.value;
      setLocalStorage();
      sectionThree(selectedValue , staticContent.sectionThree);
    }
  });
};

// section three
const sectionThree = (value , content) => {
  clearElement();
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
    col1.textContent = row["name"];
    rowDiv.appendChild(col1);
    col2.textContent = row.formula;
    rowDiv.appendChild(col2);
    col3.textContent = row.calculate(value.value);
    rowDiv.appendChild(col3);
    displayResult.appendChild(rowDiv);
  });
  commonSection.appendChild(resultShape);
  // start again button
  createButton(content);
  mainContainer.appendChild(commonSection);
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    selectedValue.section = 1;
    selectedValue.value = 0;
    selectedValue.shape = "";
    setLocalStorage();
    sectionOne(staticContent.sectionOne);
  });
};
window.addEventListener("load",sectionOne(staticContent.sectionOne));