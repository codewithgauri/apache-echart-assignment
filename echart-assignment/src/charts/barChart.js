import * as React from "react";
import ReactEcharts from "echarts-for-react";

const data = require("../dataSet/data.json");

let AggData = getMallicAverage(data, ["Alcohol"], ["Malic Acid"]);

const AlcoholType = AggData.map((i) => i.Alcohol);
const MallicAcid = AggData.map((i) => i["Malic Acid"]);

//function to calculate Average of Mallic
function getMallicAverage(array, groupKeys, averageKeys) {
  var groups = {},
    result = [];

  array.forEach((o) => {
    var key = groupKeys.map((k) => o[k]).join("|"),
      group = groups[key];

    if (!group) {
      groups[key] = { count: 0, payload: {} };
      group = groups[key];
      averageKeys.forEach((k) => (group[k] = 0));
      groupKeys.forEach((k) => (group.payload[k] = o[k]));
      result.push(group.payload);
    }
    groups[key].count++;
    averageKeys.forEach(
      (k) => (group.payload[k] = (group[k] += o[k]) / group.count)
    );
  });

  return result;
}

//Chart style
const style = {
  height: "50vh",
  width: "90%",
};

let barGraph = {
  color: ["#3398DB"],
  grid: {
    x: 50,
    x2: 140,
    y: 90,
    y2: 50,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  textStyle: {
    fontSize: 15,
  },
  xAxis: {
    name: "Alcohol",
    left: "center",
    top: "center",
    type: "category",
    data: AlcoholType,
  },
  yAxis: {
    type: "value",
    name: "Mallic",
  },
  series: [
    {
      data: MallicAcid,
      type: "bar",
    },
  ],
};

const BarChart = () => <ReactEcharts option={barGraph} style={style} />;

export default BarChart;
