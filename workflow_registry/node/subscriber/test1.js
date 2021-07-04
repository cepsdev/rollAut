
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
}
 ,
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
            },
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"queued"
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"running"
            },
            {
              "class":"attribute",
              "name":"start_time_unix_time",
              "id":"8",
              "deleted":"false",
              "value":1551787575
            },
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"ok"
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0,"name":"market R00002","sap_code":"027"},{"coverage":0,"name":"market S00002","sap_code":"028"},{"coverage":0,"name":"market T00002","sap_code":"029"},{"coverage":0,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0,"name":"market S00002","sap_code":"028"},{"coverage":0,"name":"market T00002","sap_code":"029"},{"coverage":0,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0367647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0,"name":"market T00002","sap_code":"029"},{"coverage":0,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.00735294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0110294
            },
            // HEALTH: OK => CRITICAL
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"critical"
            }           ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0147059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0183824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0220588
            },
            // HEALTH: OK => CRITICAL
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"critical"
            }           ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0257353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0294118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0330882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0367647
            },
            // HEALTH: CRITICAL => FAILURE
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"failure"
            }           ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0404412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0441176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0477941
            },
            // HEALTH: CRITICAL => FAILURE
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"failure"
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0514706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0551471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0588235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0661765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0698529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0735294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0772059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0808824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0845588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0882353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0919118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0955882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.125,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0992647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.125,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.102941
            },
            // HEALTH: OK => CRITICAL
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"critical"
            }         ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.125,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.106618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.125,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.110294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.125,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.113971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.125,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.117647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.125,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.121324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.125,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.125,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.128676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.132353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.136029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.139706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.143382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.147059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.150735
            },
            // HEALTH: FAILURE => CRITICAL
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"critical"
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.154412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.125,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.158088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.125,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.161765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.125,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.165441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.125,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.169118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.125,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.172794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.125,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.176471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.125,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.180147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.125,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.183824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.125,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.1875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.125,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.191176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.125,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.194853
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.125,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.198529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.125,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.202206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.125,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.205882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.125,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.209559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.125,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.213235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.125,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.216912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.125,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.220588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.25,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.224265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.25,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.227941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.231618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.125,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.235294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.125,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.238971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.125,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.242647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.125,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.246324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.125,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.25
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.125,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.253676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.25,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.257353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.25,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.261029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.25,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.264706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.25,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.268382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.25,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.272059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.25,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.275735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.25,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.279412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.25,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.283088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.25,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.286765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.25,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.290441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.25,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.294118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.25,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.297794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.25,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.301471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.25,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.305147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.25,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.308824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.25,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.3125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.25,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.316176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.25,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.319853
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.25,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.323529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.25,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.327206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.25,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.330882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.25,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.334559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.375,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.338235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.375,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.341912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.25,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.345588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.25,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.349265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.25,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.352941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.25,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.356618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.375,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.360294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.375,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.363971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.375,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.367647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.375,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.371324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.375,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.375,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.378676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.375,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.382353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.375,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.386029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.375,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.389706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.375,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.393382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.375,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.397059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.25,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.400735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.25,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.404412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.25,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.408088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.25,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.411765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.375,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.415441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.375,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.419118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.375,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.422794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.375,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.426471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.375,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.430147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.375,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.433824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.375,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.4375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.375,"name":"market J","sap_code":"009"},{"coverage":0.375,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.441176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.375,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.448529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.375,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.452206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.375,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.455882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.375,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.459559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.375,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.463235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.375,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.466912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.5,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.470588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.5,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.474265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.5,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.477941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.5,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.481618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.5,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.485294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.5,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.488971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.5,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.492647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.496324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.25,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.5
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.375,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.503676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.375,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.507353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.375,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.511029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.375,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.514706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.5,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.518382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.5,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.522059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.5,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.525735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.5,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.529412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.625,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.533088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.625,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.536765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.625,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.540441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.625,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.544118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.625,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.547794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.625,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.551471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.625,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.555147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.5,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.558824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.5,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.5625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.5,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.566176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.5,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.569853
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.5,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.573529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.5,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.577206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.5,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.580882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.5,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.584559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.5,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.588235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.5,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.591912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.5,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.595588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.5,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.599265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.5,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.602941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.5,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.606618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.610294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.375,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.613971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.625,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.617647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.625,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.621324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.625,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.625,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.628676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.5,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.632353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.5,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.636029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.5,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.639706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.5,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.643382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.5,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.647059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.5,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.650735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.5,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.654412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.625,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.658088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.625,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.661765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.625,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.665441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.625,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.669118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.625,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.672794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.625,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.676471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.625,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.680147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.625,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.683824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.625,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.6875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.625,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.691176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.625,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.694853
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.625,"name":"market F","sap_code":"005"},{"coverage":0.625,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.698529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.625,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.705882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.75,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.709559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.75,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.713235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.75,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.716912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.75,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.720588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.75,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.724265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.75,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.727941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.75,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.731618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.5,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.735294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.75,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.738971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.75,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.742647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.75,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.746324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.75,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.75
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.625,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.753676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.625,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.757353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.625,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.761029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.625,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.764706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.625,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.768382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.625,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.772059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.625,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.775735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.75,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.779412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.75,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.783088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.75,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.786765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.790441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":0.875,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.794118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.797794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":0.875,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.797794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":0.875,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.801471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":0.875,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.805147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":0.875,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.808824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":0.875,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.8125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.625,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":0.875,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.816176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":0.875,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.823529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":0.875,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.827206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":0.875,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.830882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":0.875,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.834559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.75,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.838235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.75,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.841912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.75,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.845588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.75,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.849265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.75,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.852941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.75,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.856618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.75,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":0.875,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.860294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":0.875,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.867647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":0.875,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.871324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.75,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.75,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.878676
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.75,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.882353
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.75,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.886029
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.75,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.889706
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.75,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.893382
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.75,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.897059
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.75,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.900735
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.75,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.904412
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.75,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.908088
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.75,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.911765
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.915441
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":0.875,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.919118
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.922794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":0.875,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.922794
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":0.875,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.926471
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":0.875,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.930147
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":0.875,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.933824
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.9375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":0.875,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.9375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":0.875,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.941176
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":0.875,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.944853
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":0.875,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.948529
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":0.875,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.952206
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":0.875,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.955882
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":0.875,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.959559
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.75,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.963235
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":0.875,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.966912
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.970588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":0.875,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.970588
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":0.875,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.974265
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":0.875,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.977941
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":0.875,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.981618
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":0.875,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.985294
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":0.875,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.988971
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":1,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.992647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market C","sap_code":"002"},{"coverage":1,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.992647
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.875,"name":"market C","sap_code":"002"},{"coverage":1,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.996324
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market C","sap_code":"002"},{"coverage":1,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"complete"
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":1
            },
            {
              "class":"attribute",
              "name":"end_time_unix_time",
              "id":"11",
              "deleted":"false",
              "value":1551787734
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (C)",
          "id":"3",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market C","sap_code":"002"},{"coverage":1,"name":"market D","sap_code":"003"},{"coverage":1,"name":"market E","sap_code":"004"},{"coverage":1,"name":"market F","sap_code":"005"},{"coverage":1,"name":"market G","sap_code":"006"},{"coverage":1,"name":"market H","sap_code":"007"},{"coverage":1,"name":"market I","sap_code":"008"},{"coverage":1,"name":"market J","sap_code":"009"},{"coverage":1,"name":"market K","sap_code":"010"},{"coverage":1,"name":"market L","sap_code":"011"},{"coverage":1,"name":"market M","sap_code":"012"},{"coverage":1,"name":"market N","sap_code":"013"},{"coverage":1,"name":"market O","sap_code":"014"},{"coverage":1,"name":"market P","sap_code":"015"},{"coverage":1,"name":"market Q","sap_code":"016"},{"coverage":1,"name":"market R","sap_code":"017"},{"coverage":1,"name":"market S","sap_code":"018"},{"coverage":1,"name":"market T","sap_code":"019"},{"coverage":1,"name":"market U","sap_code":"020"},{"coverage":1,"name":"market V","sap_code":"021"},{"coverage":1,"name":"market W","sap_code":"022"},{"coverage":1,"name":"market X","sap_code":"023"},{"coverage":1,"name":"market Y","sap_code":"024"},{"coverage":1,"name":"market Z","sap_code":"025"},{"coverage":1,"name":"market Z00002","sap_code":"026"},{"coverage":1,"name":"market R00002","sap_code":"027"},{"coverage":1,"name":"market S00002","sap_code":"028"},{"coverage":1,"name":"market T00002","sap_code":"029"},{"coverage":1,"name":"market U00002","sap_code":"030"},{"coverage":1,"name":"market V00002","sap_code":"031"},{"coverage":1,"name":"market W00002","sap_code":"032"},{"coverage":1,"name":"market X00002","sap_code":"033"},{"coverage":1,"name":"market Y00002","sap_code":"034"},{"coverage":1,"name":"market Z00003","sap_code":"035"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":1
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"queued"
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"running"
            },
            {
              "class":"attribute",
              "name":"start_time_unix_time",
              "id":"8",
              "deleted":"false",
              "value":1551787815
            },
            {
              "class":"attribute",
              "name":"health",
              "id":"9",
              "deleted":"false",
              "value":"ok"
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0,"name":"market A","sap_code":"000"},{"coverage":0,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market A","sap_code":"000"},{"coverage":0,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.0625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.125,"name":"market A","sap_code":"000"},{"coverage":0.125,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market A","sap_code":"000"},{"coverage":0.125,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.1875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market A","sap_code":"000"},{"coverage":0.25,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.25
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.25,"name":"market A","sap_code":"000"},{"coverage":0.375,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.3125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market A","sap_code":"000"},{"coverage":0.375,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.375,"name":"market A","sap_code":"000"},{"coverage":0.5,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.4375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market A","sap_code":"000"},{"coverage":0.5,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.5
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.5,"name":"market A","sap_code":"000"},{"coverage":0.625,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.5625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market A","sap_code":"000"},{"coverage":0.625,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.625
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.625,"name":"market A","sap_code":"000"},{"coverage":0.75,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.6875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market A","sap_code":"000"},{"coverage":0.75,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.75
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.75,"name":"market A","sap_code":"000"},{"coverage":0.875,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.8125
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":0.875,"name":"market A","sap_code":"000"},{"coverage":0.875,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.875
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market A","sap_code":"000"},{"coverage":0.875,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.9375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market A","sap_code":"000"},{"coverage":0.875,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":0.9375
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market A","sap_code":"000"},{"coverage":1,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"processing_status",
              "id":"7",
              "deleted":"false",
              "value":"complete"
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":1
            },
            {
              "class":"attribute",
              "name":"end_time_unix_time",
              "id":"11",
              "deleted":"false",
              "value":1551787902
            }          ]
        }      ]
    }
  ]
}
 ,
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
          "name":"rollout-2-steps-critical-in60s (B)",
          "id":"1",
          "deleted":"false",
          "children":[
            {
              "class":"attribute",
              "name":"stores",
              "id":"5",
              "deleted":"false",
              "value":[{"coverage":1,"name":"market A","sap_code":"000"},{"coverage":1,"name":"market B","sap_code":"001"}]
            },
            {
              "class":"attribute",
              "name":"coverage",
              "id":"10",
              "deleted":"false",
              "value":1
            }          ]
        }      ]
    }
  ]
}];}



module.exports = {test_data};
