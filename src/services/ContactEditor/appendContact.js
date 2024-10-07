import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import * as helper from './utils';



const app = helper.app;
const db = helper.db;


export async function appendContact(departmentId, newContact) {
     try {
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               contacts.push(newContact);
               await updateDoc(departmentDocRef, { contacts });
               return true;
          } else {
               console.log(`Department ${departmentId} does not exist.`);
               return false;
          }
     } catch (error) {
          console.error("Error appending contact:", error);
          return false;
     }

}