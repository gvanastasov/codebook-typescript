(
    /**
     * @description generic function return types allow you to 
     * create functions that can return different types based 
     * on the input parameters or the context in which they 
     * are called. By using type parameters, you can specify 
     * a placeholder for the return type (T) and provide flexibility 
     * for the caller to determine the specific return type when 
     * invoking the function. This enables you to write reusable 
     * functions that maintain type safety while accommodating 
     * different data types and scenarios.
     * 
     * Note:
     *      generic example from below increases type assurance
     *      by specific exact return type, hence mitigating 
     *      'type erasure' - see chapter.7 for reference.
     */
    function returnType() {
        let arr: number[] = [1, 2, 3];

        function firstElement<T>(arr: T[]): T | undefined {
            return arr[0];
        }

        let first = firstElement(arr);

        try {
            // @ts-expect-error
            console.log(first.toLowerCase());
        } catch {
            console.log("Property 'toLowerCase' does not exist on type 'number'.")
        }

        // OK
        console.log(`Number: ${first}`);
    }
)();

(
    /**
     * @description the ability of the TypeScript compiler to 
     * automatically determine the type of a generic parameter 
     * based on the context in which it is used.
     */
    function inference() {
        function identity<T>(arg: T): T {
            return arg;
        }
          
        let five = identity(5);
        let result: number = five * 3;

        let message = identity("message");

        // OK
        console.log(result);

        // OK
        console.log(message.toLowerCase());
    }
)();

(
    /**
     * @description allow you to restrict the types that can 
     * be used as type arguments for generic parameters. By 
     * applying constraints, you can enforce certain properties 
     * or capabilities on the generic type, ensuring that it
     * meets specific requirements.
     */
    function constraints() {
        type Lengthy = {
            length: number;
        }
        
        function logLength<T extends Lengthy>(arg: T): void {
            console.log(arg.length);
        }
        
        try {
            // @ts-expect-error
            logLength(5);
        } catch {
            console.log("Argument of type 'number' is not assignable to parameter of type 'Lengthy'.");
        }

        // OK
        logLength("Hello");
        
        // OK
        logLength([1, 2, 3]);
        
        // OK
        logLength({ length: 10 });
    }
)();

(
    /**
     * @description allow you to create reusable interfaces that can 
     * work with different types. They provide flexibility and type 
     * safety by allowing you to parameterize the types used within 
     * the interface.
     */
    function interfaces() {
        interface Box<T> {
            contents: T;
        }

        let number: Box<number> = { contents: 5 };
        let char: Box<string> = { contents: "a" };
    }
)