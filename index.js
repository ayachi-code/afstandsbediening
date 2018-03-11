const microbit = require('bbc-microbit');

console.log("De mcirobit zoeken....")
microbit.discover((mb) => {
   console.log("Gevonden")
});