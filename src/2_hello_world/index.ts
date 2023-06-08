(
    /**
     * @description typescript is awesome.
     */
    function helloWorld() {
        function sayHelloWorld(person: string, date: string): void {
            console.log(`${person} [${date}]: Hello world!`);
        }
        
        try {
            // @ts-expect-error
            sayHelloWorld("John");
        } catch {
            console.log("An argument for 'date' was not provided.");
        }

        sayHelloWorld("Johana", Date());
    }
)();
