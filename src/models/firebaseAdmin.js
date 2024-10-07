import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { databaseCollections } from '../config/global/global.config';


// Initialize Firebase app and Firestore



const app = initializeApp(databaseCollections.configuration);
const db = getFirestore(app);


export async function saveNewContact(contactItem, departmentName) {
    try {
        // Reference to the collection containing department documents
        const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
        
        // Reference to the specific department document
        const departmentDocRef = doc(departmentColRef, departmentName);

        // Retrieve the current data of the department
        const departmentSnapshot = await getDoc(departmentDocRef);
        const departmentData = departmentSnapshot.data();

        if (departmentData) {
            // Get the current contacts list
            let contacts = departmentData.contacts || [];

            // Find index of the existing contact item by its name
            const existingContactIndex = contacts.findIndex(contact => contact.id === contactItem.id);

            if (existingContactIndex > -1) {
                // Replace the existing contact item with the new one
                contacts[existingContactIndex] = contactItem;
            } else {
                // If the contact does not exist, add it to the list
                contacts.push(contactItem);
            }

            // Update the 'contacts' field with the new list
            await updateDoc(departmentDocRef, { contacts });

            // Retrieve and log the updated document
            const updatedSnapshot = await getDoc(departmentDocRef);
            console.log(updatedSnapshot.data());
        } else {
            console.log(`Department ${departmentName} does not exist.`);
        }
    } catch (error) {
        console.error("Error updating contact:", error);
    }
}


export async function main() {
     const app = initializeApp(databaseCollections.configuration);
     const db = getFirestore(app);
     
     const colRef = collection(db, 'Contacts/Config/permissions');
     const docRef = doc(colRef, 'permissions');
     
     await updateDoc(docRef,{
          code: "Hodaya Shalom"
     });

     
     const snapshot = await getDoc(docRef);
     console.log(snapshot.data());
}
