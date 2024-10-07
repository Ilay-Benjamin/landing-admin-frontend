import { databaseCollections } from '../../config/global/global.config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { establishConnection } from '../Firebase/connection';

// Initialize Firebase app and Firestore


export async function getContactIndex(departmentId, contactId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               return contacts.findIndex(contact => contact.id === contactId);
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error getting contact index:", error.message);
          return -1;
     }
}

export async function getDepartmentId(departmentName) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentName);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          return departmentData ? departmentSnapshot.id : null;
     } catch (error) {
          console.error("Error getting department ID:", error.message);
          return null;
     }
}

export async function getDepartmentName(departmentId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          return departmentData ? departmentSnapshot.id : null;
     } catch (error) {
          console.error("Error getting department name:", error.message);
          return null;
     }
}

export async function getContactId(departmentId, contactName) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               const contact = contacts.find(contact => contact.name === contactName);
               return contact ? contact.id : null;
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error getting contact ID:", error.message);
          return null;
     }
}

export async function getContactName(departmentId, contactId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               const contact = contacts.find(contact => contact.id === contactId);
               return contact ? contact.name : null;
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error getting contact name:", error.message);
          return null;
     }
}

export async function isDepartmentNameTaken(departmentName) {
    try {
        const app = await establishConnection();
        const db = getFirestore(app);
        const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
        const departmentDocRef = doc(departmentColRef, departmentName);
        const departmentSnapshot = await getDoc(departmentDocRef);
        return departmentSnapshot.exists();
    } catch (error) {
        console.error("Error checking department name:", error.message);
        return false;
    }
}

export async function isContactExists(departmentId, contactId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               return contacts.some(contact => contact.id === contactId);
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error checking contact existence:", error.message);
          return false;
     }
}

export async function isDepartmentExists(departmentId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          return departmentSnapshot.exists();
     } catch (error) {
          console.error("Error checking department existence:", error.message);
          return false;
     }
}

export async function isContactNameTaken(departmentId, contactName) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               return contacts.some(contact => contact.name === contactName);
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error checking contact name:", error.message);
          return false;
     }
}


export async function isDepartmentEmpty(departmentId) {
     try {
          const app = await establishConnection();
          const db = getFirestore(app);
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               return contacts.length === 0;
          } else {
               throw new Error(`Department ${departmentId} does not exist.`);
          }
     } catch (error) {
          console.error("Error checking department emptiness:", error.message);
          return false;
     }
}
