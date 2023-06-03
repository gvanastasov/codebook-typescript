(function () {
    // the explicit type definitions string and Date will be stripped 
    // out after compilation
    function sayHelloWorld(person, date) {
        console.log("".concat(person, " [").concat(date.toDateString(), "]: Hello world!"));
    }
    // compile time error - TS2345: Argument of type 'string' is not assignable 
    // to parameter of type 'Date'
    sayHelloWorld("John", Date());
    // no error
    sayHelloWorld("Alice", new Date());
})();
