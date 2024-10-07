
import { getAll } from './getAll';
import { deleteContact } from './deleteContact';
import { updateContact } from './updateContact';
import { appendContact } from './appendContact';
import { establishConnection } from '../Firebase/connection';

// Initialize Firebase app and Firestore



const services = {
    establishConnection: establishConnection,
    getAll: getAll,
    deleteContact: deleteContact,
    appendContact: appendContact,
    updateContact: updateContact
}

export default services;