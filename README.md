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

What is typescript?

- Javascript is a scripting language, also better known as interpreted language, meaning that the code is executed line by line at runtime rather than being compiled into a binary form before execution. The interpretation is usually done by a javascript interpretator - some common ones being Node.js, or any browser (with support for javascript, which is probably all of them).
- Typescript is a superset of Javascript, which means that any valid JavaScript code is also valid TypeScript code. But in addition, it introduces a compiler (tsc) that translates TypeScript code into JavaScript, enabling you to leverage the additional features and benefits of TypeScript while still targeting JavaScript as the execution platform.
- TS Scope - tsc considers all files included in the compiler to belong to the same global space. This applies for js files too if they are included by the config. To prevent scope polution, each file is wrapped inisde a  IIFE to separate scopes.
- Technically a typical lifecycle of a javascript codebase, would be development, followed by runtime execution. There are of course other stages of the lifecycle, like transpiling, building, generating, testing, publishing, deploying and etc. For simplicity sake, in here we will sum all pre-runtime stages into 'development' and then 'runtime'. 
- Given all this, its safe to say, Typescript introduces a mandatory stage - compilation - as an additional cost, but prise of greatly reducing bugs is much appreciated.

Why to typescript?

- Static analysis - the codebase becomes 'strongly typed', meaning that objects annotation is bound to interfaces and declarations, allowing you to have the 'shape' or the 'type' of each object before runtime. This improves catching bugs (via type safety) before running the application.
- Tooling - IDE with support for typescript will greatly improve your coding workflows. VSCode uses typescript under the hood and helps even with JS code bases.
- Readability - having explicit object definition (of types) helps understand what an object does and how it behaves and is not just a 'random' object with properties. Further TypeScript gives a boost to javascript by introducing language features, like interfaces, generics and other, all of which allows you to further structure one's codebase even better.
- Maintainability - refactoring is getting easier and more safe, due to type safety being triggered, you can observe dependencies, references and etc. all comming from the static analysis.
- Adoption - since TypeScript is build on top of Javascript, it can be easily be adopted. Even further, that can happen gradually.

When to typescript?

It's worth noting that TypeScript introduces additional complexity compared to writing plain JavaScript. If you're working on a small project, have tight deadlines, or require rapid prototyping, TypeScript might not provide substantial benefits, and JavaScript could be a more suitable choice.

Reminder - most of the code inhere needs an IDE to make any sense at all, so pull down this repo and try it out for better understanding.

## **Table of Contents**
- [Chapter 1: Type unsafety](#chapter-1-introduction)
- [Chapter 2: Hidden unsafety](#chapter-2-main-topic)
- [Chapter 3: Non exception unsafety](#chapter-2-main-topic)
- [Chapter 4: Typo unsafety](#chapter-2-main-topic)
- [Chapter 5: Functions unsafety](#chapter-2-main-topic)
- [Chapter 6: Hello World!](#chapter-2-main-topic)
- [Chapter 7: Explicit types](#chapter-2-main-topic)
- [Chapter 8: Primitives](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_primitives/index.ts)
    - [Chapter 8.1: Types](#chapter-2-main-topic)
    - [Chapter 8.2: Trutness](#chapter-2-main-topic)
- [Chapter 9: Functions](https://github.com/gvanastasov/codebook-typescript/blob/main/src/9_functions/index.ts)
    - [Chapter 9.1: Syntax](#chapter-2-main-topic)
    - [Chapter 9.2: No return type](#chapter-2-main-topic)
    - [Chapter 9.3: Context](#chapter-2-main-topic)
- [Chapter 10: Objects](#chapter-2-main-topic)
- [Chapter 11: Types](#chapter-2-main-topic)
    - [Chapter 11: Narrowing](#chapter-2-main-topic)
    - [Chapter 11: Equality Narrowing](#chapter-2-main-topic)
    - [Chapter 11: Contained Narrowing](#chapter-2-main-topic)
- [Chapter 12: Interfaces](#chapter-2-main-topic)
- [Chapter 13: Casting](#chapter-2-main-topic)
- [Chapter 14: Arrays](#chapter-2-main-topic)

<!-- <details>
    <summary>
        <ins>2. Hidden Unsafety</ins>
    </summary>
Introducing a single file, which is type checked by IDE, but simply because we are running javascript with no notion of object types and interfaces, we are having an error that only catchable during runtime (or if we have hawk eyes during development).
</details> -->

<!-- <details>
    <summary>
        <ins>3. Non exception unsafety</ins>
    </summary>
Sometimes, valid javascript, can be the cause for unexpected errors to occur, even though the code does not cause exception on its own.
</details> -->

<!-- <details>
    <summary>
        <ins>4. Typo unsafety</ins>
    </summary>
Writing code during development without any type analysis, like Intellisense in VSCode does for us can lead to a large number of errors, especially typos, which are the worst once you find them out.
</details> -->

<!-- <details>
    <summary>
        <ins>5. Uncalled function unsafety</ins>
    </summary>
Calling functions can easily be missed especially when working nested objects (try using fakerjs in js project with no ts).
</details> -->

<!-- <details>
    <summary>
        <ins>6. Hello world</ins>
    </summary>

```sh
# install ts locally (or globally depending on your prefs)
npm install --save-dev typescript
# run the compiler
npx tsc src/6_hello_world/index.ts
```

The compiler will then type check and compile the TS into JS right next to it. Even though theres a function arg missing, the compiler still compiled the source into JS target. We can prevent compiler from 'emitting' output, if an error has occured via the following:

```sh
npx tsc --noEmitOnError src/6_hello_world/index.ts
```
</details> -->

<!-- <details>
    <summary>
        <ins>7. Explicit types</ins>
    </summary>

IDE that supports TS (like VSCode using TS under the hood), can inffer the types, but sometimes we want to explicitly specify them. The syntax is `name: type`. Post compilation, the output no longer contains explicit type definitions.
</details>

> 8\. `Primitives` - [read code](https://github.com/gvanastasov/codebook-typescript/blob/main/src/8_primitives/index.ts)
<ul>
    <li>8.1 define</li>
    <li>8.1 define</li>
</ul> -->


<!-- > 9\. `Functions` - [read code](https://github.com/gvanastasov/codebook-typescript/blob/main/src/9_functions/index.ts)

<ul>
    <li>9.1 syntax</li>
    <li>9.2 no return type - void</li>
    <li>9.3 context</li>
    <li>9.4 narrowing</li>
</ul> -->

<!-- <details>
    <summary>
        <ins>10. Objects</ins>
    </summary>

- type: any
- arguments
- inline type definition

[Read Here](src/10_objects/index.ts)
</details> -->

<!-- <details>
    <summary>
        <ins>11. Types</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>12. Interfaces</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>13. Casting</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>14. Arrays</ins>
    </summary>
</details> -->
more to come soon...