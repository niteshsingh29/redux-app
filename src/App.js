import React from "react";
import Userlist from "./components/Userlist";
import Adduser from "./components/Adduser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edituser from "./components/Edituser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Adduser />}></Route>
          <Route exact path="/userlist" element={<Userlist />}></Route>
          <Route exact path="/editUser" element={<Edituser />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
