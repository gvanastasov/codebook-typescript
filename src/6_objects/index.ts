(
    /**
     * @description the question mark after a property name, 
     * you specify that the property is optional, meaning it 
     * may or may not be present in object
     */
    function optionalProperty() {
        try {
            // @ts-expect-error
            let object_err: { x: number, y: number } = { x: 3 }
        } catch {
            console.log("Property 'y' is missing in type '{ x: number; }' but required in type '{ x: number; y: number; }'");
        }

        // OK
        let object: { x: number, y?: number } = { x: 3 }
        console.log(`y: ${object.y}`);
    }
)();

(
    /**
     * @description the exclamation mark before object's property 
     * tells the TypeScript compiler to treat the property as if 
     * it is not nullable or undefined, even if the type system 
     * suggests that it could be. It's a way of asserting your 
     * knowledge about the code and telling TypeScript that you 
     * are certain the value is not null or undefined at that point.
     */
    function nonNullAssertion() {
        function log(message: string | null) {
            console.log(message!.toUpperCase());
        }

        try {
            log(null);
        } catch {
            console.log("Method 'toUpperCase' cannot be found on 'null'");
        }

        // OK
        log("message");
    }
)();

(
    /**
     * @description allows you to safely access properties and methods 
     * of an object without worrying about potential null or undefined 
     * values. Especially useful when dealing with complex data structures 
     * or when accessing properties that may be missing in some objects. 
     * It allows you to gracefully handle cases where properties are 
     * absent, avoiding runtime errors caused by null or undefined values.
     */
    function optionalChaining() {
        let user: 
            { 
                name: string, 
                address?: { street: string, city: string }
            } = {
                name: "Alice"
            };
        
        try {
            console.log(user.address.street);
        } catch {
            console.log("Cannot find property 'street' on undefined.");
        }

        // OK
        console.log(`Address: ${ user.address?.street }`)
    }
)();

(
    /**
     * @description also known as object literals or object expressions, 
     * are objects that are defined on-the-fly without a specific name 
     * or type declaration. They are commonly used in JavaScript and 
     * TypeScript to create objects quickly and inline.
     * 
     */
    function anonymous() : void {
        function log(user: { firstName: string, lastName?: string }): void {
            console.log(`${user.firstName}, ${user.lastName}`);
            return;
        }

        // OK
        log({ firstName: "John", lastName: "Doe" });
    }
)();

(
    /**
     * @description 'this' refers to the current instance of an object or the 
     * object on which a method is being called.
     */
    function reference() {
        class Person {
            name: string;
          
            constructor(name: string) {
              this.name = name;
            }
          
            greet(): void {
              console.log(`Hello, my name is ${this.name}.`);
            }
        }

        let operation: { type: "add", describe: () => void } = {
            type: "add",
            describe() {
                if (this.type === "add") {
                    console.log("can sum up numbers.")
                }
            }
        }

        // OK
        const person = new Person("Alice");
        person.greet();

        // OK
        operation.describe();
    }
)();

(
    /**
     * @description allows you to extract properties or elements from objects 
     * or arrays directly in the function parameter declaration. It provides 
     * a concise way to assign values to individual variables from complex 
     * data structures.
     */
    function destructuring() {
        function greet({ name, age }: { name: string; age: number }) {
            console.log(`Hello ${name}, you are ${age} years old.`);
        }

        function sum([a, b]: number[]) {
            console.log(`Sum: ${a + b}`);
        }
          
        const person = { name: "Alice", age: 25 };
        greet(person);

        const numbers = [2, 3];
        sum(numbers);
    }
)();

(
    /**
     * @description used to provide initial values for function parameters 
     * or variables when no value or an undefined value is provided. They 
     * ensure that a parameter or variable has a fallback value if one is 
     * not explicitly provided.
     */
    function defaultValues() {
        function greet(name: string = "Anonymous") {
            console.log(`Hello, ${name}!`);
        }

        greet();
        greet("John");
    }
)();

(
    /**
     * @description used to create read-only properties or variables. It 
     * ensures that the value of a property or variable can't be modified 
     * once it is assigned. Essentially, it enforces immutability on the 
     * declared entity.
     */
    function readonlyModifier() {
        type User = {
            name: string,
            readonly address: { street: string, city: string }
        };

        let user: User = {
            name: "John",
            address: { street: "street", city: "city" }
        };

        try {
            // @ts-expect-error
            user.address = { street: "another", city: "city" };
        } catch {
            console.log("Cannot assign to 'address' because it is a read-only property.");
        }

        // OK
        user.name = "name";

        // OK
        user.address.street = "another"
    }
)();

(
    /**
     * @description readonly modifier can be used to make properties of an interface 
     * read-only, meaning they cannot be modified after initialization. However, if 
     * an object is assigned to a different interface that doesn't have the readonly 
     * modifier on its properties, those properties can be modified.
     */
    function readonlyMutation() {
        interface ReadonlyUser {
            readonly name: string;
        };

        interface User {
            name: string;
        }

        let readonlyUser: ReadonlyUser = { name: "John" };
        let user: User = readonlyUser;

        try {
            // @ts-expect-error
            readonlyUser.name = "changed";
        } catch {
            console.log("Cannot assign to 'name' because it is a read-only property.");
        }

        // OK
        user.name = "changed";
    }
)();

(
    /**
     * @description allow you to define the types for accessing properties of an object 
     * using the bracket notation []. It is a way to define dynamic property names and 
     * their corresponding value types. Indexing non-existing property would yield back
     * 'undefined' as a result.
     */
    function indexSignature() {
        interface Dictionary {
            [key: string]: string;
        }
        
        const colors: Dictionary = {
            red: "FF0000",
            green: "00FF00",
            blue: "0000FF",
        };
        
        // OK
        console.log(colors["yellow"]);

        // OK
        console.log(colors["red"]);
    }
)();

(
    /**
     * @description help ensure type safety by checking for unexpected or additional 
     * properties when assigning or passing objects to a type with specified properties.
     * Excess property checks help catch potential mistakes and ensure type safety 
     * in TypeScript by ensuring that objects adhere to the specified type's property 
     * structure. There a multiple ways to bypass the check.
     */
    function excessPropertyCheck() {
        interface Point { x: number; y: number; };
        interface PointExcess { x: number; y: number; [propName: string]: any; }
        
        function printPoint(p: Point): void {
            console.log(`${p.x}, ${p?.y}`);
        }

        try {
            // @ts-expect-error
            let point: Point = { x: 1, y: 2, z: 3 };
        } catch {
            console.log("Object literal may only specify known properties, and 'z' does not exist in type 'Point'.");
        }

        // OK
        let p1: PointExcess = { x: 1, y: 2, z: 3, d: 4 };
        printPoint(p1)

        // OK
        let p2: Point = { x: 1, y: 2, z: 3 } as Point;
        printPoint(p2);
    }
)();