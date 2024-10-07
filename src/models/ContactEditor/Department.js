import Item from './Item';

export default class Department {
     // Parse JSON to create a Department instance
     static fromJson(json) {
          const jsonData = JSON.parse(json);
          return new Department(jsonData.name, jsonData.id, Item.fromJsonArray(JSON.stringify(jsonData.items)));
     }
     // Convert a Department instance to JSON
     static toJson(department) {
          return JSON.stringify({
               name: department.name,
               id: department.id,
               items: Item.toJsonArray(department.items)
          });
     }
     // Parse a JSON array to create an array of Department instances
     static fromJsonArray(jsonArray) {
          const departments = JSON.parse(jsonArray);
          return Array.from(departments).map(json => Department.fromObject(json));
     }
     // Convert an array of Department instances to a JSON array
     static toJsonArray(departments) {
          return JSON.stringify(departments.map(department => Department.toObject(department)));
     }
     // Convert a plain object to a Department instance
     static fromObject(object) {
          return new Department(object.name, object.id, Item.fromObjectArray(object.items));
     }
     // Convert a Department instance to a plain object
     static toObject(department) {
          return {
               name: department.name,
               id: department.id,
               items: Item.toObjectArray(department.items)
          };
     }
     // Convert an array of plain objects to an array of Department instances
     static fromObjectArray(objectArray) {
          return objectArray.map(object => Department.fromObject(object));
     }
     // Convert an array of Department instances to an array of plain objects
     static toObjectArray(departments) {
          return departments.map(department => Department.toObject(department));
     }

     static getEmptyDepartment() {
          return new Department('', "", []);
     }

     constructor(name, id, items) {
          this._name = name;
          this._id = id;
          this._items = items;
     }

     get name() {
          return this._name;
     }
     get items() {
          return this._items;
     }
     get id() {
          return this._id;
     }
     set name(name) {
          this._name = name;
     }
     set items(items) {
          this._items = items;
     }
     set id(id) {
          this._id = id;
     }
     static clone() {
          var itemsList = Array.from(this._items);
          return new Department(this._name, this._id, itemsList);
     }

     equals(department) {
          if (this._name !== department.name || this._id !== department._id || this._items.length !== department._items.length) {
               return false;
          }
          return Array(this._items).every(item => department.hasItem(item));
     }
     toString() {
          var itemsString = this._items.map(item => item.toString()).join(', \n');
          return `Department: ${this._name}, \nItems: ${itemsString}`;
     }
     
     addItem(item) {
          this._items.push(item);
     }
     removeItem(item) {
          var index = this._items.indexOf(item);
          if (index > -1) {
               this._items.splice(index, 1);
          }
     }
     updateItem(item, newItem) {
          var index = this._items.indexOf(item);
          if (index > -1) {
               this._items[index] = newItem;
          }
     }
     hasItem(item) {
          return this._items.includes(item);
     }
     hasItemWithName(name) {
          return this._items.some(item => item.name === name);
     }
     hasItemWithRule(rule) {
          return this._items.some(item => item.rule === rule);
     }
     hasItemWithPhone(phone) {
          return this._items.some(item => item.phone === phone);
     }
     hasItemWithDepartment(department) {
          return this._items.some(item => item.department === department);
     }
     hasItemWithId(id) {
          return this._items.some(item => item.id === id);
     }
     clear() {
          this._items = [];
     }
     isEmpty() {
          return this._items.length === 0;
     }
}