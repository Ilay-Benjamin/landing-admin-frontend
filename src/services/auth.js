import $ from 'jquery';
import { appEnvironment, server, getApiKey } from './../config/app/app.config';
import * as requestUtils from './../utils/requestUtils';



export async function isAuthorized() {
     try {
          var isAuthorized = await requestUtils.fetchWithToken(
               requestUtils.assembleURL(server.url, "auth"),
               { apiKey: getApiKey() }
          );
          if (!isAuthorized) {
               throw new Error('Connection failed');
          }
          if (isAuthorized.status !== 200) {
               throw new Error(isAuthorized.statusText.toString());
          }
          return true;
     } catch (error) {
          console.error(error);
          return false;
     }
}

