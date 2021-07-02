import logo from "./logo.svg";
import "./App.css";
import Restrictedpage from "./Components/Restrictedpage";
import { useState } from "react";

function App() {
  const [isLoggedin, setLoggedin] = useState(0);
  const user = "Rafael";

  const Login = () => {
    setLoggedin(true);
  };
  const Logout = () => {
    setLoggedin(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Restrictedpage
          Logout={Logout}
          user={user}
          isLoggedin={isLoggedin}
          Login={Login}
        ></Restrictedpage>
      </header>
    </div>
  );
}

export default App;
