(
    /**
     * @description unknown or any, type unchecked
     * 
     * since the declaration type is any, TS cannot check the
     * interface or the behaviour of the object.
     */
    function unknownType() {
        let obj: any = { x: 0 };
        // no error during 'development', BUT error during 'runtime'
        obj.flip();
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

(
    /**
     * @description type can be defined only for the particular object.
     * When reusability of a definition is needed, we can then make use
     * of type aliases or interfaces.
     */
    function inlineType() {
        let obj: { x: number } = { x: 0 };
    }
)();