import './App.css';
//import JsxEx from './components/JsxEx';
// import { Greet, Hello } from './components/Greet';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Hello />*/}
      {/* <JsxEx /> */}
      <Greeting name="JavaScript">Language of the web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for ios app</Greeting>
      <Welcome name="flutter">Language for cross-mobile development</Welcome> 
      <Welcome name="React Native" /> 
      <Welcome name="Java"><button>Click</button></Welcome> 
    </div>
  );
}

export default App;
