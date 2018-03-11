const microbit = require('bbc-microbit');

console.log("De mcirobit zoeken....")
microbit.discover((mb) => {
   console.log("Gevonden")


    mb.on("disconnect",() => {
       console.log("Doei");
       //Stop de programma...
       process.exit(0);
    });

    mb.on("buttonAChange",(data) => {
        console.log("A ingedrukt")
    });


    mb.on("buttonBChange",(data) => {
        console.log("B ingedrukt")
    });



    mb.connectAndSetUp(() => {
        console.log('microbit is succesvol geconecteerd');
        mb.subscribeButtons(function() {
          console.log('Knoppen kan je klikken');
        });
      });

});