import logo from "./logo.svg";
import "./App.css";

function Feature() {
  return (
    <div className="feature">
      <img src={logo} className="App-logo" alt="logo" />
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. A fugiat consequuntur similique placeat
        ipsa nostrum quos ea necessitatibus ullam quis dicta nobis facilis sed,
        nemo provident, veniam nam neque architecto.
      </p>
    </div>
  );
}

function App() {
  // const name = "SmartDev";
  // const fullName = (firstName, lastName) => {
  //   return `${firstName}  ${lastName}`;
  // };

  return (
    <div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h2>Hello {name === "SmartDev" ? "Code" : "ReactJS"}</h2>
  //       <p>{fullName("Tuan", "Duy")}</p>
  //       {/* <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
