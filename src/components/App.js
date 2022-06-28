import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./spteams/StreamCreate";
import StreamDelete from "./spteams/StreamDelete";
import StreamEdit from "./spteams/StreamEdit";
import StreamList from "./spteams/StreamList";
import StreamShow from "./spteams/StreamShow";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
}
const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
const Login = () => {
  return <div>Login</div>;
};

export default App;
