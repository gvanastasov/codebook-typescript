/*
    This file is NOT disabled from type checking by
    IDE that supports it. Therefore the type is automatically infered
    and checked.
*/

// just a dummy message.
const message = "Dummy message.";

// no error during 'build', no error during 'run'
message.toLowerCase();

// error during both 'build' and 'run' 
message();