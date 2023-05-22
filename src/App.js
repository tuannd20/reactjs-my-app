import "./App.css";
import BlogList from "./components/blog/BlogList";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="">
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      <Game></Game>
    </div>
  );
}

export default App;
