/*
    This file is explicitly disabled from type checking by
    IDE that supports it. Therefore we dont know the 'type' of message
    object, which makes this script prune to error.
*/

(function() {
    // just a dummy message.
    const message = "Dummy message.";
    
    // no error during 'development', no error during 'runtime'
    message.toLowerCase();
    
    // no error during 'development', BUT error during 'runtime'
    message();
})();