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
     * @description explicit arguments in functions refer to explicitly 
     * declaring the types of the function parameters. By specifying 
     * the types of the arguments, you provide clarity and enforce type 
     * safety within the function.
     */
    function explicitArguments() {
        function sayHelloWorld(person: string, date: Date): void {
            console.log(`${person} [${date.toDateString()}]: Hello world!`);
        }
        
        try {
            // @ts-expect-error
            sayHelloWorld("John", Date());
        } catch {
            console.log("Argument of type 'string' is not assignable to parameter of type 'Date'.");
        }

        // OK
        sayHelloWorld("Alice", new Date());
    }
)();

(
    /**
     * @description in Javascript, functions are treated as objects, meaning
     * that apart from being callable, they can also hold other properties.
     * In Typescript this can be achied by creating a definition with a call
     * signature. Notice the semicolumn between the args and the return type
     * as identifier of call signature. Instances can be initialized two ways,
     * either with Object.assign or via automatic type assertion.
     * 
     * Syntax:
     *      { (args): return_type }
     */
    function callSignatures() {
        type MathOperation = {
            description: string,
            (a: number, b: number): number,
        };

        let add: MathOperation = Object.assign(
            (a, b) => a + b,
            {
                description: "Adds two numbers.",
            }
        );

        function multiple(a: number, b: number): number { return a * b };
        multiple.description = "Multiplies two numbers."

        // OK
        console.log(add.description);
        
        // OK
        console.log(add(3, 5));

        // OK
        (function logResult(fn: MathOperation): void {
            let result = fn(3, 5);
            console.log(fn.description);
            console.log(`3 * 5 = ${result}`);
        })(multiple);
    }
)();

(
    /**
     * @description used to define the shape and type of a constructor function 
     * for creating new objects. Construct signatures are similar to call 
     * signatures but are specifically used for constructing instances of classes 
     * or objects.
     */
    function constructorSignature() {
        class User {
            constructor(firstName: string, lastName: string) {
                // silence is gold.
            }
        }

        class LoggedUser {
            constructor(firstName: string, lastName: string) {
                console.log(`${firstName} ${lastName}`);
            }
        }

        type UserConstructor = {
            new (firstName: string, lastName: string): User,
        };

        let userConstructor: UserConstructor = User;
        let loggedUserConstructor: UserConstructor = LoggedUser;

        function fn(ctor: UserConstructor) {
            return new ctor("John", "Doe");
        }

        // OK
        let user = fn(userConstructor);

        // OK
        let loggedUser = fn(loggedUserConstructor);
    }
)();

(
    /**
     * @description allow you to provide multiple function signatures for a single 
     * function implementation. By using function overrides, you can define different 
     * sets of parameters and return types for a function, providing flexibility 
     * in how the function can be called while maintaining type safety.
     */
    function overloads() {
        function greet(name: string): void;
        function greet(firstName: string, lastName: string): void;

        function greet(arg1: string, arg2?: string): void {
            if (arg2) {
                console.log(`Hello, ${arg1} ${arg2}!`);
            } else {
                console.log(`Hello, ${arg1}!`);
            }
        }

        // OK
        greet("John");
        
        // OK
        greet("John", "Doe");
    }
)();