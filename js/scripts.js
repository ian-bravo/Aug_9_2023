window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    // Here's the first log we added.
    console.log("verbInput = " + verbInput);
    const nounInput = document.getElementById("nounInput").value;

    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person1b").innerText = person1Input;
    document.querySelector("span#person1c").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#person2b").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    // Here are the 3 new logs!
    //console.log("Correctly targeting <span>? = ", document.querySelector("span#verb"));
    //console.log("Correctly targeting innerText? = ", document.querySelector("span#verb").innerText);
    document.querySelector("span#verb").innerText = verbInput;
    //console.log("Correctly referencing verbInput and assigning value of innerText? = ", document.querySelector("span#verb").innerText);
    // Above are the 3 new logs!
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;

    document.querySelector("div#story").removeAttribute("class");
  };
};





//use
// // UI Logic

// function getAndSetMadLibValues() {
//   const person1Input = document.getElementById("person1Input").value;
//   const person2Input = document.getElementById("person2Input").value;
//   const animalInput= document.getElementById("animalInput").value;
//   const exclamationInput = document.getElementById("exclamationInput").value;
//   const verbInput = document.getElementById("verbInput").value;
//   const nounInput = document.getElementById("nounInput").value;

//   document.querySelector("span#person1a").innerText = person1Input;
//   document.querySelector("span#person1b").innerText = person1Input;
//   document.querySelector("span#person1c").innerText = person1Input;
//   document.querySelector("span#person2a").innerText = person2Input;
//   document.querySelector("span#person2b").innerText = person2Input;
//   document.querySelector("span#animal").innerText = animalInput;
//   document.querySelector("span#verb").innerText = verbInput;
//   document.querySelector("span#noun").innerText = nounInput;
//   document.querySelector("span#exclamation").innerText = exclamationInput;
// }

// // this function creates the onsubmit event handler
// // it needs to be called in the window.onload event handler
// function setFormSubmissionEventHandler() {
//   let form = document.querySelector("form");
//   form.onsubmit = function(event) {
//     event.preventDefault();
//     getAndSetMadLibValues();
//     document.querySelector("div#story").removeAttribute("class");
//   }
// }

// window.onload = function() {
//   // inside of the window.onload handler function we only include
//   // the code that we want to run when
//   // the webpage has finished loading all resources
//   setFormSubmissionEventHandler();
// };





//don't use
// window.onload = function () {
//   // first we set up an event handler for the form submission
//   let form = document.querySelector("form");
//   form.onsubmit = function (event) {
//     // then we print values to the story area;
//     // we're hardcoding these values for now
//     document.querySelector("span#person1a").innerText = "person 1";
//     document.querySelector("span#person1b").innerText = "person 1";
//     document.querySelector("span#person1c").innerText = "person 1";
//     document.querySelector("span#person2a").innerText = "person 2";
//     document.querySelector("span#person2b").innerText = "person 2";
//     document.querySelector("span#animal").innerText = "an animal";
//     document.querySelector("span#verb").innerText = "verb";
//     document.querySelector("span#noun").innerText = "noun";
//     document.querySelector("span#exclamation").innerText = "exclamation";

//     // then we show the story by removing the class attribute
//     document.querySelector("div#story").removeAttribute("class");
//     // we prevent the default refresh action for the submit event
//     event.preventDefault();
//   };
// };
