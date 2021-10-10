import { useMemo } from "react";

import faker from "faker";

const RandMessage = () => ({
  id: faker.datatype.uuid(),
  user: faker.name.findName(),
  avatar: faker.image.avatar(),
  lorem: faker.lorem.text(),
});

interface RandMessage1 {
  id: string;
  user: string;
  avatar: string;
  lorem: string;
}

interface Chat {
  name: string;
  messageList: Array<RandMessage1>;
}

export const RandChatList = () => {
  let rand = useMemo(() => {
    let result1 = Array.from({ length: 3 }).map((el, i) => {
      let result: Chat = {
        name: `Chat${i}`,
        messageList: Array.from({ length: 10 }).map(RandMessage),
      };
      return result;
    });
    return result1;
  }, []);

  return rand;
};
