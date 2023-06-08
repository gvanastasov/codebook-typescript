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
     * @description object nesting can be defined with any valid type definition
     * for instance inline, or with interface, or with alias.
     * 
     * @param user Object
     * @returns void
     */
    function args(user: { firstName: string, lastName?: string }) : void {
        console.log(`${user.firstName}, ${user.lastName}`);
        return;
    }
)({ firstName: "John", lastName: "Doe" });
