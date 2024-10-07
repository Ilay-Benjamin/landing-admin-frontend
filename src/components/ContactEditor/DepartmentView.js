import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Item from '../../models/ContactEditor/Item';
import Department from '../../models/ContactEditor/Department';
import { contactEditorConfig } from '../../config/app/UI/ContactEditor/ContactEditor.config';

import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../assets/images/icons/add_department.png';
import addContactIcon from '../../assets/images/icons/add-contact.png';

import '../../assets/css/components/ContactEditor/DepartmentView.css';



function getDepartmentViewClassNames() {
   return classNames(
      'dataview-department',
   );
}


 export default function DepartmentView(props) {
   var isEditorDisabled = props.isEditorDisabled;
   var focusedEditor = props.focusedEditor;
   var setFocusedEditor = props.setFocusedEditor;
   var toggleEditor = props.toggleEditor;

   var department = props.department;
   var departmentIndex = props.departmentIndex;

   var isDepartmentItemOnFocus = props.isDepartmentItemOnFocus;

   return (
      <div className={getDepartmentViewClassNames()}>
         <div className='dataview-department-header'>
            <div className={classNames('department-header-button', 'edit-department-button')}>
               <img src={editIcon} className={classNames('department-button-image')} alt=""></img>
            </div>
            <div className={classNames('department-header-button', 'add-item-button')}>
               <img src={addContactIcon} className={classNames('department-button-image')} alt=""></img>
            </div>
            <div className={classNames('department-header-title')}>
               <p className='department-header-title-text'><strong>({departmentIndex + 1})</strong> {department.name}</p>
            </div>
            <div className={classNames('department-header-button', 'delete-button')}>
               <img src={deleteIcon} className={classNames('department-button-image')} alt=""></img>
            </div>
         </div>
         <div className='department-content'>
            <div className='department-items'>
               {department.items.map((item, index) => (
                  <DepartmentItem key={index} 
                     item={item}
                     itemIndex={index}
                     departmentId={department.id}
                     isEditorDisabled={isEditorDisabled}
                     focusedEditor={focusedEditor}
                     setFocusedEditor={setFocusedEditor}
                     toggleEditor={toggleEditor}
                     isItemOnFocus={isDepartmentItemOnFocus && focusedEditor !== null && focusedEditor !== -1 && focusedEditor.item.name === item.name}
                     isLastItem={index === department.items.length - 1}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}



export function DepartmentItem(props) {
   var isEditorDisabled = props.isEditorDisabled;
   var focusedEditor = props.focusedEditor;
   var setFocusedEditor = props.setFocusedEditor;
   var toggleEditor = props.toggleEditor;
   var item = props.item;
   var itemIndex = props.itemIndex;
   var departmentId = props.departmentId;
   var isItemOnFocus = props.isItemOnFocus;
   
   var ItemViewClassNames = classNames('department-item', (
      isItemOnFocus ? 'focused-item' : ''
   ));

   return (
      <div className={ItemViewClassNames} onClick={(target) => setFocusedEditor(target, Item.fromObject(item), departmentId)}>
         
         <div className='department-item-header'>
            <p className={classNames('item-header-text')}>
               ({(parseInt(item.id)).toString()}) {item.rule} 
            </p>
         </div>
         <div className='department-item-separator'></div> 
         <div className='department-item-content'>
            <p className='item-content-text'>
            {item.name}: {item.phone}.
            </p>
         </div>

      </div>
   );
}

