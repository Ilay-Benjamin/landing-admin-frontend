import { databaseEnvironment } from './app.config.js';


export function loadDatabaseConfig(firebaseConfigurations, firebaseServiceAccount) {
     databaseEnvironment.firebase.configurations = firebaseConfigurations;
     databaseEnvironment.firebase.serviceAccount = firebaseServiceAccount;
}
