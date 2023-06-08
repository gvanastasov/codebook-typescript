/**
 * TypeScript functions provide a powerful way to encapsulate reusable 
 * blocks of code and enable strong typing for improved code quality and 
 * reliability. With TypeScript, functions can have explicit parameter 
 * and return type annotations, allowing you to catch potential errors 
 * during development. The language supports both named and anonymous 
 * functions, along with arrow functions that provide concise syntax for 
 * defining function expressions. TypeScript functions also offer optional 
 * and default parameters, making them flexible and accommodating to
 *  different usage scenarios. Additionally, TypeScript introduces function 
 * overloading, enabling you to define multiple function signatures with 
 * different parameter and return types. This enhances code expressiveness 
 * and provides comprehensive type checking. Whether you're working with 
 * simple utility functions or complex class methods, TypeScript empowers 
 * you to write robust and maintainable code by enforcing type safety 
 * throughout your application's function ecosystem.
 */

(
    /**
     * @description Just as a regular function in javascript,
     * we pass arguments (with type binding), as well as return
     * type of the function. The syntax follows TS general syntax
     * 
     * {function_name}({arguments}): {type_definition}
     */
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
     * callback fn passed to the forEach are the same (type check wise).
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