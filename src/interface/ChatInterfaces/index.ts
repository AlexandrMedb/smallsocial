export interface Message {
  id: string;
  user: string;
  avatar: string;
  lorem: string;
}

export interface Chat {
  name: string;
  chatID: string;
  messageList: Array<Message>;
}

export interface ChatList {
  Chatsnames: Array<string>;
  Chats: Array<Chat>;
}
