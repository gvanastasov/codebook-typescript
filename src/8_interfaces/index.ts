(
    /**
     * @description sed to define the structure and shape of 
     * objects. They provide a way to specify the contract 
     * that an object must adhere to.
     */
    function syntax() { 
        interface IPoint3D {
            x: number;
            y: number;
        }

        let p: IPoint3D = { x: 5, y: 5 };

        console.log(`Coordinates: ${p.x}, ${p.y}`);
    }
)();

(
    /**
     * @description create new interfaces that inherit the properties 
     * and methods from existing interfaces. This allows you to build 
     * on top of existing interfaces and define more specialized or 
     * specific interfaces based on them.
     */
    function extending() {
        interface IPerson { name: string; };
        interface IUser extends IPerson { email: string; };

        function printPerson(person: IPerson): void {
            console.log(person.name);
        }

        function printUser(user: IUser): void {
            console.log(`${user.name}: ${user.email}`);
        }

        let person: IPerson = { name: "Johana" };
        let user: IUser = { name: "John", email: "john@email.com" };
        
        try {
            // @ts-expect-error
            printUser(person);
        } catch {
            console.log("Property 'email' is missing in type 'IPerson' but required in type 'IUser'");
        }

        // OK
        printPerson(person);

        // OK
        printPerson(user);

        // OK
        printUser(user);
    }
)();