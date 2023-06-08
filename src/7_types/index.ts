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
     * @description allows you to combine multiple types into a single 
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

(
    /**
     * @description allows you to specify exact values that a variable or 
     * parameter can hold. With literal types, you can restrict the 
     * possible values to a specific set of predefined values.
     */
    function literals() {
        type statusCode =  200 | 400 | 404;

        function printStatusCode(statusCode: statusCode): void {
            console.log(statusCode);
        }

        try {
            // @ts-expect-error
            printStatusCode(500);
        } catch {
            console.log("Argument of type '500' is not assignable to parameter of type 'statusCode'.");
        }

        // OK
        printStatusCode(200);
    }
)();

(
    /**
     * @description unknown or any, type unchecked
     * since the declaration type is any, TS cannot check the
     * interface or the behaviour of the object.
     */
    function unknownType() {
        let obj: any = { x: 0 };

        try {
           console.log(obj.y);
        } catch {
            console.log("Property 'y' does not exist on type '{ x: number; }'.");
        }

        // OK
        console.log(obj.x);
    }
)();

(
    /**
     * @description type can be defined only for the particular object.
     * When reusability of a definition is needed, we can then make use
     * of type aliases or interfaces.
     */
    function inlineType() {
        let obj: { x: number } = { x: 0 };

        console.log(obj.x);
    }
)();
