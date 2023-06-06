# **Example Typescript**
Handbook excersies from zero to hero in typescript. 

What typescript?

- Javascript is a scripting language, also better known as interpreted language, meaning that the code is executed line by line at runtime rather than being compiled into a binary form before execution. The interpretation is usually done by a javascript interpretator - some common ones being Node.js, or any browser (with support for javascript, which is probably all of them).
- Typescript is a superset of Javascript, which means that any valid JavaScript code is also valid TypeScript code. But in addition, it introduces a compiler (tsc) that translates TypeScript code into JavaScript, enabling you to leverage the additional features and benefits of TypeScript while still targeting JavaScript as the execution platform.
- TS Scope - tsc considers all files included in the compiler to belong to the same global space. This applies for js files too if they are included by the config. To prevent scope polution, each file is wrapped inisde a  IIFE to separate scopes.
- Technically a typical lifecycle of a javascript codebase, would be development, followed by runtime execution. There are of course other stages of the lifecycle, like transpiling, building, generating, testing, publishing, deploying and etc. For simplicity sake, in here we will sum all pre-runtime stages into 'development' and then 'runtime'. 
- Given all this, its safe to say, Typescript introduces a mandatory stage - compilation - as an additional cost, but prise of greatly reducing bugs is much appreciated.

Why typescript?

1. Static analysis - the codebase becomes 'strongly typed', meaning that objects annotation is bound to interfaces and declarations, allowing you to have the 'shape' or the 'type' of each object before runtime. This improves catching bugs (via type safety) before running the application.
2. Tooling - IDE with support for typescript will greatly improve your coding workflows. VSCode uses typescript under the hood and helps even with JS code bases.
3. Readability - having explicit object definition (of types) helps understand what an object does and how it behaves and is not just a 'random' object with properties. Further TypeScript gives a boost to javascript by introducing language features, like interfaces, generics and other, all of which allows you to further structure one's codebase even better.
4. Maintainability - refactoring is getting easier and more safe, due to type safety being triggered, you can observe dependencies, references and etc. all comming from the static analysis.
5. Adoption - since TypeScript is build on top of Javascript, it can be easily be adopted. Even further, that can happen gradually.

When typescript?

It's worth noting that TypeScript introduces additional complexity compared to writing plain JavaScript. If you're working on a small project, have tight deadlines, or require rapid prototyping, TypeScript might not provide substantial benefits, and JavaScript could be a more suitable choice.

> Reminder - most of the code inhere needs an IDE to make any sense at all, so pull down this repo and try it out for better understanding.

## Chapters
<details>
    <summary>
        <ins>1. Type Unsafety</ins>
    </summary>
Introducing two files, namely enabled.js and disabled.js. Check jsconfig.json, where second one is disalbed from type checking, which will introduce an error during execution of the script, which for enabled.js we will be hinted that theres an error prior to execution.
</details>

<details>
    <summary>
        <ins>2. Hidden Unsafety</ins>
    </summary>
Introducing a single file, which is type checked by IDE, but simply because we are running javascript with no notion of object types and interfaces, we are having an error that only catchable during runtime (or if we have hawk eyes during development).
</details>

<details>
    <summary>
        <ins>3. Non exception unsafety</ins>
    </summary>
Sometimes, valid javascript, can be the cause for unexpected errors to occur, even though the code does not cause exception on its own.
</details>

<details>
    <summary>
        <ins>4. Typo unsafety</ins>
    </summary>
Writing code during development without any type analysis, like Intellisense in VSCode does for us can lead to a large number of errors, especially typos, which are the worst once you find them out.
</details>

<details>
    <summary>
        <ins>5. Uncalled function unsafety</ins>
    </summary>
Calling functions can easily be missed especially when working nested objects (try using fakerjs in js project with no ts).
</details>

<details>
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
</details>

<details>
    <summary>
        <ins>7. Explicit types</ins>
    </summary>

IDE that supports TS (like VSCode using TS under the hood), can inffer the types, but sometimes we want to explicitly specify them. The syntax is `name: type`. Post compilation, the output no longer contains explicit type definitions.
</details>

<details>
    <summary>
        <ins>8. Primitives</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>9. Functions</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>10. Objects</ins>
    </summary>
</details>

<details>
    <summary>
        <ins>11. Types</ins>
    </summary>
</details>
more to come soon...