import updateContact from './updateContact.js';

export const removeAllContacts = async () => {
  await updateContact([]);
};

removeAllContacts();
