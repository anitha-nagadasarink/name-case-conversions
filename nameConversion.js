let inputValue;
const convertCaseBtn = document.getElementById("convert-btn");
const casesContainer = document.querySelector(".cases_div");


// Case button Declarations
const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

// Case Conversions
convertCaseBtn.addEventListener("click", function(){
  inputValue = document.getElementById("text").value;

  // camelCase
   let camelText = inputValue.toLowerCase().split("").join('').replaceAll(/\W(.)/g, (match, chr) => chr.toUpperCase());
   camelCase.innerText = camelText;
   
  //Pascal case
  let pascalText = inputValue.toLowerCase().charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase().replaceAll(/\W+(.)/g, (match, ch) => ch.toUpperCase()); 

   pascalCase.innerText = pascalText;
   
  //  Snake Case 
  let snakeText = inputValue.toLowerCase().replaceAll(" ", "_");
  snakeCase.innerText = snakeText;
 
  //screaming Snake Case
  let screamingSnakeText = inputValue.toUpperCase().replaceAll(" ", "_")
  screamingSnakeCase.innerHTML = screamingSnakeText;

  // kebab Case
  let kebabText = inputValue.toLowerCase().replaceAll(" ", "-")
  kebabCase.innerText = kebabText;

  // screaming Kebab Case
  let screamingKebabText =  inputValue.toUpperCase().replaceAll(" ", "-");
  screamingKebabCase.innerText = screamingKebabText;  
});



