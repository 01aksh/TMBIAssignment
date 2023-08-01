import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./container/Header";
import Movies from "./pages/Movies/Movies";

function App() {
 
  return (
    <>
      <div className="w-full max-h-max bg-black pb-2">
        <Movies />
      </div>
    </>
  );
}

export default App;
