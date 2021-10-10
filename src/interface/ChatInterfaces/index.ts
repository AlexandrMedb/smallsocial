export interface RandMessage {
  id: string;
  user: string;
  avatar: string;
  lorem: string;
}

export interface Chat {
  name: string;
  messageList: Array<RandMessage>;
}

export interface ChatList {
  Chatsnames: Array<string>;
  Chats: Array<Chat>;
}
