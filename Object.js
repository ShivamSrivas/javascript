// ********************************************************* Objects ********************************************************************************
// An Object can be define by keys and values
// An Object have behaviour and attributes where behaviours gives the functionality and attributes help us to uniquely identify the objects

let person = {id:12,name:"Shivam"}
let person_2 = new Object()
person_2.id=13
person_2.name="Ram"

console.log(person,person_2);

// ****************************************************** Pre-define functions **************************************************************************
let keys = Object.keys(person)
let value = Object.values(person)
let enteries = Object.entries(person)

// if you want to delete the elements from object
delete person.id

// if you want to add
person.addr = "abc"

// if you want to update 
person.addr = "cba"


// if you to stop delete addition or updation
Object.freeze(person)

// if you updation only
Object.seal(person)


function Emp (id,name){
  this.id =id
  this.name =name
}

// Example of creating instances
const employee1 = new Emp(1, 'John Doe');
const employee2 = new Emp(2, 'Jane Doe');

console.log(employee1);
console.log(employee2);