import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router";
import Login from './component/login'
import Register from './component/register'
import Todo from './component/todo';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route index element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

