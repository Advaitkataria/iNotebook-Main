// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Navigate } from 'react-router-dom';


function App() {


  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container my-4">
            <Routes>
              <Route path="/" element={"token" ? <Home /> : <Navigate to="/login" />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
