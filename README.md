# **Codebook - Typescript**
Learn by examples from zero to hero in typescript. This repository was used a practice and resource gathering for with the intent to give a crash course in learning typescript. Some topics might not be covered in depth, or might be missing.

## **Quick Start**
1. clone repo
2. install dependencies `npm install`
3. compile typescript `npm run build`
3. run chapters

```sh
# replace number with chapter you want to see output from.
npm run chapter:1
```

Since most of the things will simply output some dummy text, is much better to just read from top to bottom the scripts themselves. Please refer to the sections below to find quick links, or simply head over to `./src` and navigate yourself around. Probably unnecessery to explain it, but still - make sure your node is up and running - `Node 16` at minimum, specified in engines too. No real reasons, but its the one, the code repo is tested and verified to work with. PS ECMA2020 target in the compiler requires a minimum of node-10v.

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

more to come soon...