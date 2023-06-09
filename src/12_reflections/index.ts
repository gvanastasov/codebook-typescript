(
    /**
     * @description an indexed access operator that allows you to create 
     * a union type of all keys (property names) of a given type. It 
     * provides a way to introspect or operate on the keys of an object 
     * or the properties of a type.
     */
    function indexingProperties() {
        type Person = { name: string, age: number };
        type PersonProperties = keyof Person;

        function getProperty(obj: Person, key: PersonProperties) {
            return obj[key];
        }

        const person: Person = {
            name: "John Doe",
            age: 25,
        };

        try {
            // @ts-expect-error
            const email = getProperty(person, "email");
        } catch {
            console.log("Argument of type 'email' is not assignable to parameter of type 'PersonProperties'.");
        }

        // OK
        const name = getProperty(person, "name");
        
        // OK
        const age = getProperty(person, "age");
    }
)