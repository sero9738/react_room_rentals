import React, { ReactNode } from "react";
import "./Content.css";

export default function Content({ children }: { children: ReactNode }) {
  return (
      <div className="content-container">{children}</div>
    ); 
}
