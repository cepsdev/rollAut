let ws = require("ws");
let ps = require ('process');

let command_port = "3333";
let dt = 100;
testdata = [];

let scenarios = null;

if (process.argv.length > 2) {
    let t = scenarios = require (process.argv[2]);
    testdata = testdata.concat(t.test_data());
    if (process.argv.length > 3)
     dt = parseInt(process.argv[3]);
} else {
    console.error("No Input File Specified.");
    ps.exit(1);
}

const ws_command = new ws.Server({port: command_port});
let watch_command_already_received = false;

ws_command.on("connection", function (ws){
            ws.on("error",function (err) {
                
            });
            ws.on("close",function () {
                watch_command_already_received = false;
            });
            ws.on("message",function incoming(message){

                if (watch_command_already_received){
                    console.log(message);
                    scenarios.handle_command(JSON.parse(message),ws,dt);
                    return;
                }

                let pos = 0;                
                let m = JSON.stringify(testdata[pos++]);
                try{ws.send(m);} catch (err) {}
                watch_command_already_received = true;

                let f = setInterval(
                    function (){
                        if (testdata[pos] == null) {
                            console.log("STOPPED.");
                            clearInterval(f);
                            return;
                        }
                        if (pos >= testdata.length) pos = 0;
                        let m = JSON.stringify(testdata[pos++]);
                        //console.log(m);
                        try{ws.send(m);} catch (err) {clearInterval(f);}
                    }, dt
                );
            });
});
