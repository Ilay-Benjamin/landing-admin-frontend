import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import * as helper from './utils';



const app = helper.app;
const db = helper.db;



export async function deleteContact(departmentId, contactId) {
     try {
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentDocRef = doc(departmentColRef, departmentId);
          const departmentSnapshot = await getDoc(departmentDocRef);
          const departmentData = departmentSnapshot.data();
          if (departmentData) {
               const contacts = departmentData.contacts || [];
               const contactIndex = helper.getContactIndex(departmentId, contactId);
               if (contactIndex !== -1) {
                    contacts.splice(contactIndex, 1);
                    await updateDoc(departmentDocRef, { contacts });
                    return true;
               } else {
                    console.log(`Contact ${contactId} does not exist.`);
                    return false;
               }
          } else {
               console.log(`Department ${departmentId} does not exist.`);
               return false;
          }
     } catch (error) {
          console.error("Error deleting contact:", error);
          return false;
     }
}