/*
    This file is NOT disabled from type checking by
    IDE that supports it. Therefore the type is automatically infered
    and checked.
*/

(function() {
    // just a dummy message.
    const message = "Dummy message.";
    
    // no error during 'development', no error during 'runtime'
    message.toLowerCase();
    
    // error during both 'development' and 'runtime' 
    message();
})();