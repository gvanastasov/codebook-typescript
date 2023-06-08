(
    /**
     * @description when using type definitions with no explicity
     * for example unions, we need to provide 'type guards' in order
     * to ensure type safety. Typescript analyzes those phrases and
     * casts the object to the type guard definition under the hood.
     * 
     * type guard: (typeof {object} === {type})
     * 
     * @param id number | string
     * @returns boolean
     */
    function typeGuard(id: number | string): boolean {
        let result = false;
        try {
            // @ts-expect-error
            result = (id.includes("admin"));
        } catch (error) {
            console.log("Property 'includes' does not exist on type 'number'.")
        }

        // OK
        result = (typeof id === 'string' && id.includes("admin"))

        return result;
    }
)("admin");

(
    /**
     * @description we can also use equality to narrow the type resolution, 
     * giving us a crossed type. The only case when 'a' and 'b' are equal 
     * (value and type) is when they are strings, allowing the compiler to be
     * sure of the interfaces on the object within the block scope of that
     * equlity narrowing.
     * 
     */
    function equality(a: string | number, b: string | boolean): void {
        try {
            // @ts-expect-error
            a.toLowerCase();
        } catch {
            console.log("Property 'a' can be a number, which does not have an interface for 'toLowerCase'.");
        }

        // OK, 
        if (a === b) {
            a.toLowerCase();
        }
    }
)(5, false);

(
    /**
     * @description the "in" operator is used to check if a specified 
     * property exists in an object or if an element exists in an array.
     * For TS compiler, it provides ensurance of the type by narrowing
     * down the types that fit the described interface.
     * 
     */
    function contained() {
        type fish = { swim: () => void, eat: () => void };
        type bird = { fly: () => void, eat: () => void };

        function move(animal: fish | bird) {
            try {
                // @ts-expect-error
                animal.swim();
            } catch {
                console.log("Argument 'animal' might by of type bird, which cannot 'swim'.");
            }

            try {
                if ("eat" in animal) {
                    // @ts-expect-error
                    animal.swim();
                }
            } catch {
                console.log("Argument 'animal' might have an interface 'eat', but theres not enough narrowing of the exact type.")
            }
            
            // OK
            animal.eat();

            if ("swim" in animal) {
                // OK
                animal.swim();
            }
        }
    }
)();

(
    /**
     * @description you can narrow down the type of an object in a 
     * conditional block, allowing TypeScript to infer more specific 
     * types within that block. This enables you to perform 
     * type-specific operations or access properties and methods 
     * that are only available on the narrowed type.
     */
    function instance(x: Date | string) {
        try {
            // @ts-expect-error
            console.log(x.toUTCString());
        } catch {
            console.log("Property 'toUTCString' does not exist on type 'string'");
        }

        if (x instanceof Date) {
            // OK
            console.log(x.toUTCString());
        } else {
            // OK
            console.log(x.toUpperCase());
        }
    }
)(new Date());

(
    /**
     * @description a mechanism that allows you to narrow down 
     * the type of a variable based on the result of an assignment 
     * or a comparison operation. TypeScript uses control flow 
     * analysis to determine the narrowed type of a variable 
     * within specific code blocks.
     */
    function assignment() {
        let x = Math.random() < 0.5 ? 10 : "message";

        try {
            // @ts-expect-error
            x = true;
        } catch {
            console.log("Type 'boolean' is not assignable to type 'string | number'.");
        }

        // OK
        x = 5;

        // OK
        x = "another_message";
    }
)();

(
    /**
     * @description the return type of our function expects a string or a
     * number. Given our 'x' initialized with a boolean value, would throw
     * an error unless the code changes the type of 'x' to either string or
     * number. The moment we have a condition on the else statement, theres
     * a execution possibility in which neither conditions are met, and 'x'
     * type stays boolean, which is unaccepted return type, aka controlling
     * the flow.
     */
    function controlFlow(): string | number {
        let x: string | number | boolean;

        // Error
        x = true;

        if (Math.random()) {
            x = "message";

            // OK
            console.log(x.toLowerCase());
        } else {
            // OK
            x = 5;
        }

        return x;
    }
)();

(
    /**
     * @description narrow down the type of a variable within a conditional 
     * block using a user-defined type predicate. It involves creating a 
     * custom type guard function that returns a boolean value indicating 
     * whether a variable satisfies a specific condition.
     */
    function predicate(input: string | number) {
        function isString(value: any): value is string {
            return typeof value === "string";
        }

        try {
            // @ts-expect-error
            input.toUpperCase();
        } catch {
            console.log("Property 'toUpperCase' does not exist on type 'number'.");
        }

        if (isString(input)) {
            // OK
            console.log(input.toUpperCase());
        }
    }
)("message");