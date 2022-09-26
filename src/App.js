import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip direction="tooltipDirectionRight"></Tooltip>
      <Tooltip direction="tooltipDirectionLeft"></Tooltip>
      <Tooltip direction="tooltipDirectionTop"></Tooltip>
      <Tooltip direction="tooltipDirectionBottom"></Tooltip>
    </div>
  );
}

export default App;
