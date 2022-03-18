import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./routes-config/PrivateRoute";
import AuthContext from "./hooks/authContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase-config";


const App = () => {
  //i will make this component as the root component for all the app  ;
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setStatus(currentUser ? true : false);
    });
   
  });

  return (
    <AuthContext.Provider value={{authStatus:status,data:user}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<PrivateRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
