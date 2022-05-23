import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./components/DemoComponent/DemoComponent";
import Sample from "./components/Sample/Sample";
import { Samples } from "./components/Samples/Samples";

function App() {

  const arr = ["Avi", "Ben", "Roy", "Ziv"];
  const paragraph = "para";
  return (
    <>
      <DemoComponent />
      <Sample paragraph={paragraph} div={"2"} span={"3"} span2={"4"} h1={"3"} /> 
      <Samples/>
      <br />
      <div>HTML:</div>
      {arr}
    </>
  );
}

export default App;
