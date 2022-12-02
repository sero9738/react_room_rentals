import React from "react";
import "./User.css";

export default function User({ userName }: { userName: string }) {
  return (
    <div className="user-container">
      <div className="profil-picture"></div>
      <span className="user-name">{userName}</span>
      <span className="user-info-text">2 starred cabins</span>
    </div>
  );
}
