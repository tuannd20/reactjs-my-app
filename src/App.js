import "./App.css";
import BlogList from "./components/blog/BlogList";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import Product from "./components/form/Product";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="">
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
      {/* <Product></Product> */}
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
}

export default App;
