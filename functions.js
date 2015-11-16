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