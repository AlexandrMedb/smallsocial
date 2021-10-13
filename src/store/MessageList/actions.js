export const Add_New_Chat = "Add_New_Chat";
export const Remove_Chat = "Remove_Chat";
export const Add_New_Message = "Add_New_Message";
export const Remove_Message = "Remove_Message";

export const addNewChat = (chatName) => ({
  type: Add_New_Chat,
  payload: chatName,
});

export const removeChat = (chatId) => ({
  type: Remove_Chat,
  payload: chatId,
});

export const addNewMessage = (message) => ({
  type: Add_New_Message,
  payload: message,
});

export const removeMessage = ({ message, chatId }) => ({
  type: Remove_Message,
  payload: { message, chatId },
});
