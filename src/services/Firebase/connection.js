import $ from 'jquery';
import { appEnvironment, server, getApiKey } from '../../config/app/app.config';
import { databaseEnvironment, getFirebaseConfigurations, getFirebaseServiceAccount } from '../../config/global/global.config';
import * as requestUtils from '../../utils/requestUtils';
import { isAuthorized } from './../auth';


export async function establishConnection() {
     try {
          var isAuthorized = await isAuthorized();
          if (!isAuthorized) {
               throw new Error('Not authorized');
          }
          var connectionData = await requestUtils.fetchWithToken(
               requestUtils.assembleURL(server.url, "connect"), { 
                    firebaseConfigurations: getFirebaseConfigurations(),
                    firebaseServiceAccount: getFirebaseServiceAccount()
               }
          ); 
          if (!connectionData) {
               throw new Error('Connection failed');
          }
          if (connectionData.status !== 200) {
               throw new Error(connectionData.statusText.toString());
          }
          var parsedConnectionData = await connectionData.json();
          var connectionResults = parsedConnectionData.data;
          if (!connectionResults) {
               
          var appApiKey = getApiKey();
          var isAuthorizedParams = "apiKey=" + appApiKey;
          var isAuthorizedQuery = server.url + "?" + isAuthorizedParams;
          const isAuthorized = await fetch(`https://api.openweathermap.org/data/2.5/weather?`, {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    apiKey: appApiKey,})
          })       
          if (!appApiKey) {
               throw new Error('API key is missing');
          }
          const results = await fetch(`https://api.openweathermap.org/data/2.5/weather`, {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                    apiKey: appApiKey,
               })
          })
          if (results.status !== 200) {
               throw new Error(results.statusText.toString());
          }
          var parsedResults = await results.json();
          var resultsData = parsedResults.data;
          if (!resultsData) {
               throw new Error('No weather data received');
          }
          console.log(resultsData);
          return resultsData;
     } catch (error) {
          console.error("Error establishing connection:", error);
          return false;
     }
}