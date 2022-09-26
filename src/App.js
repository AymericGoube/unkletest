import logo from "./logo.svg";
import "./App.css";
import Tooltip from "./components/Tooltip";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Tooltip direction="Right" content="Hello i'm to the Right !"></Tooltip>
      <Tooltip direction="Left" content="Hello i'm to the Left !"></Tooltip>
      <Tooltip direction="Top" content="Hello i'm to the Top !"></Tooltip>
      <Tooltip
        direction="Bottom"
        content="Hello i'm to the Bottom Hello i'm to the BottomvHello i'm to the BottomHello i'm to the BottomHello i'm to the BottomHello i'm to the BottomHello i'm to the BottomHello i'm to the Bottom!"
      ></Tooltip>
      <Tooltip
        direction="Bottom"
        content={
          <Fragment>
            <h1>Html component</h1>
            Adding <strong>Html</strong> to the components
          </Fragment>
        }
      ></Tooltip>
    </div>
  );
}

export default App;
