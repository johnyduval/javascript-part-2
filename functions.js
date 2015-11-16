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

