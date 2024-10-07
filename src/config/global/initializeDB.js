import { databaseEnvironment } from './global.config.js';


export function loadDatabaseConfig(firebaseConfigurations, firebaseServiceAccount) {
     databaseEnvironment.firebase.configurations = firebaseConfigurations;
     databaseEnvironment.firebase.serviceAccount = firebaseServiceAccount;
}
