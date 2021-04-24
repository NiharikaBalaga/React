// import logo from "./logo.svg";
import "./App.css";
import Myname from "./components/Wish"

import Greet from "./components/Greet";
import Hello from "./components/HelloJSX"
import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import Classclick from "./components/Classclick";
// import EventBinding from "./components/EventBinding";
// import ParentComponent from "./components/ParentComponent";
// import UserGreet from "./components/UserGreet";
// import NameList from "./components/NameList";
// import StyleSheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import Form from "./components/Form";
import "@pnp/polyfill-ie11";
import "polyfill-array-includes";

function App() {
  return (
    <div className="App">
      {/* <Myname/> */}
      <Greet name='Bruce'heroname='Batman'>
        <button>click</button>
      </Greet>
      <Greet name='Clark'heroname='Superman'><p>hi i am superhero</p></Greet>
      <Greet name='Diana'heroname='Wonder Women'/>
      <Welcome name='Bruce'heroname='Batman'/>
      {/* <Hello/> */}
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}

      {/* <UserGreet/> */}
      {/* <ParentComponent/> */}
      {/* <EventBinding/> */}
      {/* <Counter/>
    <FunctionClick/>
    <Classclick/> */}
      {/* <Message/> */}

      {/* <Greet name="Bruce" heroname="Batman">
        <button>Download</button>
      </Greet>
      <Greet name="Clark" heroname="Superman"></Greet>
      <Greet name="Diana" heroname="WonderWomen"></Greet>
      <Welcome name="Dia" heroname="Women"></Welcome> */}
    </div>
  );
}

export default App;
