// import * as fs from 'node:fs/promises';
// import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
// import { PATH_DB } from '../constants/contacts.js';   до створення функції update

import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';
import updateContact from './updateContact.js';

const generateContacts = async (number) => {
  // const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  // const contactList = await getAllContacts(); до функції updateContact

  const contactList = await getAllContacts();
  // const contactList = JSON.parse(await fs.readFile(PATH_DB, encoding)); //старі контакти // console.log(contactList);

  // const text = contactList.toString();// console.log(text) для відображення або запису даних у вигляді рядка;

  const newContactList = Array(number).fill(0).map(createFakeContact); //створення нових контактів
  // console.log(newContactList);

  contactList.push(...newContactList); //старий+новий
  //або  const data = [...contactList, ...newContactList];додавання нових контактів до існуючих

  await updateContact(contactList); //перезаписали json
};

generateContacts(5);
