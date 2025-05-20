
/*import { useState } from "react";
import Child from "./child";

function App() {
  return (
    <div>
      <h1>Click Me!</h1>
      <Child />
    </div>
  );
}

export default App;*/

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./page/Login";
import Register from "./page/Register";
import Dashboard from "./page/Dashboard";
import PageNotFound from "./page/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;