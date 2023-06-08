(function () {
    console.log("Hello world!");
    function sayHelloWorld(person, date) {
        console.log("".concat(person, " [").concat(date, "]: Hello world!"));
    }
    sayHelloWorld("John");
})();
