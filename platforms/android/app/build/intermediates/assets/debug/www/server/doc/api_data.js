define({ "api": [
  {
    "type": "get",
    "url": "/activities/:id",
    "title": "Get activity detail",
    "name": "GetActivity",
    "description": "<p>Retrieve detail of an activity.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Activity unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Activity unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Display name of the activity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Activity version number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "directory",
            "description": "<p>Location directory of the activity in Sugarizer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Location of the icon in the activity directory</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "favorite",
            "description": "<p>true means that the activity is in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activityId",
            "description": "<p>Reserved for internal use</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index of the activity in the activity list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"org.olpcfrance.Abecedarium\",\n  \"name\": \"Abecedarium\",\n  \"version\": \"5\",\n  \"directory\": \"activities/Abecedarium.activity\",\n  \"icon\": \"activity/activity-icon.svg\",\n  \"favorite\": true,\n  \"activityId\": null,\n  \"index\": 11\n}",
          "type": "json"
        }
      ]
    },
    "group": "Activities",
    "version": "0.6.0",
    "filename": "routes/activities.js",
    "groupTitle": "Activities"
  },
  {
    "type": "get",
    "url": "/activities/",
    "title": "Get all activities",
    "name": "GetAllActivities",
    "description": "<p>Retrieve all activities installed on the server.</p>",
    "group": "Activities",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "activities",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"org.sugarlabs.GearsActivity\",\n    \"name\": \"Gears\",\n    \"version\": \"6\",\n    \"directory\": \"activities/Gears.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 0\n  },\n  {\n    \"id\": \"org.sugarlabs.MazeWebActivity\",\n    \"name\": \"Maze Web\",\n    \"version\": \"2\",\n    \"directory\": \"activities/MazeWeb.activity\",\n    \"icon\": \"activity/activity-icon.svg\",\n    \"favorite\": true,\n    \"activityId\": null,\n    \"index\": 1\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/activities.js",
    "groupTitle": "Activities"
  },
  {
    "type": "post",
    "url": "/Journal/:jid",
    "title": "Add entry",
    "name": "AddEntry",
    "description": "<p>Add an entry in a journal. Return the entry created. If the entry already exist, update it instead.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal where the entry will be created</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>Unique id of the entry in the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata",
            "description": "<p>Metadata of the entries, i.e. characteristics of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title",
            "description": "<p>Title of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title_set_by_user",
            "description": "<p>0 is the title has been changed by user, 1 if it's the original one (usually activity name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity",
            "description": "<p>Activity unique ID used</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity_id",
            "description": "<p>ID of the activity instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.creation_time",
            "description": "<p>Timestamp, creation time of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.timestamp",
            "description": "<p>Timestamp, last time the instance was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.file_size",
            "description": "<p>Here for Sugar compatibility, always set to 0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>User name of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.color",
            "description": "<p>Buddy color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.strike",
            "description": "<p>Buddy strike color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.file",
            "description": "<p>Buddy fill color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the entries, i.e. storage value of the entry. It depends of the entry type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"metadata\": {\n     \"title\": \"Read me !\",\n     \"title_set_by_user\": \"0\",\n     \"activity\": \"org.sugarlabs.Markdown\",\n     \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n     \"creation_time\": ​1423341000747,\n     \"timestamp\": ​1423341000747,\n     \"file_size\": ​0,\n     \"buddy_name\": \"Lionel\",\n     \"buddy_color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     }\n   },\n   \"text\": \"\\\"# Hello World !\\\\n\\\"\",\n   \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/Journal/:jid/:oid",
    "title": "Get entry",
    "name": "GetEntry",
    "description": "<p>Get an entry in a journal.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to get</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oid",
            "description": "<p>Unique id of the entry to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>Unique id of the entry in the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata",
            "description": "<p>Metadata of the entries, i.e. characteristics of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title",
            "description": "<p>Title of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title_set_by_user",
            "description": "<p>0 is the title has been changed by user, 1 if it's the original one (usually activity name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity",
            "description": "<p>Activity unique ID used</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity_id",
            "description": "<p>ID of the activity instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.creation_time",
            "description": "<p>Timestamp, creation time of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.timestamp",
            "description": "<p>Timestamp, last time the instance was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.file_size",
            "description": "<p>Here for Sugar compatibility, always set to 0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>User name of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.color",
            "description": "<p>Buddy color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.strike",
            "description": "<p>Buddy strike color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.file",
            "description": "<p>Buddy fill color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the entries, i.e. storage value of the entry. It depends of the entry type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"metadata\": {\n     \"title\": \"Read me now !\",\n     \"title_set_by_user\": \"0\",\n     \"activity\": \"org.sugarlabs.Markdown\",\n     \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n     \"creation_time\": ​1423341000747,\n     \"timestamp\": ​1423341066120,\n     \"file_size\": ​0,\n     \"buddy_name\": \"Lionel\",\n     \"buddy_color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     }\n   },\n   \"text\": \"\\\"# Hello Sugarizer user !\\\\n\\\\nWelcome to the Sugarizer server cloud storage. You could put everything that you need to share.\\\\n\\\\n\\\"\",\n   \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/journal/:jid",
    "title": "Get journal entries",
    "name": "GetJournalContent",
    "description": "<p>Retrieve full content of a journal. Result include both metadata and text.</p> <p><strong>Deprecated</strong>: it's better to use the &quot;api/journal/:jid/field/:field&quot; to avoid big entries in the result.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to retrieve</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries in the journal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"metadata\": {\n      \"title\": \"Read me !\",\n      \"title_set_by_user\": \"0\",\n      \"activity\": \"org.sugarlabs.Markdown\",\n      \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n      \"creation_time\": ​1423341000747,\n      \"timestamp\": ​1423341066909,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Sugarizer server\",\n      \"buddy_color\": {\n        \"stroke\": \"#005FE4\",\n        \"fill\": \"#FF2B34\"\n      }\n    },\n    \"text\": \"\\\"# Hello Sugarizer user !\\\\n\\\\nWelcome to the Sugarizer server cloud storage. You could put everything that you need to share.\\\\n\\\\n\\\"\",\n    \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n  },\n  {\n    \"metadata\": {\n      \"title\": \"Physics JS Activity\",\n      \"title_set_by_user\": \"0\",\n      \"activity\": \"org.olpg-france.physicsjs\",\n      \"activity_id\": \"43708a15-f48e-49b1-85ef-da4c1419b364\",\n      \"creation_time\": ​1436003632237,\n      \"timestamp\": ​1436025389565,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Lionel\",\n      \"buddy_color\": {\n        \"stroke\": \"#00A0FF\",\n        \"fill\": \"#F8E800\"\n      }\n    },\n    \"text\": \"{\\\"world\\\":[{\\\"type\\\":\\\"circle\\\",\\\"radius\\\":67,\\\"restitution\\\":0.9,\\\"styles\\\":{\\\"fillStyle\\\":\\\"0xe25e36\\\",\\\"strokeStyle\\\":\\\"0x79231b\\\",\\\"lineWidth\\\":1,\\\"angleIndicator\\\":\\\"0x79231b\\\"},\\\"x\\\":476.38179433624566,\\\"y\\\":293.01047102092167},{\\\"type\\\":\\\"convex-polygon\\\",\\\"vertices\\\":[{\\\"x\\\":56,\\\"y\\\":0},{\\\"x\\\":-27.999999999999986,\\\"y\\\":48.49742261192857},{\\\"x\\\":-28.000000000000025,\\\"y\\\":-48.49742261192855}],\\\"restitution\\\":0.9,\\\"styles\\\":{\\\"fillStyle\\\":\\\"0x268bd2\\\",\\\"strokeStyle\\\":\\\"0x0d394f\\\",\\\"lineWidth\\\":1,\\\"angleIndicator\\\":\\\"0x0d394f\\\"},\\\"x\\\":48.905310222358665,\\\"y\\\":331.98056461712133},{\\\"type\\\":\\\"rectangle\\\",\\\"width\\\":64.5,\\\"height\\\":64,\\\"restitution\\\":0.9,\\\"styles\\\":{\\\"fillStyle\\\":\\\"0x58c73c\\\",\\\"strokeStyle\\\":\\\"0x30641c\\\",\\\"lineWidth\\\":1,\\\"angleIndicator\\\":\\\"0x30641c\\\"},\\\"x\\\":152.0965437765946,\\\"y\\\":328.48676667480015}]}\",\n    \"objectId\": \"2acbcd69-aa14-4273-8a9f-47642b41ad9d\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/journal/:jid/field/:field",
    "title": "Get journal entries field",
    "name": "GetJournalContentField",
    "description": "<p>Retrieve content of a journal. Results include only value for the field you asked an the objectId field.</p>",
    "group": "Journal",
    "version": "0.7.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>Field to retrieve (&quot;metadata&quot; or &quot;text&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries in the journal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"metadata\": {\n      \"title\": \"Read me !\",\n      \"title_set_by_user\": \"0\",\n      \"activity\": \"org.sugarlabs.Markdown\",\n      \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n      \"creation_time\": ​1423341000747,\n      \"timestamp\": ​1423341066909,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Sugarizer server\",\n      \"buddy_color\": {\n        \"stroke\": \"#005FE4\",\n        \"fill\": \"#FF2B34\"\n      }\n    },\n    \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n  },\n  {\n    \"metadata\": {\n      \"title\": \"Physics JS Activity\",\n      \"title_set_by_user\": \"0\",\n      \"activity\": \"org.olpg-france.physicsjs\",\n      \"activity_id\": \"43708a15-f48e-49b1-85ef-da4c1419b364\",\n      \"creation_time\": ​1436003632237,\n      \"timestamp\": ​1436025389565,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Lionel\",\n      \"buddy_color\": {\n        \"stroke\": \"#00A0FF\",\n        \"fill\": \"#F8E800\"\n      }\n    },\n    \"objectId\": \"2acbcd69-aa14-4273-8a9f-47642b41ad9d\"\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/journal/:jid/filter/:aid",
    "title": "Get journal entries filtered",
    "name": "GetJournalContentFilter",
    "description": "<p>Retrieve content of a journal filtered by activity. Result include both metadata and text. for all activities matching the activity id.</p> <p><strong>Deprecated</strong>: it's better to use the &quot;api/journal/:jid/filter/:aid/field/:field&quot; to avoid big entries in the result.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aid",
            "description": "<p>Activity unique ID used to filter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries in the journal matching the activity ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"metadata\": {\n      \"title\": \"al-quaknaa's gears\",\n      \"title_set_by_user\": \"1\",\n      \"activity\": \"org.sugarlabs.GearsActivity\",\n      \"activity_id\": \"b0df189a-a2f6-42ee-8f8a-1d24c04b4d92\",\n      \"creation_time\": ​1431431464843,\n      \"timestamp\": ​1431431631314,\n      \"file_size\": ​0,\n      \"buddy_name\": \"alquaknaa-desktop\",\n      \"buddy_color\": {\n        \"stroke\": \"#8BFF7A\",\n        \"fill\": \"#00A0FF\"\n      }\n    },\n    \"text\": \"{\\\"gears\\\":{\\\"cf1d2b3d-f2d9-4500-ae1f-ff27f3056124\\\":{\\\"location\\\":{\\\"x\\\":323.3090909090909,\\\"y\\\":314.2},\\\"rotation\\\":5.64729061670311,\\\"numberOfTeeth\\\":40,\\\"id\\\":\\\"cf1d2b3d-f2d9-4500-ae1f-ff27f3056124\\\",\\\"momentum\\\":0.8956844752899423,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\":\\\"axis\\\"},\\\"pitchRadius\\\":120,\\\"innerRadius\\\":112.5,\\\"outerRadius\\\":126,\\\"hue\\\":359},\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\":{\\\"location\\\":{\\\"x\\\":323.3090909090909,\\\"y\\\":314.2},\\\"rotation\\\":5.64729061670311,\\\"numberOfTeeth\\\":9,\\\"id\\\":\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"cf1d2b3d-f2d9-4500-ae1f-ff27f3056124\\\":\\\"axis\\\",\\\"79c9666f-45a7-4e35-b1df-549d755f1efb\\\":\\\"chain_inside\\\"},\\\"pitchRadius\\\":27,\\\"innerRadius\\\":19.5,\\\"outerRadius\\\":33},\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\":{\\\"location\\\":{\\\"x\\\":710.4202898550725,\\\"y\\\":272.72463768115944},\\\"rotation\\\":4.23546796252743,\\\"numberOfTeeth\\\":12,\\\"id\\\":\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"be1b5178-4b39-4e19-9ddd-0da6978c903f\\\":\\\"axis\\\",\\\"79c9666f-45a7-4e35-b1df-549d755f1efb\\\":\\\"chain_inside\\\"},\\\"pitchRadius\\\":36,\\\"innerRadius\\\":28.5,\\\"outerRadius\\\":42},\\\"be1b5178-4b39-4e19-9ddd-0da6978c903f\\\":{\\\"location\\\":{\\\"x\\\":710.4202898550725,\\\"y\\\":272.72463768115944},\\\"rotation\\\":4.23546796252743,\\\"numberOfTeeth\\\":47,\\\"id\\\":\\\"be1b5178-4b39-4e19-9ddd-0da6978c903f\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\":\\\"axis\\\",\\\"0ff13b7a-c62f-4c47-8234-fc07902acd5d\\\":\\\"meshing\\\"},\\\"pitchRadius\\\":141,\\\"innerRadius\\\":133.5,\\\"outerRadius\\\":147,\\\"hue\\\":70},\\\"0ff13b7a-c62f-4c47-8234-fc07902acd5d\\\":{\\\"location\\\":{\\\"x\\\":884.4202738525415,\\\"y\\\":272.6500127489192},\\\"rotation\\\":0.8930947497056128,\\\"numberOfTeeth\\\":11,\\\"id\\\":\\\"0ff13b7a-c62f-4c47-8234-fc07902acd5d\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"be1b5178-4b39-4e19-9ddd-0da6978c903f\\\":\\\"meshing\\\"},\\\"pitchRadius\\\":33,\\\"innerRadius\\\":25.5,\\\"outerRadius\\\":39}},\\\"chains\\\":{\\\"79c9666f-45a7-4e35-b1df-549d755f1efb\\\":{\\\"id\\\":\\\"79c9666f-45a7-4e35-b1df-549d755f1efb\\\",\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\":\\\"chain_inside\\\",\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\":\\\"chain_inside\\\"},\\\"points\\\":[{\\\"x\\\":705.7587286546609,\\\"y\\\":237.0277211872264},{\\\"x\\\":319.8129200087822,\\\"y\\\":287.4273126295502},{\\\"x\\\":325.5640565468745,\\\"y\\\":341.1056709630593},{\\\"x\\\":713.4269107054506,\\\"y\\\":308.5988656319052}],\\\"rotation\\\":0.9808129796500076,\\\"ignoredGearIds\\\":{\\\"cf1d2b3d-f2d9-4500-ae1f-ff27f3056124\\\":true,\\\"be1b5178-4b39-4e19-9ddd-0da6978c903f\\\":true,\\\"0ff13b7a-c62f-4c47-8234-fc07902acd5d\\\":true},\\\"innerGearIds\\\":{\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\":true,\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\":true},\\\"direction\\\":\\\"counterclockwise\\\",\\\"supportingGearIds\\\":[\\\"b6e6da3a-5a99-4aa7-859a-5d1a21b588fc\\\",\\\"5c869a7d-8f7b-4a8a-abfc-e81f901ca295\\\"],\\\"segments\\\":[{\\\"start\\\":{\\\"x\\\":705.7587286546609,\\\"y\\\":237.0277211872264},\\\"end\\\":{\\\"x\\\":319.8129200087822,\\\"y\\\":287.4273126295502}},{\\\"center\\\":{\\\"x\\\":323.3090909090909,\\\"y\\\":314.2},\\\"radius\\\":27,\\\"startAngle\\\":-1.700648751452407,\\\"endAngle\\\":1.4871816843181391,\\\"direction\\\":\\\"counterclockwise\\\",\\\"start\\\":{\\\"x\\\":319.8129200087822,\\\"y\\\":287.42731262955033},\\\"end\\\":{\\\"x\\\":325.5640565468745,\\\"y\\\":341.10567096305937}},{\\\"start\\\":{\\\"x\\\":325.5640565468745,\\\"y\\\":341.1056709630593},\\\"end\\\":{\\\"x\\\":713.4269107054506,\\\"y\\\":308.5988656319052}},{\\\"center\\\":{\\\"x\\\":710.4202898550725,\\\"y\\\":272.72463768115944},\\\"radius\\\":36,\\\"startAngle\\\":1.4871816843181391,\\\"endAngle\\\":-1.700648751452407,\\\"direction\\\":\\\"counterclockwise\\\",\\\"start\\\":{\\\"x\\\":713.4269107054506,\\\"y\\\":308.59886563190526},\\\"end\\\":{\\\"x\\\":705.7587286546609,\\\"y\\\":237.02772118722655}}]}}}\",\n    \"objectId\": \"859c131a-e7b9-440f-8b87-9cd0f7bbc2b4\"\n  },\n  {\n    \"metadata\": {\n      \"title\": \"Gears Activity\",\n      \"title_set_by_user\": \"1\",\n      \"activity\": \"org.sugarlabs.GearsActivity\",\n      \"activity_id\": \"a4de29cb-34a9-4ebc-96ed-86e062c71713\",\n      \"creation_time\": ​1423341077660,\n      \"timestamp\": ​1423341150632,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Sugarizer server\",\n      \"buddy_color\": {\n        \"stroke\": \"#005FE4\",\n        \"fill\": \"#FF2B34\"\n      }\n    },\n    \"text\": \"{\\\"gears\\\":{\\\"3215b8de-a944-4b78-a20e-ed3f4c52e458\\\":{\\\"location\\\":{\\\"x\\\":280.825,\\\"y\\\":179.7},\\\"rotation\\\":1.3043965283746033,\\\"numberOfTeeth\\\":32,\\\"id\\\":\\\"3215b8de-a944-4b78-a20e-ed3f4c52e458\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\":\\\"axis\\\",\\\"5a222cd5-5d63-4261-97ba-3072b4a25ed3\\\":\\\"meshing\\\"},\\\"pitchRadius\\\":96,\\\"innerRadius\\\":88.5,\\\"outerRadius\\\":102,\\\"hue\\\":251},\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\":{\\\"location\\\":{\\\"x\\\":280.825,\\\"y\\\":179.7},\\\"rotation\\\":1.3043965283746033,\\\"numberOfTeeth\\\":20,\\\"id\\\":\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"3215b8de-a944-4b78-a20e-ed3f4c52e458\\\":\\\"axis\\\",\\\"93cb4289-1ca0-4f06-9d1c-194f51e0a9ab\\\":\\\"chain_inside\\\"},\\\"pitchRadius\\\":60,\\\"innerRadius\\\":52.5,\\\"outerRadius\\\":66,\\\"hue\\\":112},\\\"13422b73-59c4-40ce-b972-481f133b686d\\\":{\\\"location\\\":{\\\"x\\\":674.6969696969697,\\\"y\\\":252.65151515151513},\\\"rotation\\\":0.9858953770180756,\\\"numberOfTeeth\\\":21,\\\"id\\\":\\\"13422b73-59c4-40ce-b972-481f133b686d\\\",\\\"momentum\\\":1.200376813091941,\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"e38a47b7-60fc-41d8-b966-8a31d834f624\\\":\\\"axis\\\",\\\"93cb4289-1ca0-4f06-9d1c-194f51e0a9ab\\\":\\\"chain_inside\\\"},\\\"pitchRadius\\\":63,\\\"innerRadius\\\":55.5,\\\"outerRadius\\\":69,\\\"hue\\\":78},\\\"e38a47b7-60fc-41d8-b966-8a31d834f624\\\":{\\\"location\\\":{\\\"x\\\":674.6969696969697,\\\"y\\\":252.65151515151513},\\\"rotation\\\":0.9858953770180756,\\\"numberOfTeeth\\\":58,\\\"id\\\":\\\"e38a47b7-60fc-41d8-b966-8a31d834f624\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"13422b73-59c4-40ce-b972-481f133b686d\\\":\\\"axis\\\"},\\\"pitchRadius\\\":174,\\\"innerRadius\\\":166.5,\\\"outerRadius\\\":180,\\\"hue\\\":299},\\\"5a222cd5-5d63-4261-97ba-3072b4a25ed3\\\":{\\\"location\\\":{\\\"x\\\":222.72064718177452,\\\"y\\\":346.89116060239303},\\\"rotation\\\":3.839149413050695,\\\"numberOfTeeth\\\":27,\\\"id\\\":\\\"5a222cd5-5d63-4261-97ba-3072b4a25ed3\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"3215b8de-a944-4b78-a20e-ed3f4c52e458\\\":\\\"meshing\\\",\\\"5697e6af-e2f9-44ab-88bb-d83586ee8d64\\\":\\\"meshing\\\"},\\\"pitchRadius\\\":81,\\\"innerRadius\\\":73.5,\\\"outerRadius\\\":87,\\\"hue\\\":204},\\\"5697e6af-e2f9-44ab-88bb-d83586ee8d64\\\":{\\\"location\\\":{\\\"x\\\":334.5179219374951,\\\"y\\\":455.6908359566602},\\\"rotation\\\":3.302446641600337,\\\"numberOfTeeth\\\":25,\\\"id\\\":\\\"5697e6af-e2f9-44ab-88bb-d83586ee8d64\\\",\\\"momentum\\\":0,\\\"group\\\":0,\\\"level\\\":0,\\\"connections\\\":{\\\"5a222cd5-5d63-4261-97ba-3072b4a25ed3\\\":\\\"meshing\\\"},\\\"pitchRadius\\\":75,\\\"innerRadius\\\":67.5,\\\"outerRadius\\\":81,\\\"hue\\\":128}},\\\"chains\\\":{\\\"93cb4289-1ca0-4f06-9d1c-194f51e0a9ab\\\":{\\\"id\\\":\\\"93cb4289-1ca0-4f06-9d1c-194f51e0a9ab\\\",\\\"group\\\":0,\\\"level\\\":1,\\\"connections\\\":{\\\"13422b73-59c4-40ce-b972-481f133b686d\\\":\\\"chain_inside\\\",\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\":\\\"chain_inside\\\"},\\\"points\\\":[{\\\"x\\\":685.7061998043916,\\\"y\\\":190.62090293108156},{\\\"x\\\":291.3099810546875,\\\"y\\\":120.62322645672992},{\\\"x\\\":269.45633133385417,\\\"y\\\":238.61310017949648},{\\\"x\\\":662.7598675975166,\\\"y\\\":314.51027033998645}],\\\"rotation\\\":2.4086381796146483,\\\"ignoredGearIds\\\":{\\\"3215b8de-a944-4b78-a20e-ed3f4c52e458\\\":true,\\\"e38a47b7-60fc-41d8-b966-8a31d834f624\\\":true,\\\"5a222cd5-5d63-4261-97ba-3072b4a25ed3\\\":true,\\\"5697e6af-e2f9-44ab-88bb-d83586ee8d64\\\":true},\\\"innerGearIds\\\":{\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\":true,\\\"13422b73-59c4-40ce-b972-481f133b686d\\\":true},\\\"direction\\\":\\\"counterclockwise\\\",\\\"supportingGearIds\\\":[\\\"13422b73-59c4-40ce-b972-481f133b686d\\\",\\\"93e76628-4b3d-4d74-b693-cea1c42a7442\\\"],\\\"segments\\\":[{\\\"start\\\":{\\\"x\\\":685.7061998043916,\\\"y\\\":190.62090293108156},\\\"end\\\":{\\\"x\\\":291.3099810546875,\\\"y\\\":120.62322645672992}},{\\\"center\\\":{\\\"x\\\":280.825,\\\"y\\\":179.7},\\\"radius\\\":60,\\\"startAngle\\\":-1.3951447919519864,\\\"endAngle\\\":1.7614266231409736,\\\"direction\\\":\\\"counterclockwise\\\",\\\"start\\\":{\\\"x\\\":291.30998105468757,\\\"y\\\":120.62322645672967},\\\"end\\\":{\\\"x\\\":269.45633133385417,\\\"y\\\":238.6131001794965}},{\\\"start\\\":{\\\"x\\\":269.45633133385417,\\\"y\\\":238.61310017949648},\\\"end\\\":{\\\"x\\\":662.7598675975166,\\\"y\\\":314.51027033998645}},{\\\"center\\\":{\\\"x\\\":674.6969696969697,\\\"y\\\":252.65151515151513},\\\"radius\\\":63,\\\"startAngle\\\":1.7614266231409736,\\\"endAngle\\\":-1.3951447919519864,\\\"direction\\\":\\\"counterclockwise\\\",\\\"start\\\":{\\\"x\\\":662.7598675975166,\\\"y\\\":314.5102703399865},\\\"end\\\":{\\\"x\\\":685.7061998043916,\\\"y\\\":190.6209029310813}}]}}}\",\n    \"objectId\": \"453ae0ab-5f85-4e3b-8543-b63a7546107c\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/journal/:jid/filter/:aid/field/:field",
    "title": "Get journal entries filtered field",
    "name": "GetJournalContentFilterField",
    "description": "<p>Retrieve content of a journal filtered by activity. Results include only value for the field you asked an the objectId field for all activities matching the activity id.</p>",
    "group": "Journal",
    "version": "0.7.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aid",
            "description": "<p>Activity unique ID used to filter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>Field to retrieve (&quot;metadata&quot; or &quot;text&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>List of all entries in the journal matching the activity ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"metadata\": {\n      \"title\": \"al-quaknaa's gears\",\n      \"title_set_by_user\": \"1\",\n      \"activity\": \"org.sugarlabs.GearsActivity\",\n      \"activity_id\": \"b0df189a-a2f6-42ee-8f8a-1d24c04b4d92\",\n      \"creation_time\": ​1431431464843,\n      \"timestamp\": ​1431431631314,\n      \"file_size\": ​0,\n      \"buddy_name\": \"alquaknaa-desktop\",\n      \"buddy_color\": {\n        \"stroke\": \"#8BFF7A\",\n        \"fill\": \"#00A0FF\"\n      }\n    },\n    \"objectId\": \"859c131a-e7b9-440f-8b87-9cd0f7bbc2b4\"\n  },\n  {\n    \"metadata\": {\n      \"title\": \"Gears Activity\",\n      \"title_set_by_user\": \"1\",\n      \"activity\": \"org.sugarlabs.GearsActivity\",\n      \"activity_id\": \"a4de29cb-34a9-4ebc-96ed-86e062c71713\",\n      \"creation_time\": ​1423341077660,\n      \"timestamp\": ​1423341150632,\n      \"file_size\": ​0,\n      \"buddy_name\": \"Sugarizer server\",\n      \"buddy_color\": {\n        \"stroke\": \"#005FE4\",\n        \"fill\": \"#FF2B34\"\n      }\n    },\n    \"objectId\": \"453ae0ab-5f85-4e3b-8543-b63a7546107c\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "get",
    "url": "/journal/shared",
    "title": "Get shared journal",
    "name": "GetSharedJournal",
    "description": "<p>Retrieve id of the shared journal on the server. On the server, there is only one journal shared by all users.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the shared journal on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"536d30874326e55f2a22816f\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "delete",
    "url": "/Journal/:jid/:oid",
    "title": "Remove entry",
    "name": "RemoveEntry",
    "description": "<p>Remove an entry in a journal. Return the id of the entry.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oid",
            "description": "<p>Unique id of the entry to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_pull",
            "description": "<p>Container object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "_pull.content",
            "description": "<p>Container object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_pull.content.objectId",
            "description": "<p>Unique id of the entry removed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"$pull\": {\n    \"content\": {\n      \"objectId\": \"d3c7cfc2-8a02-4ce8-9306-073814a2024e\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "put",
    "url": "/Journal/:jid/:oid",
    "title": "Update entry",
    "name": "UpdateEntry",
    "description": "<p>Update an entry in a journal. Return the entry updated. If the entry don't exist, create a new one instead.</p>",
    "group": "Journal",
    "version": "0.6.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jid",
            "description": "<p>Unique id of the journal to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oid",
            "description": "<p>Unique id of the entry to update</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>Unique id of the entry in the journal</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata",
            "description": "<p>Metadata of the entries, i.e. characteristics of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title",
            "description": "<p>Title of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.title_set_by_user",
            "description": "<p>0 is the title has been changed by user, 1 if it's the original one (usually activity name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity",
            "description": "<p>Activity unique ID used</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.activity_id",
            "description": "<p>ID of the activity instance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.creation_time",
            "description": "<p>Timestamp, creation time of the entry</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.timestamp",
            "description": "<p>Timestamp, last time the instance was updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata.file_size",
            "description": "<p>Here for Sugar compatibility, always set to 0</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.name",
            "description": "<p>User name of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "metadata.color",
            "description": "<p>Buddy color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.strike",
            "description": "<p>Buddy strike color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata.color.file",
            "description": "<p>Buddy fill color of the entry creator</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the entries, i.e. storage value of the entry. It depends of the entry type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"metadata\": {\n     \"title\": \"Read me now !\",\n     \"title_set_by_user\": \"0\",\n     \"activity\": \"org.sugarlabs.Markdown\",\n     \"activity_id\": \"caa97e48-d33c-470a-99e9-495ff02afe01\",\n     \"creation_time\": ​1423341000747,\n     \"timestamp\": ​1423341066120,\n     \"file_size\": ​0,\n     \"buddy_name\": \"Lionel\",\n     \"buddy_color\": {\n       \"stroke\": \"#005FE4\",\n       \"fill\": \"#FF2B34\"\n     }\n   },\n   \"text\": \"\\\"# Hello Sugarizer user !\\\\n\\\\nWelcome to the Sugarizer server cloud storage. You could put everything that you need to share.\\\\n\\\\n\\\"\",\n   \"objectId\": \"4837240f-bf78-4d22-b936-3db96880f0a0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/journal.js",
    "groupTitle": "Journal"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Add user",
    "name": "AddUser",
    "description": "<p>Add a new user. Return the user created.</p>",
    "group": "Users",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.strike",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.file",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server (the same for all users)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Sameer\", \n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.GTDActivity\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.olpc-france.LOLActivity\",\n      \"org.sugarlabs.Markdown\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.sugarlabs.PaintActivity\"\n   ],\n   \"language\": \"en\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get all users",
    "name": "GetAllUsers",
    "description": "<p>Retrieve all users registered on the server.</p>",
    "group": "Users",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"name\": \"Walter\", \n    \"color\": {\n      \"stroke\": \"#005FE4\",\n      \"fill\": \"#FF2B34\"\n    },\n    \"favorites\": [\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.olpcfrance.PaintActivity\",\n      \"org.olpcfrance.TamTamMicro\",\n      \"org.olpcfrance.MemorizeActivity\",\n      \"org.olpg-france.physicsjs\",\n      \"org.sugarlabs.CalculateActivity\",\n      \"org.sugarlabs.TurtleBlocksJS\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.RecordActivity\",\n      \"org.olpcfrance.Abecedarium\",\n      \"org.olpcfrance.KAView\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.olpc-france.labyrinthjs\"\n    ],\n    \"language\": \"en\",\n    \"private_journal\": \"536dd30aadcd557f2a9d648a\",\n    \"shared_journal\": \"536d30874326e55f2a22816f\",\n    \"_id\": \"536dd30aadcd557f2a9d648b\"\n },\n {\n    \"name\": \"Martin\", \n    \"color\": {\n      \"stroke\": \"#8BFF7A\",\n      \"fill\": \"#FF8F00\"\n    },\n    \"favorites\": [\n      \"org.olpcfrance.PaintActivity\",\n      \"org.olpcfrance.TamTamMicro\",\n      \"org.olpcfrance.MemorizeActivity\",\n      \"org.olpg-france.physicsjs\",\n      \"org.sugarlabs.CalculateActivity\",\n      \"org.sugarlabs.TurtleBlocksJS\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.RecordActivity\",\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.laptop.WelcomeWebActivity\"\n    ],\n    \"language\": \"es\",\n    \"private_journal\": \"537cb724679ebead166f35f3\",\n    \"shared_journal\": \"536d30874326e55f2a22816f\",\n    \"_id\": \"537cb724679ebead166f35f4\"\n },\n ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user detail",
    "name": "GetUser",
    "description": "<p>Retrieve detail for a specific user.</p>",
    "group": "Users",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.strike",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.file",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Lionel\", \n   \"color\": {\n     \"stroke\": \"#A700FF\",\n     \"fill\": \"#FF8F00\"\n   },\n   \"favorites\": [\n     \"org.olpcfrance.PaintActivity\",\n     \"org.olpcfrance.TamTamMicro\",\n     \"org.olpcfrance.MemorizeActivity\",\n     \"org.olpg-france.physicsjs\",\n     \"org.olpcfrance.RecordActivity\",\n     \"org.olpcfrance.Abecedarium\",\n     \"org.olpcfrance.KAView\",\n     \"org.olpcfrance.FoodChain\",\n     \"org.olpc-france.labyrinthjs\",\n     \"org.olpcfrance.TankOp\",\n     \"org.olpcfrance.Gridpaint\",\n     \"org.olpc-france.LOLActivity\"\n   ],\n   \"language\": \"fr\",\n   \"private_journal\": \"56b271d026068d62059565e4\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"_id\": \"56b271d026068d62059565e5\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/",
    "title": "Update user",
    "name": "UpdateUser",
    "description": "<p>Update an user. Return the user updated.</p>",
    "group": "Users",
    "version": "0.6.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "color",
            "description": "<p>Buddy color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.strike",
            "description": "<p>Buddy strike color</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "color.file",
            "description": "<p>Buddy fill color</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "favorites",
            "description": "<p>Ids list of activities in the favorite view</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Language setting of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "private_journal",
            "description": "<p>Id of the private journal on the server</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shared_journal",
            "description": "<p>Id of the shared journal on the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"name\": \"Sameer\", \n   \"color\": {\n     \"stroke\": \"#00A0FF\",\n     \"fill\": \"#00B20D\"\n   },\n   \"favorites\": [\n      \"org.olpcfrance.Abecedarium\",\n      \"org.sugarlabs.ChatPrototype\",\n      \"org.sugarlabs.Clock\",\n      \"org.olpcfrance.FoodChain\",\n      \"org.sugarlabs.GearsActivity\",\n      \"org.sugarlabs.GTDActivity\",\n      \"org.olpcfrance.Gridpaint\",\n      \"org.olpc-france.LOLActivity\",\n      \"org.sugarlabs.Markdown\",\n      \"org.sugarlabs.MazeWebActivity\",\n      \"org.sugarlabs.PaintActivity\"\n   ],\n   \"language\": \"en\",\n   \"private_journal\": \"5569f4b019e0b4c9525b3c96\",\n   \"shared_journal\": \"536d30874326e55f2a22816f\",\n   \"_id\": \"5569f4b019e0b4c9525b3c97\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
