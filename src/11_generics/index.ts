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