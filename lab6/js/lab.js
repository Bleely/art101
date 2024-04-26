// index.js - Lab 6
// Author: Bailey Brothers <bajbroth@ucsc.edu
// Date: 29 April 2024

// Constants

// Functions

// Define Variables 
myTransport = ["Ford Taurus", " Bus", " Bike", " B-Cycle."];

// Create an object for my main ride
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "rusty",
  year: 1995,
  age: function() {
      return 2024 - this.year;
  }
}

// Output
document.writeln("Ways I get around: ", myTransport, "</br>");
document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>"); 