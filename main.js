//Object Literals

const person = {
    firstName: 'Emilee', //string
    lastName: 'Mitchell',
    age: 34, 
    hobbies: ['music', 'movies', 'jokes'], //array
    address: {
        street: '123 main st'  //embedded object. (objects within an object)
        city: 'Nashville'
        state: 'TN'
    }
}

console.log(person); //this will show us all values in the console
console.log(person.firstName); //this will show 'Emilee'
console.log(person.firstName, person.lastName); //this will show us Emilee Mitchell

//to get the value of movies
console.log(person.hobbies[1]); //movies
//if we wanted to get city
console.log(person.address.city); //Nashville
//if we wanted to create variables. So it is not assigning anything but pulling values out of the person object
const { firstName, lastName } = person;
console.log(firstName); //emilee
//now if it's an embedded object like an address, what we could do. This is ES6 structuring.
const { firstName, lastName, address {city} } = person;
console.log(city); //Nasville

//can add properties
person.email = 'emilee@gmail.com';
console.log(person);


//ARRAYS OF OBJECTS
//lets create an array of todos. we want each value in the array to be an object
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

console.log(todos); //since we have an array of todos. This will display a value of arrays which are all objects

//if we wanted to grab School, to print from the console
console.log(todos[1].text); //output is School


