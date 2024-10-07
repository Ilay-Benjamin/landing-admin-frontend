import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import * as helper from './utils';



const app = helper.app;
const db = helper.db;


export async function getAll() {
     try {
          const departmentColRef = collection(db, 'Contacts/Departments/departmentList');
          const departmentSnapshot = await getDocs(departmentColRef);
          const departmentList = [];
          departmentSnapshot.forEach(doc => {
               console.log(JSON.stringify(doc.data(), null, 2));
               var departmentDataFields = doc.data();
               var departmentItem = ({
                    id: doc.id,
                    name: departmentDataFields.name,
                    items: departmentDataFields.contacts.map(
                         contact => ({
                              id: contact.id,
                              name: contact.name,
                              rule: contact.rule,
                              departmentName: departmentDataFields.name,
                              phone: contact.phone,
                         })
                    ) || []
               });
               departmentList.push(departmentItem);
          });
          return departmentList;
     } catch (error) {
          console.error("Error getting all departments:", error.message);
          return [];
     }
}