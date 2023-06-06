(function() {
    // unknown or any, type unchecked
    let obj: any = { x: 0 };

    // no error during 'development', BUT error during 'runtime'
    // since the declaration type is any, TS cannot check the
    // interface or the behaviour of the object.
    obj.flip();

    // inline typed
    let obj_1: { x: number } = { x: 0 };

    // args
    function printName(user: { firstName: string, lastName?: string }) : void {
        console.log(`${user.firstName}, ${user.lastName}`);
        return;
    }

    
})();