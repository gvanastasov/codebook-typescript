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
