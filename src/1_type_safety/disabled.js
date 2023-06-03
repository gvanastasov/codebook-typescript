/*
    This file is explicitly disabled from type checking by
    IDE that supports it. Therefore we dont know the 'type' of message
    object, which makes this script prune to error.
*/

// just a dummy message.
const message = "Dummy message.";

// no error during 'build', no error during 'run'
message.toLowerCase();

// no error during 'build', BUT error during 'run'
message();