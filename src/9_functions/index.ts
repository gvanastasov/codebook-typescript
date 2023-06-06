(function() {
    function add(a: number, b: number) : number {
        return a + b;
    }

    // OK
    let result = add(5, 4);

    // error
    let result2 = add(5, "4");

    // error
    let result3 = add(5, "4") as string;

    // context - automatically determined from the the context of the invocation,
    // arguments and etc. Both are equivalent, second one being explicit.
    let digits: number[] = [0,1,2,3,4,5,6,7,8,9];

    digits.forEach((x) => console.log(x));
    digits.forEach(
        function(x): void { 
            console.log(x); 
            return;
        }
    );

    // no return value
    function print(message: string): void {
        console.log(message);
        return;
    }
})();
