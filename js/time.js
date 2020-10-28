{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {"text":"Usage By Time","fontSize": 20},

  "hconcat":[{
    "data": {
      "url": "https://raw.githubusercontent.com/marinadeletic/FIT3179/main/time_day.csv"},
    "layer":[
      {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "weekday",
          "type": "ordinal",
          "sort":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
          },
        "y": {
          "aggregate": "average", 
          "field": "n"},
        "size":{"value":5},
        "color":{
          "field":"weekday", 
          "scale": {"scheme": "set1"},
          "sort":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}
        },
        "width":400,
        "height":400
      },
          {
      "mark": "circle",
      "encoding": {
        "x": {
          "field": "weekday",
          "sort":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},
        "y": {
          "aggregate": "average", 
          "field": "n",
          "title":"Average Usage"},
        "size":{"value":200},
        "color":{"field":"weekday"},
        "tooltip":[
          {"title":"Day","field":"weekday"},
          {"title":"Average Useage","field":"n","aggregate":"average", "format":".2d"}]}
      }]
    },
    {
      "data": {
      "url": "https://raw.githubusercontent.com/marinadeletic/FIT3179/main/time_day.csv"},
      "width":400,
      "height":400,
    "layer":[
      {
      "mark": {"type":"line","interpolate":"basis"},
      "encoding": {
        "x": {
          "field": "starttime",
          "type": "quantitative",
          "sort":"x",
          "title":"Hour of Day (24h)"
          },
        "y": {
          "aggregate": "average", 
          "field": "n",
          "title": "Average Usage"},
        "size":{"value":2},
        "color":{
          "field":"weekday", 
          "type": "ordinal",
          "title":"Day",
          "sort":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
          }
        }
      },
      {
        "data":{ "values":{"morning":8}},
        "mark":"rule",
        "encoding": {
          "x":{"field":"morning", "type":"quantitative"},
          "size":{"value":45},
          "opacity":{"value":0.2},
          "color":{"value":"lightgrey"}
          }
      },
          {
        "data":{ "values":{"evening":17.5}},
        "mark":"rule",
        "encoding": {
          "x":{"field":"evening", "type":"quantitative"},
          "size":{"value":45},
          "opacity":{"value":0.2},
          "color":{"value":"lightgrey"}
          }
      }
      ],
      "resolve": {"axis": {"x":"shared"}}
      }
  
    ]
}
