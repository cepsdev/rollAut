
let number_of_stores = 50;

let steps_info = 

  [
    {"description":"This is step 1. Step 1 does 'bla bla bla', please consider more 'bla bla'",
     "job_check":"job_check_1",
     "job_check_warn":"job_check_warn_1",
     "job_run":"job_run_1",
     "job_run_error":"job_run_error_1",
     "job_run_warn":"job_run_warn_1",
     "parameters_check":{
       "pc1":"\"1\"",
       "pc2":"\"gaga\""
      },
      "parameters_check_warn":{
        "pcw1":"\"123\""
      },
      "parameters_run":{
        "pr1":"\"abc\"",
        "pr2":"\"def\"",
        "pr3":"\"ghijkl\""},
      "parameters_run_error":{
        "pre1":"\"things aren't going well\""
      },"parameters_run_warn":{"prw1":"\"456\""}
    },
    { "description":"This is step 2. Step 2 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 3. Step 3 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 4. Step 4 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 5. Step 5 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 6. Step 6 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 7. Step 7 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 8. Step 8 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 9. Step 9 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    { "description":"This is step 10. Step 10 does a lot of 'bla bla bla', please consider far more 'bla bla'",
      "job_check":"job_check_2",
      "job_check_warn":"job_check_warn_2",
      "job_run":"job_run_2",
      "job_run_error":"job_run_error_2",
      "job_run_warn":"job_run_warn_2",
      "parameters_check":{},
      "parameters_check_warn":{},
      "parameters_run":{},
      "parameters_run_error":{},
      "parameters_run_warn":{}
    },
    {"description":"This is step 11. Step 11 does 'bla bla bla', please consider more 'bla bla'",
    "job_check":"job_check_1",
    "job_check_warn":"job_check_warn_1",
    "job_run":"job_run_1",
    "job_run_error":"job_run_error_1",
    "job_run_warn":"job_run_warn_1",
    "parameters_check":{
      "pc1":"\"1\"",
      "pc2":"\"gaga\""
     },
     "parameters_check_warn":{
       "pcw1":"\"123\""
     },
     "parameters_run":{
       "pr1":"\"abc\"",
       "pr2":"\"def\"",
       "pr3":"\"ghijkl\""},
     "parameters_run_error":{
       "pre1":"\"things aren't going well\""
     },"parameters_run_warn":{"prw1":"\"456\""}
   },
   { "description":"This is step 12. Step 12 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 13. Step 13 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 14. Step 14 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 15. Step 15 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 16. Step 16 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 17. Step 17 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 18. Step 18 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 19. Step 19 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   },
   { "description":"This is step 20. Step 20 does a lot of 'bla bla bla', please consider far more 'bla bla'",
     "job_check":"job_check_2",
     "job_check_warn":"job_check_warn_2",
     "job_run":"job_run_2",
     "job_run_error":"job_run_error_2",
     "job_run_warn":"job_run_warn_2",
     "parameters_check":{},
     "parameters_check_warn":{},
     "parameters_run":{},
     "parameters_run_error":{},
     "parameters_run_warn":{}
   }      
];

function test_data(){
  let base = [];
  let counter = [0,0,0,0,0];

  stores = [];

  for(let i = 0; i != number_of_stores;++i){
    stores.push(
      {"coverage":0,"name":`market ${i}`,"sap_code":`${i}`}
    )
  }

  for(let i = 0; i != 3; ++i){
    
    let health = ["critical","fatal","complete","n/a","ok"][i%5];
    let title_ext = "";
    let title_len = 5 + Math.random()*50;
    for (let i = 0; i< title_len;++i ){
      title_ext += ["a","b","c","d"," ", "e","f","g","h","i",
      "A","B","C","D"," ", "E","F","G","H","I",
      "\"","'","`","'","-", "<",">","_",".","|"][Math.floor(Math.random()*30)];
    }

    base.push(
      {
        "class":"diff",
        "watched_location":"rollouts/scheduled",
        "children":
          [
            {
              "class":"folder",
              "name":"scheduled",
              "id":"6",
              "deleted":"false",
              "children":[
                {
                  "class":"entry",
                  "name":`Line#1 Rollout ${i}`,
                  "id":`${i+1}`,
                  "deleted":"false",
                  "children":[
                    {
                      "class":"attribute",
                      "name":"entity",
                      "id":"0",
                      "deleted":"false",
                      "value":"rollout"
                    },
                    {
                      "class":"attribute",
                      "name":"origin",
                      "id":"1",
                      "deleted":"false",
                      "value":"db_import_localhost__rollout"
                    },
                    {
                      "class":"attribute",
                      "name":"db_id",
                      "id":"2",
                      "deleted":"false",
                      "value":100
                    },
                    {
                      "class":"attribute",
                      "name":"scheduled_time_unix_time",
                      "id":"3",
                      "deleted":"false",
                      "value":Math.floor(Date.now()/1000)+3600
                    },
                    {
                      "class":"attribute",
                      "name":"stores",
                      "id":"5",
                      "deleted":"false",
                      "value": stores                      
                    },
                    {
                      "class":"attribute",
                      "name":"steps",
                      "id":"6",
                      "deleted":"false",
                      "value":
                      steps_info
                    }]
                }  ]
            }
          ]
        }
    );
    ++counter[i%5];
  }

  base.push(null);

  return base;
}

function handle_command(cmd,ws,dt){
  if (cmd.what == "command" && cmd.name == "write_attribute_value"){
    let entity_id = cmd.params[0].entity_id;
    let attribute = cmd.params[0].attribute;
    let value = cmd.params[0].value;
    let counter = 0;
    let steps = steps_info.length;
    let start_time_unix_time = Math.floor(Date.now()/1000);


    let f = setInterval(
       function(){
        let coverage = counter/steps;
        stores = [];
        for(let i = 0; i != number_of_stores;++i){
          cur_state = Math.floor(Math.random()*steps);
          console.log(cur_state);
          let entt = [];
          let extt = [];
          for(let i = 0; i <= cur_state;++i){
            entt.push(10*i );
          }
          for(let i = 0; i < cur_state;++i){
            extt.push(9*i );
          }
          let health = ["ok","ok","complete","ok","ok","critical","critical","critical","fatal","fatal"][ Math.round(Math.random()*100) %10];
          stores.push(
            {
              "coverage":coverage,
              "name":`market ${i}`,
              "sap_code":`${i}`,
              health:health,
              id:`${i}`,
              current_state: cur_state,
              entering_times: entt,
              exiting_times: extt
            }
          )
        }
    
        let health = ["ok","ok","ok","ok","ok","critical","critical","critical","fatal","fatal"][counter%10];
         let m = {
          "class":"diff",
          "watched_location":"rollouts/scheduled",
          "children":
            [
              {
                "class":"folder",
                "name":"scheduled",
                "id":"6",
                "deleted":"false",
                "children":[
                  {
                    "class":"entry",
                    "name":`Line#1 Rollout ${entity_id-1}`,
                    "id":`${entity_id}`,
                    "deleted":"false",
                    "children":[
                      {
                        "class":"attribute",
                        "name":"entity",
                        "id":"0",
                        "deleted":"false",
                        "value":"rollout"
                      },
                      {
                        "class":"attribute",
                        "name":"stores",
                        "id":"5",
                        "deleted":"false",
                        "value":stores
                      },
                      {
                        "class":"attribute",
                        "name":"coverage",
                        "id":"7",
                        "deleted":"false",
                        "value": coverage
                      },
                      {
                        "class":"attribute",
                        "name":"health",
                        "id":"8",
                        "deleted":"false",
                        "value": health
                      },
                      {
                        "class":"attribute",
                        "name":"processing_status",
                        "id":"9",
                        "deleted":"false",
                        "value": "running"
                      },            
                      {
                        "class":"attribute",
                        "name":"start_time_unix_time",
                        "id":"10",
                        "deleted":"false",
                        "value": start_time_unix_time
                      },
                      {
                        "class":"attribute",
                        "name":"steps",
                        "id":"6",
                        "deleted":"false",
                        "value": steps_info
                      }          ]
                  }  ]
              }
            ]
          };
          let s = null;
          try{ws.send(s = JSON.stringify(m));} catch(e){clearInterval(f);}
          console.log(s,"","","");
          ++counter;
          if(counter == steps+1) clearInterval(f);        
       }
      ,dt
    );
  }
}






module.exports = {test_data,handle_command};