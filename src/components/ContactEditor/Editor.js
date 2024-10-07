import React, { useState, useEffect } from 'react';

import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import Item from '../../models/ContactEditor/Item';
import Department from '../../models/ContactEditor/Department';

import services from '../../services/ContactEditor/ContactEditor.services';

import DataView from './DataView';
import Board from './Board';

import EditorController from '../../controllers/ContactEditors/ContactEditor.controller';

import addDepartmentIcon from '../../assets/images/icons/add_department.png';

import '../../assets/css/components/ContactEditor/Editor.css';



function getContactEditorClassNames(isEditorDisabled, isEditorFocused) {
     return classNames(
          'editor',
          (isEditorDisabled ? 'disabled-editor' : 'enabled-editor'),
          (isEditorFocused ? 'focoused-editor' : 'not-focused-editor')
     );
}


function Editor(props) {
     var [isEditorDisabled, setIsEditorDisabled] = useState(true);
     var [focusedEditor, setFocusedEditor] = useState(null);
     const [departments, setDepartments] = useState([]);
     var [changes, setChanges] = useState((
          isEditorDisabled ? null : 
               (focusedEditor === -1 ? 
                    Item.getEmptyItem() :
                    Item.clone(focusedEditor)
               )
     ));
     var editorController = new EditorController();
     editorController.init(isEditorDisabled, setIsEditorDisabled, focusedEditor, setFocusedEditor, changes, setChanges, departments, setDepartments);


     useEffect(() => {
          var fetchData = (async () => {
               var data =  await services.getAll()
               var departmentsData = data.map((department) => 
                    new Department(
                         department.name,
                         department.id,
                         department.items.map((item) =>
                              new Item(item.name, item.rule, item.phone, item.departmentName, item.id)
                         )
                    )
               );
               return departmentsData;
          });
          fetchData().then((departmentsData) => {
               setDepartments(departmentsData);
          });
     }, []);

     var onToggleEditor = (target) => {
          target.preventDefault();
          if (!isEditorDisabled) {
               if (changes.equals(focusedEditor.item) || changes.equals(Item.getEmptyItem())) {
                    setFocusedEditor(null);
                    setChanges(null); 
                    setIsEditorDisabled(!isEditorDisabled);
                    alert('Editor is disabled.\nFocused item is set to null');
               } else {
                    alert('Cannot disable editor when changes are not saved');                    
               }
          } else {
               setChanges(
                    (focusedEditor === -1 ? 
                         Item.getEmptyItem() :
                         Item.clone(focusedEditor.item)
                    )
               )
               alert('Editor is enabled');
               setIsEditorDisabled(!isEditorDisabled);
          }
     }

     var onFocuseOnItem = (target, item = null, departmentId = null) => {
          target.preventDefault();
          if (!isEditorDisabled) {
               alert('Cannot focus on item when editor is enabled');
          } else {
               if (focusedEditor === null) {
                    if (item === null && departmentId === null) {
                         alert('Focused item is already null');
                    } else {
                         setFocusedEditor({
                              item: item,
                              departmentId: departmentId
                         });
                         alert('Focused item is set to ' + item.name);
                    }
               } else if (item === null && departmentId === null) {
                    setFocusedEditor(null);
                    alert('Focused item is set to null');
               } else if (focusedEditor.item.equals(item)) {
                    setFocusedEditor(null);
                    alert('Focused item is set to null');
               } else {
                    setFocusedEditor({
                         item: item,
                         departmentId: departmentId
                    });
                    alert('Focused item is set to ' + item.name);
               }
          }
     }

     var onChangeItem = (target, changedItem) => {
          target.preventDefault();
          setChanges(Item.clone(changedItem));
     }

     return (
          <div className={getContactEditorClassNames(isEditorDisabled, focusedEditor)}>
               <div className='editor-header'>
                    <div className={classNames('editor-button', 'editor-header-button')}>
                         <img src={addDepartmentIcon} className={classNames('editor-button-image', 'header-button-image')} alt=""></img>
                    </div>
               </div>

               <div className='editor-content'>
                    <Board 
                         toggleEditor={onToggleEditor}
                         setFocusedEditor={onFocuseOnItem}
                         isEditorDisabled={isEditorDisabled} 
                         focusedEditor={focusedEditor}
                         changes={changes}
                         setChanges={onChangeItem} 
                         controller={editorController}
                    />
                    <div className='editor-data'>
                         <DataView
                              toggleEditor={onToggleEditor}
                              setFocusedEditor={onFocuseOnItem}
                              isEditorDisabled={isEditorDisabled} 
                              focusedEditor={focusedEditor}
                              changes={changes}
                              setChanges={onChangeItem}
                              departments={departments}
                              controller={editorController}
                         /> 
                    </div>
               </div>

          </div>
     );
}

export default Editor;
