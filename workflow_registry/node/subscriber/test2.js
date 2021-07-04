
function test_data(){

return [
{
"class":"diff",
"watched_location":"rollouts/scheduled",
"children":
  [
    {
      "class":"folder",
      "name":"scheduled",
      "id":"0",
      "deleted":"false",
      "children":[
        {
          "class":"entry",
          "name":"rollout-2-steps-critical-in60s (A) this is a moderately long title which blabla gaga and so on",
          "id":"0",
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
        },
        {
          "class":"entry",
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
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
              "value":101
            },
            {
              "class":"attribute",
              "name":"scheduled_time_unix_time",
              "id":"3",
              "deleted":"false",
              "value":1551787814
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
              "value":[{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}}]
            }          ]
        },
        {
          "class":"entry",
          "name":"rollout-2-steps-critical-in60s (D)",
          "id":"2",
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
              "value":102
            },
            {
              "class":"attribute",
              "name":"scheduled_time_unix_time",
              "id":"3",
              "deleted":"false",
              "value":1551816374
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
              "value":[{"description":"step 5","job_check":"job_check_5","job_check_warn":"job_check_warn_5","job_run":"job_run_5","job_run_error":"job_run_error_5","job_run_warn":"job_run_warn_5","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"step 6","job_check":"job_check_6","job_check_warn":"job_check_warn_6","job_run":"job_run_6","job_run_error":"job_run_error_6","job_run_warn":"job_run_warn_6","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}}]
            }          ]
        },
        {
          "class":"entry",
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
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
              "value":103
            },
            {
              "class":"attribute",
              "name":"scheduled_time_unix_time",
              "id":"3",
              "deleted":"false",
              "value":1551787574
            },
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0,"name":"market R00002","sap_code":"027"},{"coverage":0,"name":"market S00002","sap_code":"028"},{"coverage":0,"name":"market T00002","sap_code":"029"},{"coverage":0,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"steps",
              "id":"6",
              "deleted":"false",
              "value":[{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"legt eine leere Protokolldatei auf Jenkins an","job_check":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_check_warn":"pos_rollout_automated_002_auto_prepare_and_start_rollout_protocol","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}},{"description":"prüft , ob eine Instanz in Jenkins zu dem Markt aufbaubar ist","job_check":"pos_rollout_automated_020_auto_check_store_connect","job_check_warn":"","job_run":"","job_run_error":"","job_run_warn":"","parameters_check":{},"parameters_check_warn":{},"parameters_run":{},"parameters_run_error":{},"parameters_run_warn":{}}]
            }          ]
        }      ]
    }
  ]
},
{
    "class":"diff",
    "watched_location":"rollouts/scheduled",
    "children":
      [
        {
          "class":"folder",
          "name":"scheduled",
          "id":"4",
          "deleted":"false",
          "children":[
            {
              "class":"entry",
              "name":"New Rollout E",
              "id":"0",
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
];}






module.exports = {test_data};