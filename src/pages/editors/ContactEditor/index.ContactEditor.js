import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link, Outlet, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import saveIcon from '../../../assets/images/icons/save.png';
import deleteIcon from '../../../assets/images/icons/delete.png';
import editIcon from '../../../assets/images/icons/edit.png';
import cancleIcon from '../../../assets/images/icons/cancel.png';
import addDepartmentIcon from '../../../assets/images/icons/add_department.png';
import addContactIcon from '../../../assets/images/icons/add-contact.png';
import Editor from '../../../components/ContactEditor/Editor';

import './style.ContactEditor.css';



function getContactEditorClassNames(isEditorDisabled, isEditorFocused) {
    return classNames(
        'editor',
        (isEditorDisabled ? 'disabled-edior' : 'enabled-editor'),
        (isEditorFocused ? 'focoused-editor' : 'not-focused-editor')
    );
}


function ContactEditor() {

    return (
        <div className="page" style={{ margin: '0', padding: '0' }}>
            <div className='page-title'>
                <h1 className='page-title-text'>
                    ContactEditor Page
                </h1>
            </div>

            <div className='page-content'>

                <Editor/>

            </div>
        </div>
    );
}

export default ContactEditor;
