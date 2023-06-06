(function() {
    /*
        Represents numeric values, including integers and floating-point
        numbers. Examples: 42, 3.14.
    */
    let one: number = 1;

    /* 
        Represents textual data enclosed in single quotes (') or double 
        quotes ("). Examples: 'Hello', "World".
    */
    let message: string = "message";

    /* 
        Represents a logical value, either true or false.
    */
    let flag: boolean = true;

    /*
        Represents the absence of any object value. It is a special 
        keyword denoting a null value.
    */
    let none: null = null;

    /*
        Represents an uninitialized or missing value. It is a special 
        keyword denoting an undefined value.
    */
    let missing: undefined = undefined;

    /*
        Represents unique and immutable values that can be used as 
        property keys. Symbols are often used to define unique 
        identifiers for object properties. 
        
        Note, this type is included
        in es2015 and above, so make sure to have your tsconfig.json
        updated to include that in your compiler.
    */
    const s: symbol = Symbol('mySymbol');

    /*
        Represents arbitrary-precision integers, allowing you to work 
        with numbers beyond the range supported by the number type.

        Note, this type is included
        in es2020 and above, so make sure to have your tsconfig.json
        updated to include that in your compiler.
    */
    const bigNumber: bigint = BigInt(9007199254740991);
})();