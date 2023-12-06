// So Array is linear type of DataStructure Where you can store data in linear format
// In JavScript Array is heterogenous which you can store different  type of data like string,number,objects etc

// Array Decalarations
// Here you declared the array and filled with data but here
let a = [1, 2, 3, "string"];

// or

// /Here you just declared the array with the size
let b = new Array(5);

// if you want to access the data then remember the array store the data in index format just like 0,1,2,3,4 and so on
console.log(a[0]);

// Some of the basic rule fro arr
let arr = [1, 2, 3, 4, 5, 5, 6];

// you want to add some element at last
arr.push(0);
console.loq(arr);

// if you want to add more than one elements
arr.push(1, 2, 3);

// if you want to remove elements from last and it will return the last poping element too
arr.pop();

//if you to add something to the first side of the elements
arr.unshift(1);
// if you want to remove something from the first index
arr.shift();

// if you to concat the two arrays
let arr1 = [1, 2, 3, , 4, 54];
let arr2 = [12, 1, 314, 15];
let arr3 = arr1.concat(arr2);

// if you to reverse the elements in an array
arr3.reverse();

// if you want to see the index of any elements
arr1.indexOf(2);

// if you to have sub elements from the array like from index 0 to 5
// REMEMBER SLICE WILL RETURN YOU LOWER TO HIGHER -1
arr1.slice(0, 4);

// if you want to add by deleting the elements
// arr1.splice(index,number_of_elements_you_want_to_delete,number_you_want_to_delete)
arr1.splice(1, 2, 11);
