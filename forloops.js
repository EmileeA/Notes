// //for loops!!

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true //boolean

//     },
//     {
//         id: 2,
//         text: 'School',
//         isCompleted: true //boolean

//     },
//     {
//         id: 3,
//         text: 'Dentist Appt',
//         isCompleted: false //boolean

//     }
// ];

// // For
// // we pass 3 parameters:
// // 1. The assignment of the variable(Let i=0)
// // 2. The condition that needs to be met (i<10)
// // 3. The increment (i++) this will add one to this i variable
// // whatever we put in this will run until i<10 is true
// for(let i =0; i < 10; i++) {
//     console.log(i); //the output will be 0-9
// }

// // While
// // We set the variable outside of the loop
// // While takes in the condition
// let i =0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++; // this will increment it by one. If we didn't have this then it would loop and loop and loop
// }

// //how to loop through Arrays
// for(let i =0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// // For of loop
// //todos is the variable here, it is our name of the array. todo could be anything, but we name it todo because it makes sense

// for(let todo of todos) {
// console.log(todo); //if I just wanted the text I could say console.log(todo.text); or id console.log(todo.id);
// }

// //forEach, map, filter
// // foreach loops through
// todos.forEach (functions(todo) {
// console.log(todo.text) //this loops through the text for each todo
// });
// //map will allow us to create a new array from an array
// const todoText = todos.map(function(todo) {
//     return todo.text;
//     });
//     console.log(todoText);

// //filter to create a new array based on a condition
// const todoCompleted = todos.map(function(todo) {
//     return todo.isCompleted === true;
//     });
//     console.log(todoCompleted); //this is will show me the values that are completed


// //High Order Array
// //if we wanted the true values and the text:
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
//     }).map(function(todo) {
//         return todo.text;
//     })
//     console.log(todoCompleted);

// //Conditionals
// const x = 10;
// if(x === 10) {
//     console.log ('x is 10');
// }
// //output is "x is 10"

// //else
// const x = 20;
// if(x === 10) {
//     console.log ('x is 10');
// } else {
//     console.log('x is NOT 10');
// }

// //if else
// const x = 20;
// if(x === 10) {
//     console.log ('x is 10');
// } else if(x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is less than 10');
// }


// //OR
// const x = 4;
// const y = 11;

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }
//  //output is "x is more than 5 or y is more than 10"



// //AND
// const x = 6;
// const y = 11;

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }
//  //output is "x is more than 5 or y is more than 10"


// //TERNARY STATEMENT "?" is the ternary operator

// const x = 10;
// const color = x > 10 ? 'red' : 'blue';

// console.log(color);
// //output is "blue"

// //SWITCHES - another way to evaluate the condition
// const x = 9;
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// //output is "color is blue"












//     //FOR MY PERSONAL SITE JS FILE
//     //Begin Project Builder//
// const buildProjects = () => {
//     let domString = '';
//     projects.forEach ((project) => {
//         domString += `<div class="card bg-dark d-flex justify-content-center mt-5 mr-5" style="width: 18rem;">`
//         domString += `<h5 class="card-title">${project.title}</h5>`
//         domString += `<img src=${project.screenshot} class="card-img-top" alt="...">`
//         domString += `<div class="card-body">`
//         domString += `<p class="card-text">${project.description}</p>`
//         domString += `</div>`
//         domString += `<div class="card-body">`
//         domString += `<p class="card-link">View my <a href=${project.githubUrl}> code</a></p>`
//         domString += `</div>`
//         domString += `</div>`

//         if (project.available === true) {
//         printToDom('array',domString);
//     }
//   });
//   };
//   //^^End Project Builder^^//
//   //Hide Divs//
//   const hideBioDiv = () => {
//     document.getElementById('bioDiv').style.display = 'none';
//     };

//   const hideTechDiv = () => {
//     document.getElementById('techDiv').style.display = 'none';
//     };

//   const hideProjectDiv = () => {
//         document.getElementById('projectDiv').style.display = 'none';
//         };
//   //^^End Hide Divs//
//   //Show Divs//
//   const showBioDiv = (e) => {
//     if (bioDiv.style.display === "none") {
//         bioDiv.style.display = "block";
//         // techDiv.style.display = "none";
//         projectDiv.style.display = "none";
//         ;
//       } else {
//         bioDiv.style.display = "none";
//       }
//   }

//   const showTechDiv = (e) => {
//     if (techDiv.style.display === "none") {
//         techDiv.style.display = "block";
//       } else {
//         techDiv.style.display = "none";
//       }
//   };

//   const showProjectDiv = (e) => {
//     if (projectDiv.style.display === "none") {
//         projectDiv.style.display = "block";
//         bioDiv.style.display = "none";
//       } else {
//         projectDiv.style.display = "none";
//       }
//   };
//   //^^End Show Divs^^//

//   //Begin Event Listeners//
//   const eventListener = () => {
//     document.getElementById('bioLink').addEventListener('click',showBioDiv);
//     // document.getElementById('techLink').addEventListener('click',showTechDiv);
//     document.getElementById('projectLink').addEventListener('click',showProjectDiv);
//   }
//   //^^End Event Listeners^^//


//   const init = () => {
//     buildProjects();
//     hideBioDiv();
//     // hideTechDiv();
//     hideProjectDiv();
//     eventListener();

//   }

//   init();