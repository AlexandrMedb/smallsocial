import React from "react";
import { Message } from "../../../../interface/ChatInterfaces";

import MessageCard from "../../../../components/MessageCard";
export const MessageList = (props: { messageLi: Array<Message> }) => {
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
