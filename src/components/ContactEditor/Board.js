import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import Item from '../../models/ContactEditor/Item';
import Department from '../../models/ContactEditor/Department';

import EditorZone from './EditorZone';

import EditorController from '../../controllers/ContactEditors/ContactEditor.controller';

import saveIcon from '../../assets/images/icons/save.png';
import deleteIcon from '../../assets/images/icons/delete.png';
import editIcon from '../../assets/images/icons/edit.png';
import cancleIcon from '../../assets/images/icons/cancel.png';

import '../../assets/css/components/ContactEditor/Board.css';



function getBoardClassNames() {
   return classNames(
      'editor-editzone',
   );
}


function Board(props) {
   var isEditorDisabled = props.isEditorDisabled;
   var focusedEditor = props.focusedEditor;
   var setFocusedEditor = props.setFocusedEditor;
   var toggleEditor = props.toggleEditor;
   var changes = props.changes;
   var setChanges = props.setChanges;
   var editorController = props.controller;

   editorController.reload(isEditorDisabled, focusedEditor, changes)

   return (
      <div className='editor-board'>
         <div className='editor-board-header'>
            <div className={classNames('board-header-button', 'save-button')} onClick={()=> {editorController.saveChanges()}} >
               <img src={saveIcon} className={classNames('board-button-image')} alt=""></img>
            </div>
            <div className={classNames('board-header-button', 'edit-button')} onClick={(target) => toggleEditor(target)}>
               <img src={editIcon} className={classNames('board-button-image')} alt=""></img>
            </div>
            <div className={classNames('board-header-button', 'cancel-button')} onClick={(target) => toggleEditor(target)}>
               <img src={cancleIcon} className={classNames('board-button-image')} alt=""></img>
            </div>
         </div>
         <div className='editor-board-content'>
            <EditorZone changes={changes} setChanges={setChanges} setFocusedEditor={setFocusedEditor} toggleEditor={toggleEditor} isEditorDisabled={isEditorDisabled} focusedEditor={focusedEditor} /> 
         </div>
      </div>
   );
}

export default Board;
