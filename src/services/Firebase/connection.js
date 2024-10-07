import $ from 'jquery';
import { initializeApp } from 'firebase/app';


export async function establishConnection() {
    var res = await getFirebaseConfigurations();
    console.log("1. " + JSON.stringify(res, undefined, 2));

    if (res.status !== "success") {
        console.error('Failed to get firebase configurations');
        return null;
    }

    var firebaseConfigs = res.firebaseConfigs
    console.log("2. " + JSON.stringify(firebaseConfigs, undefined, 2));

    var firebaseApp = initializeApp(firebaseConfigs);
    console.log("3. " + JSON.stringify(firebaseApp, undefined, 2));

    if (!firebaseApp) {
        console.error('Failed to initialize firebase app');
        return null;
    }

    console.log('Firebase app initialized successfully');
    return firebaseApp;
}


async function getFirebaseConfigurations(callback) {
    var resData = {};
     await $.ajax({
        url: "https://hativatyoav.site/landing/applications/server/entrypoint.php",
        data: {
            action: 'getFirebaseConfigs'
        },
        type: 'GET',
        success: async function (response) {
            resData = JSON.parse(response);
        }
    });
    return resData;
}
