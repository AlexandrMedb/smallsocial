export const Change_OnlineStatus = "Change_OnlineStatus";
export const Change_TextStatus = "Change_TextStatus";

/**
 * @param {object} card
 * @param {string} card.id
 * @param {string} card.content
 * @param {string} card.collectionId
 * */
export const changeOnlineStatus = () => ({
  type: Change_OnlineStatus,
});

/***@param {string} status */

export const changeTesxtstatus = (status) => ({
  type: Change_TextStatus,
  payload: status,
});
