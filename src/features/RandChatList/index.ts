import faker from "faker";

const RandMessage = () => ({
  id: faker.datatype.uuid(),
  user: faker.name.findName(),
  avatar: faker.image.avatar(),
  lorem: faker.lorem.text(),
});

const RandMessageList = () => Array.from({ length: 10 }).map(RandMessage);

const RandChat = (ChatName: string | number) => ({
  name: `Chat${ChatName}`,
  chatID: faker.datatype.uuid(),
  messageList: RandMessageList(),
});

export const RandChatList = () =>
  Array.from({ length: 3 }).map((el, i) => RandChat(i));

export const RandChats = (n: number = 3) => {
  const result: any = {};
  for (let i = 0; i < n; i++) {
    result[faker.address.city()] = RandMessageList();
  }
  return result;
};
