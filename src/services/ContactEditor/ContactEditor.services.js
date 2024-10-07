import { databaseCollections } from '../../config/global/global.config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import * as helper from './utils';
import { getAll } from './getAll';
import { deleteContact } from './deleteContact';
import { updateContact } from './updateContact';
import { appendContact } from './appendContact';



// Initialize Firebase app and Firestore
const app = initializeApp(databaseCollections.configuration);
const db = getFirestore(app);


const services = {
    app: app,
    db: db,
    helper: helper,
    getAll: getAll,
    deleteContact: deleteContact,
    appendContact: appendContact,
    updateContact: updateContact
}

export default services;