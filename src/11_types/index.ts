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
})();