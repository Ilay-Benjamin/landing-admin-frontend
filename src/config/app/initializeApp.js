import { appEnvironment } from './app.config.js';


export function loadAppConfig(apiKey) {
     appEnvironment.apiKey = apiKey;
}



