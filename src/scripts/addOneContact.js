import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import updateContact from './updateContact.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts(); //всі контакти
  const newContact = createFakeContact(); //новий контакт
  contactList.push(newContact); //додаємо новий контакт
  await updateContact(contactList); //перезаписали json всіх контактів
};

addOneContact();
