import React from "react";
import "./IconButton.css";
import clsx from "clsx";
import { StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ColorSchema } from "../../types";
import { ValidIcons } from "../../types";

interface IconButtonProps {
  icon: ValidIcons;
  colorSchema: ColorSchema;
  onClickCallback: () => any;
}

export default function IconButton({
  icon,
  colorSchema,
  onClickCallback,
}: IconButtonProps) {
  if (icon === "STAR") {
    return (
      <div className="icon-button" onClick={() => onClickCallback}>
        <StarIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? "icon-color-white" : "",
            colorSchema === ColorSchema.BLUE ? "icon-color-blue" : "",
            colorSchema === ColorSchema.BLACK ? "icon-color-black" : ""
          )}
        />
      </div>
    );
  } else if (icon === "HEART") {
    return (
      <div className="icon-button" onClick={() => onClickCallback}>
        <HeartIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? "icon-color-white" : "",
            colorSchema === ColorSchema.BLUE ? "icon-color-blue" : "",
            colorSchema === ColorSchema.BLACK ? "icon-color-black" : ""
          )}
        />
      </div>
    );
  } else {
    return (
      <div className="icon-button" onClick={() => onClickCallback}>
        <PlusIcon
          className={clsx(
            "h-6",
            "w-6",
            "hover:bg-sky-300",
            colorSchema === ColorSchema.WHITE ? "icon-color-white" : "",
            colorSchema === ColorSchema.BLUE ? "icon-color-blue" : "",
            colorSchema === ColorSchema.BLACK ? "icon-color-black" : ""
          )}
        />
      </div>
    );
  }
}
