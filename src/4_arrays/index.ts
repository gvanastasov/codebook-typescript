(
    /**
     * @description Arrays in TypeScript provide a structured and 
     * type-safe way to work with collections of data. They offer 
     * a range of methods and operations to manipulate array elements 
     * effectively. Reminder - TypeScript supersets Javascript, therefore
     * the behavior of array is retained as is. Out-of-range error is not
     * handled but rather returns value of undefined, which is not considered
     * an error.
     */
    function syntax() {
        let digits: number[] = [0,1,2,3,4,5,6,7,8,9];
        let weekdays: Array<String> = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // OK
        console.log(digits[1]);

        // OK
        console.log(weekdays[8]);
    }
)();

(
    /**
     * @description a type that represents an immutable (read-only) array 
     * of elements of type T. It is similar to the regular Array<T> type, 
     * but it enforces that the array cannot be modified once it is created.
     */
    function readonly() {
        const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

        try {
            // @ts-expect-error
            numbers[0] = 10;
        } catch {
            console.log("Index signature in type 'readonly number[]' only permits reading.");
        }

        // OK
        const copy = numbers.map(num => num * 2);
    }
)();