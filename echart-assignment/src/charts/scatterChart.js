import ReactEcharts from "echarts-for-react";

const data = require("../dataSet/data.json");

let colorIntensityArray = data.map((i) => i["Color intensity"]).sort();
let hueArray = data.map((i) => i["Hue"]);

const style = {
  height: "50vh",
  width: "90%",
};

let scatterGraph = {
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
    name: "Color intensity",
    data: colorIntensityArray,
  },
  yAxis: { name: "Hue" },
  series: [
    {
      type: "scatter",

      data: hueArray,
    },
  ],
};

const ScatterChart = () => <ReactEcharts option={scatterGraph} style={style} />;

export default ScatterChart;
