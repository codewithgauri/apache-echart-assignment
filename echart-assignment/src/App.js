import BarChart from "./charts/barChart";
import ScatterChart from "./charts/scatterChart";
import "./App.css";

function App() {
  return (
    <>
      <div class="container">
        <div class="child">
          <h1 align="center">
            {" "}
            Apache Echart Implementation By- Gaurav Pandey
          </h1>
          <BarChart />
          <ScatterChart />
        </div>
      </div>
    </>
  );
}

export default App;
