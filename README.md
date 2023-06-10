> BETA: interactivity is not in place yet...
 
# **Codebook - Typescript**
Welcome to Codebook - your comprehensive guide to learning TypeScript! Learn by examples from zero to hero in typescript. This repository serves as a valuable resource for beginners and experienced developers alike, offering a curated collection of examples and explanations to help you master TypeScript.

## **Quick Start**

Follow these steps to get started with Codebook:

1. Clone the repository to your local machine.
2. Install the project dependencies by running npm install.
3. Compile the TypeScript code by running npm run build.
4. Run the examples for each chapter by executing the corresponding npm script.

```sh
# replace number with chapter you want to see output from.
npm run chapter:1
```

Please note that most of the examples will output dummy text. To explore the code in more detail, it's recommended to read the scripts themselves. You can find the source code in the ./src directory and navigate through the chapters.

Ensure that you have Node.js installed on your machine, preferably version 16 or higher as specified in the engines field of the package.json. The code repository has been tested and verified to work with Node.js 16. The ECMA2020 target in the TypeScript compiler requires a minimum of Node.js version 10.

Feel free to explore the quick links provided below or dive into the source code to enhance your learning experience. Happy coding!

> Note: The codebase is continuously tested and maintained, but please be aware that some sections may be under development or not covered in-depth. Your feedback and contributions are highly appreciated to make this repository more valuable for the TypeScript community.

## **What's Inside?**

Codebook covers a wide range of TypeScript topics, starting from the basics and gradually diving into more advanced concepts. Each topic is accompanied by clear and concise examples, allowing you to learn by doing. From primitive types and type aliases to classes, modules, and advanced type systems, Codebook has got you covered.

## **Learning Path**
This repository is designed as a crash course, guiding you from zero to hero in TypeScript. It's structured in a way that allows you to progressively build your knowledge and skills. Start with the fundamentals and work your way up, tackling more complex concepts as you go. Feel free to explore at your own pace and revisit topics whenever you need a refresher.

## **What is typescript?**

- Javascript is a scripting language, also better known as interpreted language, meaning that the code is executed line by line at runtime rather than being compiled into a binary form before execution. The interpretation is usually done by a javascript interpretator - some common ones being Node.js, or any browser (with support for javascript, which is probably all of them).
- Typescript is a superset of Javascript, which means that any valid JavaScript code is also valid TypeScript code. But in addition, it introduces a compiler (tsc) that translates TypeScript code into JavaScript, enabling you to leverage the additional features and benefits of TypeScript while still targeting JavaScript as the execution platform.
- TS Scope - tsc considers all files included in the compiler to belong to the same global space. This applies for js files too if they are included by the config. To prevent scope polution, each file is wrapped inisde a  IIFE to separate scopes.
- Technically a typical lifecycle of a javascript codebase, would be development, followed by runtime execution. There are of course other stages of the lifecycle, like transpiling, building, generating, testing, publishing, deploying and etc. For simplicity sake, in here we will sum all pre-runtime stages into 'development' and then 'runtime'. 
- Given all this, its safe to say, Typescript introduces a mandatory stage - compilation - as an additional cost, but prise of greatly reducing bugs is much appreciated.

## **Why to typescript?**

- Static analysis - the codebase becomes 'strongly typed', meaning that objects annotation is bound to interfaces and declarations, allowing you to have the 'shape' or the 'type' of each object before runtime. This improves catching bugs (via type safety) before running the application.
- Tooling - IDE with support for typescript will greatly improve your coding workflows. VSCode uses typescript under the hood and helps even with JS code bases.
- Readability - having explicit object definition (of types) helps understand what an object does and how it behaves and is not just a 'random' object with properties. Further TypeScript gives a boost to javascript by introducing language features, like interfaces, generics and other, all of which allows you to further structure one's codebase even better.
- Maintainability - refactoring is getting easier and more safe, due to type safety being triggered, you can observe dependencies, references and etc. all comming from the static analysis.
- Adoption - since TypeScript is build on top of Javascript, it can be easily be adopted. Even further, that can happen gradually.

## **When to typescript?**

It's worth noting that TypeScript introduces additional complexity compared to writing plain JavaScript. If you're working on a small project, have tight deadlines, or require rapid prototyping, TypeScript might not provide substantial benefits, and JavaScript could be a more suitable choice.

## **Contribution**

This codebook is an open-source project, and contributions are welcome! If you find any errors, have suggestions for improvements, or want to add more examples to enhance the learning experience, please feel free to submit a pull request. Together, we can make this an even better resource for the TypeScript community.

> Note: This codebook is continuously evolving, and some topics may be missing or not covered in depth. Your feedback and contributions will help make this repository more comprehensive and valuable for everyone.

