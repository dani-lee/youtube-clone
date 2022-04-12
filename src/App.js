import React from "react";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/side/Sidebar";
import VideosList from "./components/content/VideosList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <VideosList />
      </div>
    </div>
  );
}

export default App;
