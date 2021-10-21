import React from "react";
import { Message } from "../../../../interface/ChatInterfaces";

import MessageCard from "../../../../components/MessageCard";
export const MessageList = (props: { messageList?: Array<Message> }) => {
  if (props.messageList) {
    return (
      <>
        {props.messageList.map((el: any) => (
          <MessageCard
            key={el.id}
            message={el.lorem}
            User={el.user}
            avatar={el.avatar}
          />
        ))}
      </>
    );
  }
  return <> </>;
};
