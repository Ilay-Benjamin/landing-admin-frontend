import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { loadAppConfig } from './config/app/initializeApp.js';
import { loadDatabaseConfig } from './config/global/initializeDB.js';
import {appConfig , appEnvironment, getApiKey} from './config/app/app.config.js';
import { globalConfig, databaseCollections, apiKey} from './config/global/global.config';





export function renderApp() {
const root = ;
    
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}