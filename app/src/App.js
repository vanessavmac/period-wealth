import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing, Home, SignUp, SignIn } from "./pages";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");
    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user?.email ? <Navigate to="/home" /> : <Landing />}
          />
          <Route
            path="/landing"
            element={user?.email ? <Navigate to="/home" /> : <Landing />}
          />
          <Route
            path="/signup"
            element={user?.email ? <Navigate to="/home" /> : <SignUp/>}
          />
          <Route
            path="/login"
            element={user?.email ? <Navigate to="/home" /> : <SignIn/>}
          />
          <Route
            path="/home"
            element={user?.email ? <Home/> : <Navigate to="/landing" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
