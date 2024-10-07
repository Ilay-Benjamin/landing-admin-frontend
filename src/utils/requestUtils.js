import $ from 'jquery';
import { appEnvironment, server, getApiKey } from './../config/app/app.config';
import { databaseEnvironment, getFirebaseConfigurations, getFirebaseServiceAccount } from './../config/global/global.config';



export function assembleURL(baseUrl, path) {
     if (!baseUrl) {
         return null;
     }
 
     // Normalize baseUrl to ensure it ends with "/"
     if (!baseUrl.endsWith("/")) {
         baseUrl += "/";
     }
 
     // Normalize path to ensure it doesn't start with "/"
     if (path && path.startsWith("/")) {
         path = path.substring(1);
     }
 
     return path ? baseUrl + path : baseUrl;
 }
 

 export function assembleURLWithParams(baseUrl, path, params = {}) {
     let url = assembleURL(baseUrl, path);
 
     // Add query params if they exist
     if (Object.keys(params).length > 0) {
         const queryString = new URLSearchParams(params).toString();
         url += "?" + queryString;
     }
 
     return url;
 }


 export function fetchWithParams(url, params = {}) {
     return fetch(assembleURLWithParams(url, null, params));
 }


 export function fetchWithToken(url, params = {}) {
     const apiKey = getApiKey();
     if (!apiKey) {
         throw new Error("API key is missing");
     }
     return fetchWithParams(url, {
         ...params,
         apiKey
     });
}