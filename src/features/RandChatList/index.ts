import faker from "faker";

const RandMessage = () => ({
  id: faker.datatype.uuid(),
  user: faker.name.findName(),
  avatar: faker.image.avatar(),
  lorem: faker.lorem.text(),
});

const RandChat = (ChatName: string | number) => ({
  name: `Chat${ChatName}`,
  chatID: faker.datatype.uuid(),
  messageList: Array.from({ length: 10 }).map(RandMessage),
});

export const RandChatList = () =>
  Array.from({ length: 3 }).map((el, i) => RandChat(i));
