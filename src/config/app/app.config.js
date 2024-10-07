import appConfigJSON from './app.config.json';
import Home from '../../pages/Home/index.Home';
import ErrorPage from '../../pages/Error/index.Error';
import SettingsPage from '../../pages/other/Settings/index.Settings';
import IssuePage from '../../pages/other/Issue/index.Issue';
import BulletinEditorPage from '../../pages/editors/BulletinEditor/index.BulletinEditor';
import ContactEditorPage from '../../pages/editors/ContactEditor/index.ContactEditor';
import HoursEditorPage from '../../pages/editors/HoursEditor/index.HoursEditor';
import SearhPage from '../../pages/assistance/Search/index.Search';
import HelpPage from '../../pages/assistance/Help/index.Help';
import ContactPage from '../../pages/assistance/Contact/index.Contact';



export const appConfig = JSON.parse(JSON.stringify(appConfigJSON));


export const appDetails = appConfig.app.details;
export const appData = appConfig.app.data;
export const credits = appConfig.description.credits;
export const appPort = appConfig.port;
export const domain = appConfig.domain;


export const appEnvironment = {
    name: appConfig.name,
    version: appConfig.version,
    port: appConfig.port,
    domain: appConfig.domain,
    apiKey: ""
}


export const server = {
    url: appConfig.server.url
}



export const appPages = {

    //  [Page1, Page2, ..., PageN]
    pages: appConfig.app.details.pages,

    //  [RouteName1, RouteName2, ..., RouteNameN]
    routes: () => {
        var routesList = [];
        appConfig.app.details.pages.forEach(page => {
            if (!routesList.includes(page.route)) {
                routesList.push(page.route);
            }
        });
        return routesList;
    },

    //  {
    //      RouteName1: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      },
    //      RouteName2: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      },
    //      ...,
    //      RouteNameN: {
    //          Page1: Page1, Page2: Page2, ..., PageN: PageN
    //      }
    //  }
    pagesMap: () => {
        var pagesMap = {};
        appConfig.app.details.pages.forEach(page => {
            if (!pagesMap[page.route]) {
                pagesMap[page.route] = {};
            }
            pagesMap[page.route][page.name] = page;
        });
        return pagesMap;
    },

    //  {
    //      RouteName1: [
    //          Page1, Page2, ..., PageN
    //      ], 
    //      RouteName2: [
    //          Page1, Page2, ..., PageN
    //      ], 
    //      ..., 
    //      RouteNameN: [
    //          Page1, Page2, ..., PageN
    //      ]
    //  }
    getRoutesList: () => {
        var routesMap = {};
        appConfig.app.details.pages.forEach(page => {
            if (!appConfig.app.details.pages.includes(page.route)) {
                routesMap[page.route] = Array.from([]).push(page);
            } else {
                routesMap[page.route].push(page);
            }
        })
        return routesMap
    },

    // {
    //      RouteName1: [
    //          Page1, Page2, ..., PageN
    //      ]
    //  }
    getRoute: (route) => {
        var routeMap = {};
        routeMap[route] = [];
        appConfig.app.details.pages.forEach(page => {
            if (page.route === route) {
                routeMap[route].push(page);
            }
        });
        return routeMap;
    },

    // [Page1, Page2, ..., PageN] (Where Page1.route === route)
    getPagesList: (route) => {
        return appConfig.app.details.pages.filter(page => page.route === route);
    },

    // Page (Where Page.route === route && Page.name === pageName)
    getPage: (route, pageName) => {
        return appConfig.app.details.pages.find(page => page.route === route && page.name === pageName);
    },

    builder: {

        getPageComponent: (route, pageName) => {
            var page = appConfig.app.details.pages.find(page => page.route.toLowerCase() === route.toLowerCase() && page.name.toLowerCase() === pageName.toLowerCase());
            var componentPath = page.component;
            if (!componentPath) {
                return ErrorPage;
            }
            //src/pages/editors/ContactEditor/index.ContactEditor.js
            var fixedComponentPath = componentPath;
            fixedComponentPath = fixedComponentPath.startsWith('/') ? fixedComponentPath.substring(1) : fixedComponentPath;
            var pathComponents = fixedComponentPath.split('/');
            pathComponents.shift();
            fixedComponentPath = pathComponents.join('/');
            fixedComponentPath = fixedComponentPath.replace('.js', '');
            pathComponents = fixedComponentPath.split('.');
            fixedComponentPath = pathComponents[0];
            fixedComponentPath = fixedComponentPath.replace('/index', '');
            switch (fixedComponentPath) {
                case "home":
                    return Home;
                case "error":
                    return ErrorPage;
                case 'other/settings':
                    return SettingsPage;
                case 'other/issue':
                    return IssuePage;
                case 'editors/bulletineditor':
                    return BulletinEditorPage;
                case 'editors/contacteditor':
                    return ContactEditorPage;
                case 'editors/hourseditor':
                    return HoursEditorPage;
                case 'assistance/search':
                    return SearhPage;
                case 'assistance/help':
                    return HelpPage;
                case 'assistance/contact':
                    return ContactPage;
                default:
                    return ErrorPage;
            }
        },

        getPageComponentText: (route, pageName) => {
            var page = appConfig.app.details.pages.find(page => page.route.toLowerCase() === route.toLowerCase() && page.name.toLowerCase() === pageName.toLowerCase());
            var componentPath = page.component;
            if (!componentPath) {
                return 'ErrorPadsgge';
            }
            //src/pages/editors/ContactEditor/index.ContactEditor.js
            var fixedComponentPath = componentPath;
            fixedComponentPath = fixedComponentPath.startsWith('/') ? fixedComponentPath.substring(1) : fixedComponentPath;
            var pathComponents = fixedComponentPath.split('/');
            pathComponents.shift();
            fixedComponentPath = pathComponents.join('/');
            fixedComponentPath = fixedComponentPath.replace('.js', '');
            pathComponents = fixedComponentPath.split('.');
            fixedComponentPath = pathComponents[0];
            fixedComponentPath = fixedComponentPath.replace('/index', '');
            alert(fixedComponentPath + " - " + "editors/contactEditor");
            switch (fixedComponentPath) {
                case "home":
                    return "Home";
                case "error":
                    return 'ErrorPage';
                case 'other/settings':
                    return 'SettingsPage';
                case 'other/issue':
                    return 'IssuePage';
                case 'editors/bulletineditor':
                    return 'BulletinEditorPage';
                case 'editors/ContactEditor':
                    return 'ContactEditorPage';
                case 'editors/hoursEditor':
                    return 'HoursEditorPage';
                case 'assistance/search':
                    return 'SearhPage';
                case 'assistance/help':
                    return 'HelpPage';
                case 'assistance/contact':
                    return 'ContactPage';
                default:
                    return 'ErrorPadfage';
            }
        },

        createPageData: (route, name, props) => {
            var newPage = appPages.getPage(route, name);
            var newPageData = {
                name: newPage.name,
                route: newPage.route,
                path: newPage.path,
                props: Object.assign(props),
                component: appPages.builder.getPageComponent(newPage.route, newPage.name),
                buildComponent: () => {
                    return <newPageData.component {...props}/>
                }
            }
            return newPageData;
        }
    }
}



export function getApiKey() {
    return appEnvironment.apiKey;
}



