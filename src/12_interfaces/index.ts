(function() { 
     // interface
     interface IPoint3D {
        x: number;
        y: number;
        z: number;
    }

    // extends existing interface
    interface IPoint3D {
        d: number;
    }

    let point3d: Point & IPoint3D = { x: 5, y: 5, z: 5, d: 0 }
})();