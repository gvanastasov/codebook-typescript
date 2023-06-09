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
    function arraySyntax() {
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
    function arrayReadonly() {
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

(
    /**
     * @description a type that allows you to express an array with a fixed 
     * number of elements, where each element may have a different type. 
     * Tuples provide a way to represent and work with a specific sequence 
     * of values with known types.
     * 
     * Keynotes:
     *      1. fixed Length
     *      2. element types
     *      3. accessing elements
     *      4. array-like operations
     */
    function tuples() {
        type Person = [string, number, boolean];

        let person: Person = ["John", 30, true];

        try {
            // @ts-expect-error
            console.log(person[9]);
        } catch {
            console.log("Tuple type 'Person' of length '3' has no element at index '9'.");
        }

        console.log(person[0]);
        console.log(person[1]);
        console.log(person[2]);

        const [name, age, isEmployed] = person;
        console.log(name);
        console.log(age);
        console.log(isEmployed);

        person.forEach(item => {
            console.log(item);
        });

        const upperCaseName = person[0].toUpperCase();
        console.log(upperCaseName);
    }
)();

(
    /**
     * @description a built-in collection that allows storing unique 
     * values of any type. Sets are similar to arrays but with distinct 
     * elements.
     */
    function sets() {
        const s = new Set([1, 2, "John"]);

        // OK
        s.add(1);

        console.assert(s.size === 4, "Fail: nothing was added, because 1 already exists in the set.");
    }
)();

(
    /**
     * @description a built-in collection that allows storing key-value 
     * pairs, where both the keys and values can be of any type. Maps 
     * provide an efficient way to associate values with unique keys 
     * and perform operations on them.
     */
    function maps() {
        const map = new Map();
        map.set("apple", 10);
        map.set("banana", 20);

        // OK
        console.log(map.get("apple"));

        // OK
        console.log(map.get("lemon"));
    }
)