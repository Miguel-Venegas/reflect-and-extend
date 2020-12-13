// learning Reflection and Extend

// REFLECTION: an object can look at itself, listening and changing its properties and methods.

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// reflection example:

// what this would do it loop over every member in the object john and output prop name and prop value in the object:
for (let prop in john){
    console.log(prop + ': ' + john[prop]);
}; 

// output: 
    // firstname: John
    // lastname: Doe
    // getFullName: function() {
    //         return this.firstname + ' ' + this.lastname;  


// if you notice, the object john grabbed a method from object person because it was set as john's prototype.

// if you only wanted to access the properties within the object john, you can actually use an if statement like so:


for (let prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}; 
// output: 
    // firstname: John
    // lastname: Doe

// the above example is called 'reflect on the john object', that is, looking at its own properties

// EXTENDS

let jane = {
    address: '111 Main Street',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    },
}

let jim = {
    getFirstName: function(){
        return firstname;
    },
}

// using the underscore library we can use 'extend'

_.extend(john, jane, jim);

// what the code above does is combines all the objects, including properties and adds them to the object john

console.log(john); // check it out on the console.

// Note: Reflection and Extends shows up in many popular JS libraries/frameworks