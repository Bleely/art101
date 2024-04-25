// index.js - Lab 7
// Author: Bailey Brothers <bajbroth@ucsc.edu
// Date: 3 May 2024

// Constants

// Functions

function sortUserName() {
    let userName = window.prompt("Hi please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //string splits to Array 
    let nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sorting Array
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //joining back to string 
    let nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //completion
    return nameSorted; 
}

//output
document.writeln("I've fixed your name: ", sortUserName(), "</br>")