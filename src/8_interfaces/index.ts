(
    /**
     * @description core difference between types and interfaces in 
     * TypeScript lies in their nature and behavior. While both types 
     * and interfaces can be used to define custom types, they have 
     * some distinctions:
     *      - declaration - interface vs. type
     *      - extensibility - interfaces can be extended (see below), 
     *        while types cannot be.
     *      - interchangeability 
     *      - features - Types have some features that interfaces do 
     *        not have, such as the ability to define mapped types, 
     *        conditional types, and utility types like Partial, Pick, 
     *        and Record. These features make types more flexible and 
     *        powerful in certain scenarios, especially when working 
     *        with complex type transformations and manipulations.
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
     * @description sed to define the structure and shape of 
     * objects. They provide a way to specify the contract 
     * that an object must adhere to.
     */
    function contract() {
        interface IAnimal {
            readonly sound: string; 
        };

        function makeSound(animal: IAnimal) {
            console.log(`${animal.sound}`);
        }

        let dog: IAnimal = { sound: "bark" };
        let cat: IAnimal = { sound: "meoy" };

        makeSound(dog);
        makeSound(cat);
    }
)();

(
    /**
     * @description create new interfaces that inherit the properties 
     * and methods from existing interfaces. This allows you to build 
     * on top of existing interfaces and define more specialized or 
     * specific interfaces based on them. We can extend from multiple
     * interfaces or chain them.
     */
    function extending() {
        interface IPerson { name: string; };
        interface ISecurity { password: string; };
        interface IUser extends IPerson, ISecurity { email: string; };
        interface IUserAccount extends IUser { account: string };

        function printPerson(person: IPerson): void {
            console.log(person.name);
        }

        function printUser(user: IUser): void {
            console.log(`${user.name}: ${user.email}`);
        }

        let person: IPerson = { name: "Johana" };
        let user: IUser = { name: "John", email: "john@email.com", password: "secret" };
        let userAccount: IUserAccount = { ...user, account: "1" };

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