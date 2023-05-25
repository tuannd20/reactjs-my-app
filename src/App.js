import React from "react";
// import "./App.css";
import BlogList from "./components/blog/BlogList";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";
import Product from "./components/form/Product";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";
import CardList from "./components/card/CardList";
import Photos from "./components/photo/Photos";

function App() {
  return (
    <div className="">
      {/* <Toggle></Toggle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Product></Product> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/* <Card></Card> */}
      {/* <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      <Photos></Photos>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}
export default App;
