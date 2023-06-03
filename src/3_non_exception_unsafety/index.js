(function() {
    const user = {
        id: 1,
        name: "admin",
    };

    // no error during 'development', no error during 'runtime'
    // BUT we are trying to access/work with something 'undefined'
    // as much as this is expected behavior for JS, it can also 
    // be considered as error prone piece of code. TS would remind us
    // that this is not existing.
    user.location;
})();