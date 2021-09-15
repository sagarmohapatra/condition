import React from "react";
import Sagar from './components/AuthenticationUser';
import Sipu from "./components/Emplyees";
import Hobbies from './components/HobbiesSelector';
let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark justify-contain-center purple-gradient  ">
        <h3 className="text-white text-center">React Hooks condition & looping</h3>
      </nav>
      {/* <Sagar /> */}
      {/* <Sipu /> */}
      <Hobbies />
    </React.Fragment>

  )
}
export default App;