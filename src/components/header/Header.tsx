import React from "react";
import "./Header.css";
import User from "../user/User";
import Text from "../text/Text";
import { TextType } from "../../types";
import { ColorSchema } from "../../types";

export default function Header({ title }: { title: string }) {
  return (
    <header className="header">
      <div className="title">
        <Text value={title} type={TextType.HEADLINE} colorSchema={ColorSchema.WHITE} />
      </div>
    </header>
  );
}
