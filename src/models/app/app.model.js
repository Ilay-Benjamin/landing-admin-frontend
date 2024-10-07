import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './../App';
import { isAuthorized } from '../../services/auth';


export default class AppModel {
     static getDefaultReactNode(apiKey) {
          return (
               <React.StrictMode>
                    <App apiKey={apiKey}/>
               </React.StrictMode>
          );
     }

     static getDefaultRoot() {
          return ReactDOM.createRoot(document.getElementById('root'));
     }

     static create(apiKey) {
          var appModel = new AppModel();
          appModel._root = AppModel.getDefaultRoot();
          appModel._reactNode = AppModel.getDefaultReactNode(apiKey);
     }

     constructor() {
          this._root = null;
          this._reactNode = null;
     }

     initialize(apiKey) {
          this._root = AppModel.getDefaultRoot();
          this._reactNode = AppModel.getDefaultReactNode(apiKey);
     }

     get root() {
          return this._root;
     }
     set root(newRoot) {
          this._root = newRoot;
     }
     get reactNode() {
          return this._reactNode;
     }
     set reactNode(newReactNode) {
          this._reactNode = newReactNode;
     }

}