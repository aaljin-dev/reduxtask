import React from "react";
import Home from "./app/feature/Task/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./app/feature/Task/Create";
// import Counter from "./app/feature/counter/Counter";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
