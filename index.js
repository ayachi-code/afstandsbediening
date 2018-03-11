const microbit = require('bbc-microbit');
const samsung_TV = require('samsung-remote');

let samsung_tv_nummer = require('node-samsung-remote');
let configuratie_tel = new samsung_tv_nummer({ip: '192.168.178.116'});

let kanaal = 2;

let configuratie = new samsung_TV({
    ip: '192.168.178.116'
});

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
        if (data == "1") {
            configuratie.send('KEY_VOLDOWN',(err) => {
                if (err) {
                    console.log("Hmm er is iets mis " + err)
                } else {
                    console.log("yay")
                }
    
            })

        } else if(data == "2") {
            configuratie.send('KEY_CHDOWN',(err) => {
                if (err) {
                    console.log("Hmm er is iets mis " + err)
                } else {
                    console.log("yay");
                    kanaal -= 1;
                    console.log(kanaal)
                }
            
               })
        }
        
    });


    mb.on("buttonBChange",(data) => {
        console.log("B ingedrukt")
        if (data == "1") {
                configuratie.send('KEY_VOLUP',(err) => {
                    if (err) {
                        console.log("Hmm er is iets mis " + err)
                    } else {
                        console.log("yay")
                    }
                
                   })
    } else if(data == "2") {
        console.log("hey")
        configuratie.send('KEY_CHUP',(err) => {
            if (err) {
                console.log("Hmm er is iets mis " + err)
            } else {
                console.log("yay lekker zappen")
                kanaal += 1;
                console.log(kanaal)
            }
        
           })
    }

    });


    configuratie.isAlive((err) => {
        if (err) {
            console.log('TV is offline');
        } else {
            console.log('TV is aan!');
        }
    });



    mb.connectAndSetUp(() => {
        console.log('microbit is succesvol geconecteerd');
        configuratie_tel.setChannel(kanaal);
        mb.subscribeButtons(() => {
          console.log('Knoppen kan je klikken');
        });
      });

});