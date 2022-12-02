import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import RoomComponent from "./components/room/RoomComponent";

import Db from "./db";

function App() {
  var rooms = Db.rooms;

  function onButtonClicked() {
    alert("Button clicked!");
  }

  return (
    <div className="App">
      <Header title="Arrrbnb"></Header>
      <Content>
        {rooms.map((room) => (
          <RoomComponent room={room} onClickCallback={onButtonClicked} />
        ))}
      </Content>
    </div>
  );
}

export default App;
