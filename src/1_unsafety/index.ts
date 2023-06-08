(
    /**
     * @description without type checks, mistakes on interface 
     * of objects is pretty common mistake in javascript. Assuming
     * bellow code was written inside an IDE without TS type checking
     * making mistakes on how an object behaves is close to impossible
     * and usually the bug will be caught only during run time.
     */
    function type() {
        const message = "Dummy message.";
        
        try {
            // @ts-ignore
            message();
        } catch {
            console.log("This expression is not callable.");
        }

        // OK
        message.toLowerCase();
    }
)();