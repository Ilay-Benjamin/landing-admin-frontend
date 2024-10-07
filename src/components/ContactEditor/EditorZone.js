import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Item from '../../models/ContactEditor/Item';
import Department from '../../models/ContactEditor/Department';

import '../../assets/css/components/ContactEditor/EditorZone.css';



function getEditorZoneClassNames() {
     return classNames(
          'editor-editzone',
     );
}


export default function EditorZone(props) {
     var isEditorDisabled = props.isEditorDisabled;
     var focusedEditor = props.focusedEditor;
     var setFocusedEditor = props.setFocusedEditor;
     var toggleEditor = props.toggleEditor;
     var changes = props.changes;
     var setChanges = props.setChanges;

     const getSource = () => {
          if (focusedEditor === null) {
               return null;
          } else if (focusedEditor === -1) {
               return focusedEditor;
          } else {
               return focusedEditor.item;
          }     
     }

     const getDatafieldValue = (datafield) => {
          var source = getSource();
          if (source === null) {
               return '';
          } else {
               switch (datafield) {
                    case 'id':
                         return source.id;
                    case 'departmentName':
                         return source.departmentName;
                    case 'name':
                         return source.name;
                    case 'rule':
                         return source.rule;
                    case 'phone':
                         return source.phone;
                    default:
                         return 'X';
               }
          }
     }

     var onChangeItem = (target, datafield, newValue) => {
          target.preventDefault();
          var inputVal = target.target.value;
          var changedItem = Item.clone(changes);
          switch (datafield) {
               case 'departmentName':
                    changedItem.departmentName = (newValue);
                    break;
               case 'name':
                    changedItem.name = (newValue);
                    break;
               case 'rule':
                    changedItem.rule = (newValue);
                    break;
               case 'phone':
                    changedItem.phone = (newValue);
                    break;
               default:
                    // Do nothing
                    break;
          }
          setChanges(target, changedItem);
     }

     var title = 'פרטי איש קשר';
     title += focusedEditor == null ? '' : (focusedEditor === -1 ? ' (חדש)' : ' (' + getDatafieldValue('id') + ')');

     return (
          <div className={getEditorZoneClassNames()}>

               <div className='editzone-title'>
                    <p className='editzone-title-text'>{title}</p>
               </div>
               <div className='editzone-content'>
               
                    <div className='editorzone-datafields-row'>

                         <div className='editzone-datafield'>
                              <label
                                   htmlFor='rule-input'
                                   className='datafield-label'>
                                   תפקיד
                              </label>
                              <input
                                   name='rule-input'
                                   className="datafield-input"
                                   type='text'
                                   placeholder='תפקיד'
                                   onChange={(target) => onChangeItem(target, 'rule', target.target.value)}
                                   defaultValue={getDatafieldValue('rule')}
                                   disabled={isEditorDisabled}
                              />
                         </div>
                         <div className='editzone-datafield'>
                              <label
                                   htmlFor='departmentName-input'
                                   className='datafield-label'>
                                   מחלקה
                              </label>
                              <input
                                   name='departmentName-input'
                                   className="datafield-input"
                                   type='text'
                                   value={getDatafieldValue('departmentName')}
                                   placeholder='מחלקה'
                                   disabled={true}
                              />
                         </div>

                    </div>

                    <div className='editorzone-datafields-row'>

                         <div className='editzone-datafield'>
                              <label
                                   htmlFor='name-input'
                                   className='datafield-label'>
                                   שם מלא
                              </label>
                              <input
                                   name='name-input'
                                   className="datafield-input"
                                   type='text'
                                   placeholder='שם'
                                   defaultValue={getDatafieldValue('name')}
                                   onChange={(target) => onChangeItem(target, 'name', target.target.value)}
                                   disabled={isEditorDisabled}
                              />
                         </div>
                         <div className='editzone-datafield'>
                              <label
                                   htmlFor='phone-input'
                                   className='datafield-label'>
                                   מס' טלפון
                              </label>
                              <input
                                   name='phone-input'
                                   className="datafield-input"
                                   type='phone'
                                   placeholder='טלפון'
                                   defaultValue={getDatafieldValue('phone')}
                                   onChange={(target) => onChangeItem(target, 'phone', target.target.value)}
                                   disabled={isEditorDisabled}
                                   />
                         </div>

                    </div>
               </div>

          </div>
     );
}
