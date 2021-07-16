import "./App.css";
import Todos from "./components/Todos";


function App() {
  return <div>
    <Todos items={["Learn react", "Testing app with tsx"]} />
  </div>;
}

export default App;
