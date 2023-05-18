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
    <div className="blog-list">
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
      <BlogItem
        image="https://images.unsplash.com/photo-1543134471-52488faa85af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
      ></BlogItem>
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

function BlogItem(props) {
  return (
    <div className="">
      <div className="blog-image">
        <img src={props.image} alt="" className="blog-image-link" />
      </div>
      <div className="blog-footer">
        <div className="blog-avatar-author">
          <img src={props.avatar} alt="" className="blog-link-avatar" />
        </div>
        <div className="detail">
          <div className="blog-title">
            <h3 className="blog-title-element">
              {props.title || "This is example of title"}
            </h3>
          </div>
          <div className="blog-author">
            <h4 className="blog-author-element">
              {props.author || "This is example of author"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
