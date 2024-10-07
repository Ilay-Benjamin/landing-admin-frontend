import Item from '../Item';
import Department from '../Department';


export default class StateModel {
     static getEmptyState() {
          var state =  new StateModel();
          return state;
     }
     constructor() {
          this._settings = {
               isDisabled: true,
               isLoaded: false,
               isFocused: false
          };
          this._edit = {
               toAppend: false,
               hasChanges: false,
               changes: null,
               origin: {
                    item: null,
                    ids: {
                         departmentId: "",
                         itemId: ""
                    }
               }
          };
          this._focus = {
               item: null,
               ids: {
                    departmentId: "",
                    itemId: ""
               },
               indexes: {
                    departmentIndex: -1,
                    itemIndex: -1
               }
          }
          this._data = {
               departments: []
          }
     }
     get settings() {
          return this._settings;
     }
     set settings(value) {
               this._settings = value;
     }
     get edit() {
          return this._edit;
     }
     set edit(value) {
               this._edit = value;
     }
     get focus() {
          return this._focus;
     }
     set focus(value) {
               this._focus = value;
     }    
     get data() {
          return this._data;
     }
     set data(value) {
               this._data = value;
     }
     
     clone(newState) {
          this._settings.isDisabled = newState.settings.isDisabled;
          this._settings.isLoaded = newState.settings.isLoaded;
          this._settings.isFocused = newState.settings.isFocused;
          this._edit.toAppend = newState.edit.toAppend;
          this._edit.hasChanges = newState.edit.hasChanges;
          this._edit.changes = newState.edit.changes;
          this._edit.origin.item = newState.edit.origin.item;
          this._edit.origin.ids.itemId = newState.edit.origin.ids.itemId;
          this._edit.origin.ids.departmentId = newState.edit.origin.ids.departmentId;
          this._focus.item = newState.focus.item;
          this._focus.ids.itemId = newState.focus.ids.itemId;
          this._focus.ids.departmentId = newState.focus.ids.departmentId;
          this._focus.indexes.itemIndex = newState.focus.indexes.itemIndex;
          this._focus.indexes.departmentIndex = newState.focus.indexes.departmentIndex;
          this._data.departments = newState.data.departments;
     }
     equals(state) {
          return JSON.stringify(this) === JSON.stringify(state);
     }
     isNull() {
          return JSON.stringify(this) === JSON.stringify(StateModel.getEmptyState());
     }
     static CopyFrom(originalState, newState) {
          originalState.settings.isDisabled = newState.settings.isDisabled;
          originalState.settings.isLoaded = newState.settings.isLoaded;
          originalState.settings.isFocused = newState.settings.isFocused;
          originalState.edit.toAppend = newState.edit.toAppend;
          originalState.edit.hasChanges = newState.edit.hasChanges;
          originalState.edit.changes = newState.edit.changes;
          originalState.edit.origin.item = newState.edit.origin.item;
          originalState.edit.origin.ids.itemId = newState.edit.origin.ids.itemId;
          originalState.edit.origin.ids.departmentId = newState.edit.origin.ids.departmentId;
          originalState.focus.item = newState.focus.item;
          originalState.focus.ids.itemId = newState.focus.ids.itemId;
          originalState.focus.ids.departmentId = newState.focus.ids.departmentId;
          originalState.focus.indexes.itemIndex = newState.focus.indexes.itemIndex;
          originalState.focus.indexes.departmentIndex = newState.focus.indexes.departmentIndex;
          originalState.data.departments = newState.data.departments;
     }

}


