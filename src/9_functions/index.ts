(
    function syntax() {
        function add(a: number, b: number): number {
            return a + b;
        }

        // OK
        let result = add(5, 4);

        try {
            // @ts-expect-error
            let result2 = add(5, "4");
        } catch (error) {
            console.log("Second argument must be number too.")
        }

        try {
            // @ts-expect-error
            let result3 = add(5, 4) as string;
        } catch (error) {
            console.log("The result type number and projected type string due to insufficient overlap of the definition.");
        }
    }
)();

(
    /**
     * @description just a dummy function with defined
     * no return type, or simply void.
     * 
     * @param message {string}
     * @returns void
     */
    function noReturnType(message: string): void {
        console.log(message);
        return;
    }
)("message");

(
    /**
     * @description automatically determined types from the the 
     * context of the invocation, arguments and etc. Both itteration
     * function passed to the forEach are the same (type check wise).
     */
    function context() {
        let digits: number[] = [0,1,2,3,4,5,6,7,8,9];

        digits.forEach((x) => console.log(x));
        digits.forEach(
            function(x): void { 
                console.log(x); 
                return;
            }
        );
    }
)();