import chalk from 'chalk'

/**
 * @description Primitives form the foundational building blocks of data in 
 * TypeScript, providing essential types for representing values. TypeScript 
 * includes several primitive types - see below.By leveraging these primitive 
 * types, TypeScript offers a strong and expressive type system that enhances 
 * code correctness, readability, and maintainability.
 * 
 */

console.log(chalk.bgGreenBright('Chapter 8 - Primitives\n'));

(
    /**
     * @description all javascript primitives have an analogy type
     * definied in TS. Some might require including (and targeting)
     * higher library of ECMA version. Syntax follows general Typescript
     * rules:
     * 
     * {name}: {type} = {value};
     * 
     * 
     */
    function types() {
        console.log(chalk.bgBlueBright("8.1 Types"));

        /**
         * @description Represents numeric values, including integers 
         * and floating-point numbers.
         */
        let one: number = 1;
        console.log(`'${one}' is of type number.`);

        /**
         * @description Represents textual data enclosed in single quotes 
         * (') or double quotes (").
         */
        let message: string = "message";
        console.log(`'${message}' is of type string.`);

        /**
         * @description Represents a logical value, either true or false.
         */
        let flag: boolean = true;
        console.log(`'${flag}' is of type boolean.`);

        /**
         * @description Represents the absence of any object value. It is 
         * a special keyword denoting a null value.
         */
        let none: null = null;
        console.log(`'${none}' is of type null.`);

        /**
         * @description Represents an uninitialized or missing value. It 
         * is a special keyword denoting an undefined value.
         */
        let missing: undefined = undefined;
        console.log(`'${missing}' is of type undefined.`);

        /**
         * @description Represents unique and immutable values that can be 
         * used as property keys. Symbols are often used to define unique 
         * identifiers for object properties. 
         *
         * Note, this type is included
         * in es2015 and above, so make sure to have your tsconfig.json
         * updated to include that in your compiler.
         */
        const s: symbol = Symbol('mySymbol');
        console.log(`'${s.toString()}' is of type symbol.`);

        /**
         * @description Represents arbitrary-precision integers, allowing 
         * you to work with numbers beyond the range supported by the 
         * number type.
         *
         * Note, this type is included
         * in es2020 and above, so make sure to have your tsconfig.json
         * updated to include that in your compiler.
         */
        const bigNumber: bigint = BigInt(9007199254740991);
        console.log(`'${bigNumber.toString()}' is of type bigint.`);
    }
)();

(
    /**
     * @description TypeScript introduces the concept of "truthiness" to 
     * determine the Boolean value of an expression. In TypeScript, truthy 
     * values are those that evaluate to true in a Boolean context, while 
     * falsy values are those that evaluate to false. Understanding 
     * truthiness is essential for logical operations, conditionals, and 
     * working with values that can be coerced to Boolean. It allows for 
     * more precise control flow and type analysis in TypeScript, ensuring 
     * hat expressions are evaluated correctly based on their truthiness.
     */
    function trutness() {
        console.log(chalk.bgBlueBright("\n8.2 thrutness"));

        let falsy: any[] = [0, NaN, "", BigInt(0), null, undefined];
        falsy.forEach((x) => {
            if (!x) {
                console.log(`${x} is false.`);
            }
        });

        let truthy: any[] = [1, "a", BigInt(1), { a: 1 }, function() {}]
        truthy.forEach((x) => {
            if (x) {
                console.log(`${x} is true.`);
            }
        })
    }
)();