## **Table of Contents**
- [Chapter 1: Unsafety](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts)
    - [Type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts#L9)
    - [Hidden](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts#L32)
    - [Non exception](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts#L57)
    - [Typo](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts#L84)
    - [Functional](https://github.com/gvanastasov/codebook-typescript/blob/main/src/1_unsafety/index.ts#L112)
- [Chapter 2: Hello World!](https://github.com/gvanastasov/codebook-typescript/blob/main/src/2_hello_world/index.ts)
- [Chapter 3: Primitives](https://github.com/gvanastasov/codebook-typescript/blob/main/src/3_primitives/index.ts)
- [Chapter 4: Collections](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts)
    - [Array Syntax](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts#L11)
    - [Array Readonly](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts#L29)
    - [Tuples](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts#L57)
    - [Sets](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts#L93)
    - [Maps](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts#L110)
- [Chapter 5: Functions](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts)
    - [Syntax](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L27)
    - [No return type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L59)
    - [Context](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L71)
    - [Explicit arguments](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L91)
    - [Call signature](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L120)
    - [Constructor signature](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L158)
    - [Overload signature](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L197)
    - [Rest parameters](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L225)
    - [Spread arguments](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts#L251)
- [Chapter 6: Objects](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts)
    - [Optional property](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L7)
    - [Non null assertion](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L30)
    - [Optional chaining](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L55)
    - [Anonymous](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L83)
    - [Reference: this](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L99)
    - [Destructuring](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L137)
    - [Default values](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L161)
    - [Readonly modifier](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L178)
    - [Readonly mutation](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L211)
    - [Index signature](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L242)
    - [Excess property check](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts#L269)
- [Chapter 7: Types](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts)
    - [Aliases](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L11)
    - [Union](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L37)
    - [Intersection](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L69)
    - [Literals](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L99)
    - [Unknown type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L124)
    - [Inline type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L144)
    - [Never](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L160)
    - [Function type expression](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L206)
    - [Erasure](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L236)
    - [Object type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L264)
    - [Function type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L290)
    - [Conditional type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L315)
    - [Mapped type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L356)
    - [String manipulation types](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts#L356)
- [Chapter 8: Interfaces](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_interfaces/index.ts)
    - [Syntax](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_interfaces/index.ts#L18)
    - [Contract](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_interfaces/index.ts#L36)
    - [Extending](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_interfaces/index.ts#L61)
- [Chapter 9: Casting](https://github.com/gvanastasov/codebook-typescript/blob/main/src/9_casting/index.ts)
- [Chapter 10: Narrowing](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts)
    - [Type guard](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L13)
    - [Equality](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L38)
    - [Contained](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L61)
    - [Instance](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L101)
    - [Assignment](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L127)
    - [Control flow](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L155)
    - [Predicate](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts#L182)
- [Chapter 11: Generics](https://github.com/gvanastasov/codebook-typescript/blob/main/src/11_generics/index.ts)
    - [Return type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/11_generics/index.ts#L18)
    - [Inference](https://github.com/gvanastasov/codebook-typescript/blob/main/src/11_generics/index.ts#L45)
    - [Constraints](https://github.com/gvanastasov/codebook-typescript/blob/main/src/11_generics/index.ts#L71)
    - [Generics](https://github.com/gvanastasov/codebook-typescript/blob/main/src/11_generics/index.ts#L105)
- [Chapter 12: Reflections](https://github.com/gvanastasov/codebook-typescript/blob/main/src/12_reflections/index.ts)
    - [Indexing properties](https://github.com/gvanastasov/codebook-typescript/blob/main/src/12_reflections/index.ts#L8)
    - [Type reflection](https://github.com/gvanastasov/codebook-typescript/blob/main/src/12_reflections/index.ts#L43)
    - [Return type](https://github.com/gvanastasov/codebook-typescript/blob/main/src/12_reflections/index.ts#L69)
    - [Indexing types](https://github.com/gvanastasov/codebook-typescript/blob/main/src/12_reflections/index.ts#L89)
- [Chapter 13: Class](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts)
    - [Syntax](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L8)
    - [Fields](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L18)
    - [Readonly](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L39)
    - [Constructors](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L63)
    - [Overloads](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L97)
    - [Super call](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L128)
    - [Methods](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L156)
    - [Properties](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L156)
    - [Inheritance](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L156)
    - [Interfaces](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L156)
    - [Overrides](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L156)
    - [Member access](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L316)
    - [Static members](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L371)
    - [Abstraction](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L402)
    - [Polymorphism](https://github.com/gvanastasov/codebook-typescript/blob/main/src/13_class/index.ts#L446)

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## **Contributing**
Contributions to this codebook are welcome! If you have any bug reports, feature requests, or would like to submit a pull request, please follow the guidelines outlined in the [CONTRIBUTING](CONTRIBUTING.md) file.

## **Roadmap**
The future plans for this codebook include expanding the coverage of TypeScript topics, adding more examples, and providing interactive exercises to reinforce learning. Additionally, we aim to incorporate community feedback and address any reported issues.

## **Acknowledgements**
Special thanks to the following individuals and projects for their contributions, inspiration, and support:
- [TypeScript](https://www.typescriptlang.org/): The TypeScript language and community.
- [Awesome TS](https://github.com/dzharii/awesome-typescript): A curated list of awesome TypeScript resources.

## **Resources**
Here are some additional resources to further enhance your TypeScript learning:
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

## **Support**
If you encounter any issues or have any questions, please feel free to reach out by creating an issue in the [GitHub repository](https://github.com/gvanastasov/codebook-typescript).

## **Conclusion**
Thank you for your interest in this codebook! We hope this collection of TypeScript examples and explanations helps you on your learning journey. We encourage you to explore the code, experiment, and provide feedback. Happy coding!
