import React from "react";
import { RandMessage } from "../../../../interface/ChatInterfaces";

import MessageCard from "../../../../components/MessageCard";
export const MessageList = (props: { messageLi: Array<RandMessage> }) => {
  return (
    <>
      {props.messageLi.map((el: any) => (
        <MessageCard
          key={el.id}
          message={el.lorem}
          User={el.user}
          avatar={el.avatar}
        />
      ))}
    </>
  );
};
