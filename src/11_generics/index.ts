(
    /**
     * @description generic function return types allow you to 
     * create functions that can return different types based 
     * on the input parameters or the context in which they 
     * are called. By using type parameters, you can specify 
     * a placeholder for the return type and provide flexibility 
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

        function firstElement<Type>(arr: Type[]): Type | undefined {
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
)