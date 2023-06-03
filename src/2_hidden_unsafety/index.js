(function() {
    function fn(x) {
        x.flip();
    }
    
    const message = "Dummy message.";
    
    // no error during 'development', BUT error during 'run'
    // even with type safety checks enabled for javascript
    // simply because type cannot be inferred by the invocation
    // and the logic inside the method is hidden, accepting any
    // type of object.
    fn(message);
})();