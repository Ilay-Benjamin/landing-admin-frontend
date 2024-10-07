import globalConfigJSON from './global.config.json';



export const globalConfig = JSON.parse(JSON.stringify(globalConfigJSON));


export const databaseEnvironment = {
     firebase: {
          configurations: {
               apiKey: "",
               authDomain: "",
               projectId: "",
               storageBucket: "",
               messagingSenderId: "",
               appId: "",
               measurementId: ""
          },
          serviceAccount: {
               type: "",
               privateKeyId: "",
               projectId: "",
               privateKey: "",
               clientEmail: "",
               clientId: "",
               authUri: "",
               tokenUri: "",
               authProviderCertUrl: "",
               clientCertUrl: "",
               universeDomain: ""
          },
     }
}


export const databaseCollections = {
     collections: globalConfig.data.landingPageProject.firebase.collections
}


export function getFirebaseConfigurations() {
     return databaseEnvironment.firebase.configurations;
}


export function getFirebaseServiceAccount() {
     return databaseEnvironment.firebase.serviceAccount;
}
