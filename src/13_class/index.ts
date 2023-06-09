(
    /**
     * @description provide a way to define blueprints for creating 
     * objects with shared properties and behaviors. They are a 
     * fundamental part of object-oriented programming and allow you 
     * to create reusable and organized code.
     */
    function syntax() {
        class User {};
    }
)();

(
    /**
     * @description variables that belong to a class and define the 
     * state or characteristics of objects created from that class.
     * they can be initialized before instance is constructed.
     */
    function fields() {
        class User {
            name: string;
            flag = true;
        }

        let user = new User();
        user.name = "John";
        if (user.flag) {
            user.flag = false;
        }
    }
)();

(
    /**
     * @description Readonly members are properties that can only be 
     * assigned a value during object initialization or within the 
     * class constructor. Once assigned, their value cannot be changed.
     */
    function readonly() {
        class User {
            readonly deleted = false;
        }

        let user = new User();

        try {
            // @ts-expect-error
            user.deleted = true;
        } catch {
            console.log("Cannot assign to 'deleted' because it is a read-only property.");
        }
    }
)();

(
    /**
     * @description special methods that are invoked when creating a 
     * new instance of a class. They are used to initialize the object's 
     * state and set initial values for its properties. Constructors 
     * are defined using the constructor keyword and can accept 
     * parameters.
     */
    function constructors() {
        class User {
            private name: string;
            constructor (name: string) {
                this.name = name;
            }
        }

        try {
            // @ts-expect-error
            let user = new User();
        } catch {
            console.log("An argument for 'name' was not provided.");
        }

        // OK
        let user = new User("John");
    }
)();

(
    /**
     * @description allow you to define multiple signatures for the 
     * constructor of a class. Each overload provides a different 
     * set of parameters and return types, allowing for flexibility 
     * when creating instances of the class.
     * 
     * By defining multiple constructor overloads, you can provide 
     * different ways to create instances of a class based on the 
     * parameters passed. TypeScript will use the appropriate 
     * overload based on the arguments provided at the time of object 
     * creation, ensuring type safety and enabling more flexible 
     * usage of the class.
     */
    function overloads() {
        class User {
            name: string = "annonymous";
            email: string = "";

            constructor();
            constructor(name: string);
            constructor(name: string, email: string);

            constructor(name?: string, email?: string) {
                if (name) {
                    this.name = name;
                }
                if (email) {
                    this.email = email;
                }
            }
        }

        let annonymous = new User();
        let username = new User("John")
        let user = new User("John", "john@email")
    }
)();

(
    /**
     * @description used to make calls to the parent class constructor 
     * or parent class methods. It allows you to access and invoke the 
     * members defined in the parent class.
     */
    function superCall() {
        class Person {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
        }

        class User extends Person {
            id: string;
            constructor(name: string, id: number) {
                super(name);
                this.id = `${this.name}_${id}`;
            }
        }

        let user = new User("John", 1);
    }
)();

(
    /**
     * @description unctions defined within a class that define the 
     * behavior of objects created from that class. They can be used 
     * to perform actions, manipulate data, or provide functionality. 
     * Like properties, methods can also have different access 
     * modifiers.
     */
    function methods() {
        class User {
            name: string = "annonymous";
            
            say(message: string): void {
                console.log(`${this.name}: ${message}`);
            }
        }

        let user = new User();
        user.say("message"); 
    }
)();

(
    /**
     * @description a way to define special methods that allow you 
     * to access and modify the values of an object's properties. 
     * They provide control over how properties are accessed and 
     * set, allowing you to enforce validation rules, perform 
     * additional actions, or compute values dynamically.
     * 
     * Notice: 
     *      types are narrowed by context, so TS saves us some time.
     *      property with no setter, is a readonly property
     */
    function properties() {
        class User {
            _name: string = "annonymous";
            get name() {
                return this._name;
            }
            set name(value) {
                this._name = value;
            }

            _email: string = "email";
            get email() {
                return this._email;
            }
        }

        let user = new User();

        try {
            // @ts-expect-error
            user.email = "email";
        } catch {
            console.log("Cannot assign to 'email' because it is a read-only property.");
        }

        // OK
        user.name = "John";
    }
)();

(
    /**
     * @description allows a class to inherit properties and methods 
     * from another class, known as the base class or superclass, 
     * and extend or override them to create specialized behavior 
     * in the derived class or subclass.
     */
    function inheritance() {
        class Person {
            name: string;
        }

        class User extends Person {
            id: string;
        }

        class Admin extends Person {
            roles: string[];
        }

        let user = new User();

        try {
            // @ts-expect-error
            console.log(user.roles);
        } catch {
            console.log("Property 'roles' does not exist on type 'User'");
        }

        // OK
        user.name = "John";
        
        // OK
        user.id = "1";
    }
)();

