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
)();

(
    /**
     * @description used to obtain the type of a value or expression 
     * at compile-time. When applied to a function or class, it 
     * captures the type information related to that function or 
     * class, including its parameters and return type.
     */
    function typeReflection() {
        function log(name: string): void {
            console.log(`Hello, ${name}!`);
        }
          
        type LogFunction = typeof log;
          
        const message: LogFunction = log;

        try {
            // @ts-expect-error
            message(5);
        } catch {
            console.log("Argument of type 'number' is not assignable to parameter of type 'string'.");
        }

        // OK
        message("John");
    }
)();

(
    /**
     * @description utility type is used to extract the return type 
     * of a function.
     */
    function returnType() {
        function add(a: number, b: number): number {
            return a + b;
          }
          
          type AddResult = ReturnType<typeof add>;
          
          const result: AddResult = add(3, 5);
          
          console.log(result); 
    }
)();