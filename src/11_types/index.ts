(function() {
    // aliases
    type Point = { x: number; y: number; }
    function printPoint(point: Point) {
        console.log(`X: ${point.x} Y: ${point.y}`)
    }

    // this is NOT extending, but rather JOIN
    // between type definitions.
    type Point3D = Point & {
        z: number;
    }

    // literals
    let literal: 'one';

    // ok
    literal = 'one';

    // error
    literal = 'two';

    let literalDigits: 'one' | 'two' | 'three';
    
    // ok
    literalDigits = 'one';
    // ok
    literalDigits = 'two';
    // ok
    literalDigits = 'three';

    // error
    literalDigits = 'four';

       // unions
       function printNumber(number: string | number): void {
        console.log(number);
        return;
    }
    // no error during 'development'
    printNumber(1);

    // no error during 'development'
    printNumber(2);

    // error
    printNumber({ number: 3 });
})();