import React, { ReactNode } from "react";
import "./Text.css";
import clsx from "clsx";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";

interface TextProps {
  value: string;
  type: TextType;
  colorSchema: ColorSchema;
}

export default function Text({ value, type, colorSchema }: TextProps) {
  if (type === TextType.HEADLINE) {
    return (
      <h2
        className={clsx(
          colorSchema === ColorSchema.WHITE ? "color-white" : "",
          colorSchema === ColorSchema.BLACK ? "color-black" : "",
          colorSchema === ColorSchema.BLUE ? "color-blue" : ""
        )}
      >
        {value}
      </h2>
    );
  } else {
    return (
      <p
        className={clsx(
          colorSchema === ColorSchema.WHITE ? "color-white" : "",
          colorSchema === ColorSchema.BLACK ? "color-black" : "",
          colorSchema === ColorSchema.BLUE ? "color-blue" : ""
        )}
      >
        {value}
      </p>
    );
  }
}
