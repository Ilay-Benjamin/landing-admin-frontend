import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { establishConnection } from '../Firebase/connection';


export async function updateContact(departmentId, contactId, updatedContact) {
     try {
      const app = await establishConnection();
      const db = getFirestore(app);
       const departmentDocRef = doc(db, 'Contacts/Departments/departmentList', departmentId);
       const departmentSnapshot = await getDoc(departmentDocRef);
       const departmentData = departmentSnapshot.data();
       
       if (departmentData) {
         const contacts = departmentData.contacts || [];
         const contactIndex = contacts.findIndex(contact => contact.id === contactId);
         
         if (contactIndex !== -1) {
           contacts[contactIndex] = {
               name: updatedContact.name,
               rule: updatedContact.rule,
               phone: updatedContact.phone,
               id: contactId
           };  // Update the contact at the found index
           await updateDoc(departmentDocRef, { contacts });
           console.log('Contact updated successfully');
           return true;
         } else {
           console.error(`Contact ${contactId} does not exist.`);
           throw new Error(`Contact ${contactId} does not exist.`);
         }
       } else {
         console.error(`Department ${departmentId} does not exist.`);
         throw new Error(`Department ${departmentId} does not exist.`);
       }
     } catch (error) {
       console.error("Error updating contact:", error.message);
       return false;
     }
   }