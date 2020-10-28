{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 400,
  "title": {"text":"Usage By Time","fontSize": 20},

  "data": {
    "url": "https://raw.githubusercontent.com/marinadeletic/FIT3179/main/time_day.csv"},
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
        "field": "n"},
      "size":{"value":2},
      "color":{"field":"weekday"}}
    },
    {
      "data":{ "values":{"morning":7}},
      "mark":"rule",
      "encoding": {
        "x":{"field":"morning"}
        }
    }
    ],
    "resolve": {"scale": {"x": "shared"}}
}
