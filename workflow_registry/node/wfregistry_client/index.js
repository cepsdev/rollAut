let ws = require("ws");
let wfreg_url = "ws://localhost:3333";
let failed=false;

wfreg_channel = new ws(wfreg_url);
wfreg_channel.on("error", (err) => {console.log(err);} );
wfreg_channel.on("open", () => {
 console.log("Connected");
 /*wfreg_channel.send("Hello");
 wfreg_channel.send(" there!");
 wfreg_channel.send("Hello, again.");
 var arr2 = new ArrayBuffer(12);
 let v = new Uint32Array(arr2);
 v[0] = 1;
 v[1] = 2;
 v[2] = 256;
 
 //wfreg_channel.send(v);
 wfreg_channel.send("hkhkjhkjhkjkj");
 */
 let ctr = 1;

 setInterval(()=>{
     if(failed)
     {
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
         console.log(`******FAILURE ! ${process.argv[2]} FAILURE ! FAILURE !`);
     }
     wfreg_channel.send(`Hello Austria! ${process.argv[2]} ${ctr++}`);
    }
     ,1);
 
 /*wfreg_channel.send(`123456789012345678901234567890123456789012345678901234567890`+
 `123456789012345678901234567890123456789012345678901234567890`+ //120 characters
 `123456789`);
*/
 /*wfreg_channel.send(
 "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
 "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
 "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
 "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
 "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n");
 */

/*wfreg_channel.send(
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "01 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n02 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "03 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n04 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "05 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n06 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "07 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n08 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"+
    "09 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n10 -- ABCDEFGHIJKLMNOPQRSTUVWXYZ\n"
    
    
    
    );*/
    

 wfreg_channel.on("message", (m)=>{
     console.log(m);  
     if (m[0]!='H') {
        failed = true; 
       
     }
 });
});

//setInterval(()=>{},1000);