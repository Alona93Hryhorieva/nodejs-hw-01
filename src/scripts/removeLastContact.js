import { getAllContacts } from './getAllContacts.js';
import updateContact from './updateContact.js';

export const removeLastContact = async () => {
  const contactList = await getAllContacts();
  contactList.pop();
  await updateContact(contactList);
};

removeLastContact();