(
    /**
     * @description enforce that the class adheres to the structure 
     * defined by the interface. When a class implements an interface, 
     * it must provide implementations for all the members (properties 
     * and methods) specified by the interface(s).
     */
    function interfaces() {
        interface IPrintable {
            print: () => void;
        }

        interface ISharable {
            share: (url: string) => void;
        }

        class Document implements IPrintable, ISharable {
            content: string = "";
            print() {
                console.log(this.content);
            }
            share(url) {
                console.log(`Document sent to ${url}`);
            }
        }
    }
)();

(
    /**
     * @description a feature that allows a derived class to provide 
     * its own implementation for a method that is already defined 
     * in its base class. When a derived class overrides a method, 
     * it provides a specialized implementation that is specific to
     * the derived class.
     */
    function overrides() {
        class Animal {
            makeSound(): void {
                console.log("Unknown");
            }
        }
        
        class Dog extends Animal {
            override makeSound(): void {
                console.log("Bark");
            }
        }

        let animal: Dog = new Dog();
        animal.makeSound();
    }
)();

(
    /**
     * @description efers to the accessibility or visibility of class 
     * members (properties and methods) from within and outside the 
     * class. TypeScript provides three visibility modifiers: public, 
     * private, and protected, which can be used to control the access 
     * to class members. If not specified, public is used.
     * 
     *      - public are accessible from anywhere
     *      - private are only accessible within the class where they are defined
     *      - protected are accessible within the class where they are 
     *        defined and any subclasses that inherit from that class
     */
    function memberAccess() {
        class Base {
            private a: number = 0;
            protected b: number = 1;
            public c: number = 2;
            
            constructor() {
                // OK
                console.log(`base access private: ${this.a}`);
            }
        }

        class Derived extends Base {
            constructor() {
                super();

                try {
                    // @ts-expect-error
                    console.log(`derived access private: ${this.a}`);
                } catch {
                    console.log("Property 'a' is private and only accessible within class 'Base'.")
                }

                // OK
                console.log(`derived access protected: ${this.b}`)
            }
        }

        let derived = new Derived();
        try {
            // @ts-expect-error
            console.log(`instance access private: ${derived.a}`);
        } catch {
            console.log("Property 'a' is private and only accessible within class 'Base'.")
        }

        try {
            // @ts-expect-error
            console.log(`instance access protected: ${derived.b}`);
        } catch {
            console.log("Property 'b' is protected and only accessible within class 'Base'.")
        }

        // OK
        console.log(`instance access public: ${derived.c}`);
    }
)();

(
    /**
     * @description static members belong to the class itself rather 
     * than to an instance of the class. They are shared among all 
     * instances of the class and can be accessed directly on the 
     * class without creating an instance.
     */
    function staticMembers() {
        class User {
            static count: number = 0;
            constructor() {
                User.count++;
            }
        }

        let user = new User();
        let user2 = new User();

        try {
            // @ts-expect-error
            console.log(user.count);
        } catch {
            console.log("Property 'count' does not exist on type 'User'.");
        }

        // OK
        console.log(User.count);
    }
)();

(
    /**
     * @description a class that cannot be instantiated directly. It 
     * serves as a base class for other classes and provides common 
     * functionality that can be shared among its subclasses. Abstract 
     * classes are designed to be extended and serve as blueprints 
     * for creating derived classes.
     */
    function abstraction() {
        abstract class Animal {
            abstract makeSound(): void;
            
            move(): void {
                console.log("move");
            }
        }
        
        class Dog extends Animal {
            makeSound(): void {
                console.log("Bark");
            }
        }
        
        class Cat extends Animal {
            makeSound(): void {
                console.log("Meow");
            }
        }

        try {
            // @ts-expect-error
            let animal = new Animal();
        } catch {
            console.log("Cannot create an instance of an abstract class.");
        }

        // OK
        let dog = new Dog();

        // OK
        let cat = new Cat();
    }
)();

(
    /**
     * @description the ability of objects of different classes to be 
     * treated as objects of a common parent class. It allows you to 
     * write code that can work with objects of different types as 
     * long as they inherit from a common base class or implement a 
     * common interface.
     */
    function polymorphism() {
        class Person {
            name: string = "annonymous";
        }

        class User extends Person {
            email: string = "email";
        }

        let user: Person = new User();

        try {
            // @ts-expect-error
            console.log(user.email);
        } catch {
            console.log("Property 'email' does not exist on type 'Person'.");
        }

        // OK
        console.log(user.name);

        // OK
        console.log((user as User).email);
    }
)();