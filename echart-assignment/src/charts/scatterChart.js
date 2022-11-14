import ReactEcharts from "echarts-for-react";

const data = require("../dataSet/data.json");

let colorIntensityArray = data.map((i) => i["Color intensity"]).sort();
let hueArray = data.map((i) => i["Hue"]);

const style = {
  height: "50vh",
  width: "50%",
};

let scatterGraph = {
  color: ["#3398DB"],
  grid: {
    x: 5,
    x2: 150,
    y: 35,
    y2: 45,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  textStyle: {
    fontSize: 20,
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
