//for loops!!

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true //boolean

    },
    {
        id: 2,
        text: 'School',
        isCompleted: true //boolean
        
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false //boolean
        
    }
];

// For
// we pass 3 parameters:
// 1. The assignment of the variable(Let i=0) 
// 2. The condition that needs to be met (i<10) 
// 3. The increment (i++) this will add one to this i variable
// whatever we put in this will run until i<10 is true
for(let i =0; i < 10; i++) { 
    console.log(i); //the output will be 0-9
}

// While
// We set the variable outside of the loop
// While takes in the condition
let i =0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++; // this will increment it by one. If we didn't have this then it would loop and loop and loop
}

//how to loop through Arrays
for(let i =0; i < todos.length; i++) { 
    console.log(todos[i].text); 
}
// For of loop
//todos is the variable here, it is our name of the array. todo could be anything, but we name it todo because it makes sense

for(let todo of todos) {
console.log(todo); //if I just wanted the text I could say console.log(todo.text); or id console.log(todo.id);
}

//forEach, map, filter 
// foreach loops through
todos.forEach (functions(todo) {
console.log(todo.text) //this loops through the text for each todo
});
//mpa will allow us to create a new array from an array
const todoText = todos.map(function(todo) {
    return todo.text; 
    });
    console.log(todoText);

//filter to create a new array based on a condition
const todoCompleted = todos.map(function(todo) {
    return todo.isCompleted === true; 
    });
    console.log(todoCompleted); //this is will show me the values that are completed

    