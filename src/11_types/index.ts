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
})();