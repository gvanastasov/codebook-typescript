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

/*
    
*/

(
    /**
     * @description Typos are easy to make without something to analyse 
     * our code. no error during 'development', BUT error during 'runtime'.
     */
    function typo() {
        const message = "message";

        try {
            // @ts-expect-error
            message.toLocalLowerCase();
        } catch {
            console.log("Property 'toLocalLowerCase' does not exist on type 'string'.");
        }
        
        // OK
        message.toLocaleLowerCase();
    }
)();

(
    /**
     * @description when working with javascript objects we can easily
     * missout if particular object property is function or not. If we
     * are unaware of the behavior (aka no type to help us) we can make
     * mistakes, which are only visible during runtime. Below we have 3
     * functional errors, which javascript will not take into account 
     * during development stage:
     *  1. flipCoin does not return value in the catch
     *  2. flipCoin compares a function (uncalled) with a primitive number
     *  3. we expected our flag to be a result of function call, but instead
     *     is an assigned reference to a function object.
     */
    function functional() {
        function flipCoin() {
            try {
                // @ts-expect-error
                return Math.random < 0.5;
            } catch {
                console.log("Operator '<' cannot be applied to types '() => number' and 'number'.");
            }
        }

        const object: { flag: boolean } = {
            // @ts-expect-error
            flag: flipCoin
        }

        console.log(`flag: ${object.flag}`);
    }
)();