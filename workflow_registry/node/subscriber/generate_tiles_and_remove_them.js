
function test_data(){
  let base = [];
  let counter = [0,0,0,0,0];

  for(let i = 0; i != 1000; ++i){
    
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
                  "name":`Line#1 Rollout ${i} #${counter[i%5]} with health "${health}" `+
                  `${title_ext}`,
                  "id":`${i}`,
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
                      "name":"health",
                      "id":"22",
                      "deleted":"false",
                      "value":`${health}`
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
                      "value":[{"coverage":0,"name":"market A","sap_code":"000"},{"coverage":0,"name":"market B","sap_code":"001"}]
                    },
                    {
                      "class":"attribute",
                      "name":"steps",
                      "id":"6",
                      "deleted":"false",
                      "value":[{"description":"step 1","job_check":"job_check_1","job_check_warn":"job_check_warn_1","job_run":"job_run_1","job_run_error":"job_run_error_1","job_run_warn":"job_run_warn_1","parameters_check":{"pc1":"\"1\"","pc2":"\"gaga\""},"parameters_check_warn":{"pcw1":"\"123\""},"parameters_run":{"pr1":"\"abc\"","pr2":"\"def\"","pr3":"\"ghijkl\""},"parameters_run_error":{"pre1":"\"things aren't going well\""},"parameters_run_warn":{"prw1":"\"456\""}},{"description":"step 2","job_check":"job_check_2","job_check_warn":"job_check_warn_2","job_run":"job_run_2","job_run_error":"job_run_error_2","job_run_warn":"job_run_warn_2","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}}]
                    }          ]
                }  ]
            }
          ]
        }
    );
    ++counter[i%5];
  }

  counter = [0,0,0,0,0];
 
  for(let i = 0; i != 1000; ++i){
    let health = ["critical","fatal","complete","n/a","ok"][i%5];

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
                  "name":`Rollout ${i} #${counter[i%5]} with health "${health}"`,
                  "id":`${i}`,
                  "deleted":"true",
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
                      "name":"health",
                      "id":"22",
                      "deleted":"false",
                      "value":`${health}`
                    },
                    {
                      "class":"attribute",
                      "name":"scheduled_time_unix_time",
                      "id":"3",
                      "deleted":"false",
                      "value":1551816254
                    },
                    {
                      "class":"attribute",
                      "name":"stores",
                      "id":"5",
                      "deleted":"false",
                      "value":[{"coverage":0,"name":"market A","sap_code":"000"},{"coverage":0,"name":"market B","sap_code":"001"}]
                    },
                    {
                      "class":"attribute",
                      "name":"steps",
                      "id":"6",
                      "deleted":"false",
                      "value":[{"description":"step 1","job_check":"job_check_1","job_check_warn":"job_check_warn_1","job_run":"job_run_1","job_run_error":"job_run_error_1","job_run_warn":"job_run_warn_1","parameters_check":{"pc1":"\"1\"","pc2":"\"gaga\""},"parameters_check_warn":{"pcw1":"\"123\""},"parameters_run":{"pr1":"\"abc\"","pr2":"\"def\"","pr3":"\"ghijkl\""},"parameters_run_error":{"pre1":"\"things aren't going well\""},"parameters_run_warn":{"prw1":"\"456\""}},{"description":"step 2","job_check":"job_check_2","job_check_warn":"job_check_warn_2","job_run":"job_run_2","job_run_error":"job_run_error_2","job_run_warn":"job_run_warn_2","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}}]
                    }          ]
                }  ]
            }
          ]
        }
    );
    ++counter[i%5];
  }
  return base;
}






module.exports = {test_data};