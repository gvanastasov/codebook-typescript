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

(
    /**
     * @description no error during 'development', BUT error during 'run' 
     * even with type safety checks enabled for javascript/ts simply because 
     * type cannot be inferred by the invocation and the logic inside the 
     * method is hidden, accepting 'any' type of object.
     */
    
    function hidden() {
        function fn(x: any): void {
            x.callback();
        }
        
        const message = "Dummy message.";

        try {
            fn(message);
        } catch {
            console.log("Property 'callback' does not exist on type 'string'");
        }

        // OK
        fn({ callback: () => {}});
    }
)();

(
    /**
     * @description no error during 'development', no error during 'runtime'
     * BUT we are trying to access/work with something 'undefined' as much 
     * as this is expected behavior for JS, it can also be considered as 
     * error prone piece of code. TS would remind us that this is not existing.
     */
    function nonException () {
        const user = {
            id: 1,
            name: "admin",
        };

        try {
            // @ts-expect-error
            console.log(user.location);
        } catch {
            console.log("Property 'location' does not exist on type '{ id: number; name: string; }'.")
        }

        // OK
        console.log((user as any).location);
    }
)();