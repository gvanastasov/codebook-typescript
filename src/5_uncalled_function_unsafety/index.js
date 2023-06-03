/*
    Calling functions can easily be missed especially
    when working nested objects (try using fakerjs in
    js project with no ts)
*/

(function() {
    function flipCoin() {
        // no error during 'development', BUT error during 'runtime'
        return Math.random < 0.5;
    }

    // no error during 'development', no error during 'runtime'
    // BUT we expected our object.isTails to be boolean and now its
    // a function. See chapter.3 for more details.
    const object = {
        isTails: flipCoin
    }
})();