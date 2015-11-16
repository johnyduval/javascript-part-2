// This is my line of comment

function compare (string1, string2){
    
    if (string1.length > string2.length){
        return 1;
    } else {
        return -1;
    }
};

var numbers = ["banana", "oat"];

numbers.sort(compare);

// Sort by name and then by alphabetical order of email

//creating the array of objects

var arrayOfObjects = [
    {
        name: "hello" ,
        email: 'hello@gmail.com'
    },
    {
        name: "info",
        email: 'info@gmail.com'
    }

];

// comparing names

function compareNames (string1, string2){
    
    if (string1.length > string2.length){
        return 1;
    } else {
        return -1;
    }
}

var objectNames = [arrayOfObjects[0].name, arrayOfObjects[1].name];

objectNames.sort(compareNames);

// comparing emails

function compareEmails (string1, string2){
    
    if (string1 > string2){
        return 1;
    } else {
        return -1;
    }
}

var objectEmails = [arrayOfObjects[0].email, arrayOfObjects[1].email];

objectEmails.sort(compareEmails);

// function should take a number and return its square

function squareNumbers (num){
    return num*num;
}

var numbers = [1, 2, 4, 12];
numbers.map(squareNumbers);

// function should be able to take an object and square its “num” property

function squareNum (obj){
    return obj.num * obj.num;
}

var arrayofObjects = [
    {
        num: 16,
        name: 'Allen'
    },
    {
        num: 4,
        name: 'John'
    }
];

arrayofObjects.map(squareNum);

// created a function called operationMaker

function operationMaker (operation){
    if (operation === 'add'){
        return function add (n1, n2){
    return n1 + n2;
};
    } else if (operation === 'mult'){
        return function mult (n1, n2){
    return n1 * n2;
};
    } else if (operation === 'substract'){
        return function substract (n1, n2){
    return n1 - n2;
};
    } else if (operation === 'div') {
        return function div (n1, n2){
    return n1/n2;
};
    }
}


var adder = operationMaker('mult');
var sum = adder(5, 10);