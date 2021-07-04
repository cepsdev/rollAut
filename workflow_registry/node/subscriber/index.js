let ws = require("ws");
let wfreg_url = "ws://localhost:3333";
let failed=false;

wfreg_channel = new ws(wfreg_url);
wfreg_channel.on("error", (err) => {console.log(err);} );
wfreg_channel.on("open", () => {
 console.log("Connected");

 let m1 = { what:"command", name: "subscribe", params: ["rollouts/scheduled"]};
 wfreg_channel.send(JSON.stringify(m1));
 
 wfreg_channel.on("message", (m)=>{
     console.log(m,",");
     JSON.parse(m);
 });
});

