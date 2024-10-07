import Item from '../../models/ContactEditor/Item';
import Department from '../../models/ContactEditor/Department';
import { contactEditorConfig } from '../../config/app/UI/ContactEditor/ContactEditor.config';
import services from '../../services/ContactEditor/ContactEditor.services';




export default class EditorController {

     constructor() {
          this._states = {
               isEditorDisabled: {value: true, setter: null},
               focusedEditor: {value: null, setter: null},
               changes: {value: null, setter: null},
               departments: {value: [], setter: null}
          };
     }

     get states() {
          return this._states;
     }
     set states(newStates) {
          this._states = newStates;
     }          

     init(isEditorDisabled, setIsEditorDisabled, focusedEditor, setFocusedEditor, changes, setChanges, departments, setDepartments) {
          this._states.isEditorDisabled.value = isEditorDisabled;
          this._states.isEditorDisabled.setter = setIsEditorDisabled;
          this._states.focusedEditor.value = focusedEditor;
          this._states.focusedEditor.setter = setFocusedEditor;
          this._states.changes.value = changes;
          this._states.changes.setter = setChanges;
          this._states.departments.value = departments;
          this._states.departments.setter = setDepartments;
     }          

     reload(isEditorDisabled, focusedEditor, changes, departments) {
          this._states.isEditorDisabled.value = isEditorDisabled;
          this._states.focusedEditor.value = focusedEditor;
          this._states.changes.value = changes;
          this._states.departments.value = departments;
     }


     isFocused() {
          if (this._states.focusedEditor.value === null) {
               return false;
          }
          if (this._states.focusedEditor.value === -1) {
               return false;
          }
          if (this._states.focusedEditor.value.item === null) {
               return false;
          }
          return true;
     }

     hasChanges() {
          try {
               if (this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot check for changes when editor is disabled");
               }
               if (this._states.changes.value === null) {
                    return false;
               }
               if (this._states.changes.value.equals(Item.getEmptyItem())) {
                    return false;
               }
               if (this._states.changes.value.equals(this._states.focusedEditor.value.item)) {
                    return false;
               }
               return true;
          } catch (e) {
               console.error(e.message);
          }
     }

     focusOnItem(item, departmentId) {
          try {
               if (!this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot focus on item when editor is enabled");
               }
               if (this._states.focusedEditor.value === null) {
                    if (item === null && departmentId === null) {
                         throw new Error("Error! \nFocused item is already null");
                    }
                    this._states.focusedEditor.setter({
                         item: item,
                         departmentId: departmentId
                    });
                    alert('Focused item is set to ' + item.name);
               } else if (item === null && departmentId === null) {
                    this._states.focusedEditor.setter(null);
                    alert('Focused item is set to null');
               } else if (this._states.focusedEditor.value.item.equals(item)) {
                    this._states.focusedEditor.setter(null);
                    alert('Focused item is set to null');
               } else {
                    this._states.focusedEditor.setter({
                         item: item,
                         departmentId: departmentId
                    });
               }
          } catch (e) {
               console.error(e.message);
          }
     }


     disableEditor() {
          try {
               if (this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot disable editor when editor is already disabled");
               }
               if (this.hasChanges()) {
                    alert('Cannot disable editor when changes are not saved');
               }
               this._states.isEditorDisabled = false;
          } catch (e) {
               console.error(e.message);
          }
     }

     enableEditor() {
          try {
               if (!this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot enable editor when editor is already enabled");
               }
               if (this._states.focusedEditor.value === null) {
                    this._states.isEditorDisabled = false;
                    this._states.changes.setter(Item.getEmptyItem());
               } else {
                    this._states.isEditorDisabled = false;
                    this._states.changes.setter(Item.clone(this._states.focusedEditor.value.item));
               }
               alert('Editor is enabled');
          } catch (e) {
               console.error(e.message);
          }
     }

     cancelChanges() {
          try {
               if (this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot remove changes when editor is disabled");
               }
               if (this._states.changes.value === null) {
                    alert('Cannot remove changes when there are no changes');
               }
               this._states.changes.setter(this._states.focusedEditor.value.item);
          } catch (e) {
               console.error(e.message);
          }
     }

     saveChanges() {
          try {
               if (this._states.isEditorDisabled.value) {
                    throw new Error("Error! \nCannot save changes when editor is disabled");
               }
               if (this._states.changes.value === null) {
                    alert('Cannot save changes when there are no changes');
               }
               services.updateContact(this._states.focusedEditor.value.departmentId, this._states.changes.value.id, this._states.changes.value);
               this._states.focusedEditor.setter(null);
               this._states.changes.setter(null);
               this._states.isEditorDisabled.setter(true);
               services.getAll().then((data) => {
                    var content = data.map((department) => 
                         new Department(
                              department.name,
                              department.id,
                              department.items.map((item) =>
                                   new Item(item.name, item.rule, item.phone, item.departmentName, item.id)
                              )
                         )
                    );
                    this._states.departments.setter(content);
               });
               alert('Editor is disabled.\nFocused item is set to null');
          } catch (e) {
               console.error(e.message);
          }
     }



}