(function() {
    // just a dummy message.
    const message = "Dummy message.";
     
    // no error during 'development', BUT error during 'runtime'
    message.toLocaleLowercase();
    message.toLocalLowerCase();
     
    // no error
    message.toLocaleLowerCase();
})();
