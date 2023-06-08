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
    - [Chapter 1.1: Type](#chapter-1-introduction)
    - [Chapter 1.2: Hidden](#chapter-2-main-topic)
    - [Chapter 1.3: Non exception](#chapter-2-main-topic)
    - [Chapter 1.4: Typo](#chapter-2-main-topic)
    - [Chapter 1.5: Functional](#chapter-2-main-topic)
- [Chapter 2: Hello World!](https://github.com/gvanastasov/codebook-typescript/blob/main/src/2_hello_world/index.ts)
- [Chapter 3: Primitives](https://github.com/gvanastasov/codebook-typescript/blob/main/src/3_primitives/index.ts)
- [Chapter 4: Arrays](https://github.com/gvanastasov/codebook-typescript/blob/main/src/4_arrays/index.ts)
- [Chapter 5: Functions](https://github.com/gvanastasov/codebook-typescript/blob/main/src/5_functions/index.ts)
    - [Chapter 5.1: Syntax](#chapter-2-main-topic)
    - [Chapter 5.2: No return type](#chapter-2-main-topic)
    - [Chapter 5.3: Context](#chapter-2-main-topic)
    - [Chapter 5.3: Explicit arguments](#chapter-2-main-topic)
- [Chapter 6: Objects](https://github.com/gvanastasov/codebook-typescript/blob/main/src/6_objects/index.ts)
- [Chapter 7: Types](https://github.com/gvanastasov/codebook-typescript/blob/main/src/7_types/index.ts)
    - [Chapter 7.1: Aliases](#chapter-2-main-topic)
    - [Chapter 7.2: Union](#chapter-2-main-topic)
    - [Chapter 7.3: Intersection](#chapter-2-main-topic)
    - [Chapter 7.4: Literals](#chapter-2-main-topic)
    - [Chapter 7.5: Unknown type](#chapter-2-main-topic)
    - [Chapter 7.6: Inline type](#chapter-2-main-topic)
- [Chapter 8: Interfaces](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_interfaces/index.ts)
- [Chapter 9: Casting](https://github.com/gvanastasov/codebook-typescript/blob/main/src/9_casting/index.ts)
- [Chapter 10: Narrowing](https://github.com/gvanastasov/codebook-typescript/blob/main/src/10_narrowing/index.ts)
    - [Chapter 10.1: Type guard](#chapter-2-main-topic)
    - [Chapter 10.2: Equality](#chapter-2-main-topic)
    - [Chapter 10.3: Contained](#chapter-2-main-topic)

more to come soon...