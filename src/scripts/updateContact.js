import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export default function updateContact(contacts) {
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
} //передаємо контакти, перетворюються в строку і перезаписуються
