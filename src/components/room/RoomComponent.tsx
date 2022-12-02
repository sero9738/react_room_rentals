import React from "react";
import "./RoomComponent.css";
import Text from "../text/Text";
import IconButton from "../iconButton/IconButton";
import { Room } from "../../types";
import { RentableRoom } from "../../types";
import { PurchasableRoom } from "../../types";
import { ColorSchema } from "../../types";
import { TextType } from "../../types";
import { ValidIcons } from "../../types";

interface RoomComponentProps {
  room: Room;
  onClickCallback: () => any;
}

export default function RoomComponent({
  room,
  onClickCallback,
}: RoomComponentProps) {
  if (room.type === "rentable") {
    var rentableRoom = room as RentableRoom;
    return (
      <div className="room-component-container">
        <div id="image">
          <img src={room.heroUrl} className="center"></img>
        </div>
        <div id="description">
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            colorSchema={ColorSchema.BLACK}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
        </div>
        <div id="owner">
          <div id="user-image">
            <img src={rentableRoom.owner.portraitUrl} />
          </div>
          <Text
            value={
              rentableRoom.owner.firstName + " " + rentableRoom.owner.lastName
            }
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
          <IconButton
            icon={ValidIcons.STAR}
            colorSchema={ColorSchema.BLUE}
            onClickCallback={() => onClickCallback}
          />
        </div>
      </div>
    );
  } else {
    var purchasbleRoom = room as PurchasableRoom;

    return (
      <div className="room-component-container">
        <div id="image">
          <img src={room.heroUrl} className="center"></img>
        </div>
        <div id="description">
          <Text
            value={room.title}
            type={TextType.HEADLINE}
            colorSchema={ColorSchema.BLUE}
          />
          <Text
            value={room.description}
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLACK}
          />
        </div>
        <div id="price">
          <Text
            value={
              "Buy at " +
              purchasbleRoom.price.amount +
              " " +
              purchasbleRoom.price.currency
            }
            type={TextType.TEXT}
            colorSchema={ColorSchema.BLUE}
          />
        </div>
      </div>
    );
  }
}
