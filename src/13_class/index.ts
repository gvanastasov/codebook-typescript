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
)