(function() {
    console.log("Hello world!");
    
    function sayHelloWorld(person, date) {
        console.log(`${person} [${date}]: Hello world!`);
    }
    
    // compile time error - TS2554: Expected 2 arguments, but got 1
    sayHelloWorld("John");
})();
