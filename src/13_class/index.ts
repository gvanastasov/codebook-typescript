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
    function properties() {
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