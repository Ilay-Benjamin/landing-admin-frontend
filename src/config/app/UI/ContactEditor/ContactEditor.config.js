import contactEditorConfigJSON from './ContactEditor.config.json';
import Item from '../../../../models/ContactEditor/Item';
import Department from '../../../../models/ContactEditor/Department';

const contactEditorConfigObject = JSON.parse(JSON.stringify(contactEditorConfigJSON));

const departmentsObject = contactEditorConfigObject.departments;

const departmentsJSON = JSON.stringify(departmentsObject);

const departments = Department.fromJsonArray(departmentsJSON);

export const contactEditorConfig = {
     departmentsObject: departmentsObject,
     departmentsJSON: departmentsJSON,
     getDepartment: (departmentName) => {
          return departmentsObject.find(department => department.name === departmentName);
     },
     getItem: (departmentName, name) => {
          return departmentsObject.find(department => department.name === departmentName)
               .items.find(item => item.name === name);
     },
     isItemExists: (departmentName, name) => {
          return departmentsObject.find(department => department.name === departmentName)
               .items.some(item => item.name === name);
     },
     isDepartmentExists: (departmentName) => {
          return departmentsObject.some(department => department.name === departmentName);
     },
     getItemsList: (departmentName) => {
          return departmentsObject.find(department => department.name === departmentName)
               .items;
     },
     getDepartmentsList: () => {
          return departmentsObject;
     },
     getDepartmentsNamesList: () => {
          return departmentsObject.map(department => department.name);
     },
     getItemsMap: () => {
          var map = {};
          departmentsObject.forEach(department => {
               var itemsMap = {};
               map[department.name] = {};
               department.items.forEach(item => {
                    itemsMap[item.name] = item;
               });
               map[department.name] = itemsMap;
          });
          return map;
     },
     
};