(
    /**
     * @description type aliases in TypeScript allow you to create custom 
     * names for existing types, making your code more expressive and 
     * readable. They provide a way to define complex or reusable 
     * types with a single, concise name. Type aliases are particularly 
     * useful when working with complex object structures, union types, 
     * or function signatures, as they enable you to create descriptive 
     * names that reflect the intent and purpose of the type.
     */
    function alias() {
        type Point = { x: number; y: number };

        function printPoint(point: Point) {
            console.log(`X: ${point.x} Y: ${point.y}`)
        }

        try {
            // @ts-expect-error
            printPoint({ x : 5 });
        } catch {
            console.log("The provided argument does not have the expected type.");
        }

        // OK
        printPoint({ x: 5, y: 5 });
    }
)();

(
    /**
     * @description allow you to define a type that can hold values of 
     * multiple different types. It represents a choice or a combination 
     * of types, where a variable or parameter can accept values from 
     * any of the specified types.
     */
    function union() {
        type id = number | string;

        function printId(uid: id) {
            console.log(uid.toString());
        }

        try {
            // @ts-expect-error
            printId({ id: 5 });
        } catch {
            console.log("Argument of type '{ id: number; }' is not assignable to parameter of type 'id'.");
        }

        // OK
        printId(5);

        // OK
        printId("5");
    }
)();

(
    /**
     * @description allow you to combine multiple types into a single 
     * type that includes all the properties and behaviors of the 
     * constituent types. It represents the intersection of the individual 
     * types, meaning the resulting type will have all the common 
     * properties and methods of the types being intersected. To 
     * create an intersection type, you use the & (ampersand) symbol 
     * between the types.
     */
    function intersection() {
        type Square = { width: number, height: number };
        type Color = { color: string };
        
        type ColorSquare = Square & Color;

        function printArea(sq: Square) : void {
            console.log(`Area: ${ sq.width * sq.height }`);
        }

        function printColor(c: Color) : void {
            console.log(`Color: ${c.color}`);
        }

        let square: ColorSquare = { width: 5, height: 5, color: "red" };

        // OK
        printArea(square);

        // OK
        printColor(square);
    }
)();

(function() {

    // this is NOT extending, but rather JOIN
    // between type definitions.
    type Point3D = Point & {
        z: number;
    }

    // literals
    let literal: 'one';

    // ok
    literal = 'one';

    // error
    literal = 'two';

    let literalDigits: 'one' | 'two' | 'three';
    
    // ok
    literalDigits = 'one';
    // ok
    literalDigits = 'two';
    // ok
    literalDigits = 'three';

    // error
    literalDigits = 'four';

       // unions
       function printNumber(number: string | number): void {
        console.log(number);
        return;
    }
    // no error during 'development'
    printNumber(1);

    // no error during 'development'
    printNumber(2);

    // error
    printNumber({ number: 3 });
})();

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
    function narrowing(id: number | string): boolean {
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
    function equalityNarrowing(a: string | number, b: string | boolean): void {
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
    function containedNarrowing() {
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