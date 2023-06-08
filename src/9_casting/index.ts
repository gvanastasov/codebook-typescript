(function() {
    // assertion
    function sum1(a: number, b: number): any {
        return a + b;
    }

    // without asserting the result of the function
    // the result type would be resolved to the function
    // specified one, which is any.
    let result = sum1(5, 6) as number;
    let result2 = <number>sum1(5, 6);
})();