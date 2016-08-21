define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/log_records",
    "title": "Get log records",
    "name": "Get_log_records",
    "version": "1.0.0",
    "group": "Log",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "datetime",
            "description": "<p>Array of objects with &quot;start&quot; and &quot;end&quot; fields in format &quot;3/08/2005 14:00:45&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text for search.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "regex",
            "description": "<p>Regular expression for search.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit. Passed in header.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset. Passed in header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n         \"datetime\": 1204906202,\n         \"record\": \"record one\"\n    },\n    {\n         \"datetime\": 1110211802,\n         \"record\": \"record two\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "filename": "../../src/AppBundle/Controller/LogRecordController.php",
    "groupTitle": "Log"
  }
] });
