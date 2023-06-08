(function() {
    // aliases
    type Point = { x: number; y: number; }
    function printPoint(point: Point) {
        console.log(`X: ${point.x} Y: ${point.y}`)
    }

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