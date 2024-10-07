class UrlUtils {
    static parse(url) {
        if (url.startsWith('/')) {
            url = url.slice(1);
        }
        if (url.endsWith('/')) {
            url = url.slice(0, -1);
        }
        return url;
    }

    static length(url) {
        return url.split('/').length;
    }

    static isRoot(url) {
        return url === '/';
    }

    static last(url) {
        let parts = url.split('/');
        return parts[parts.length - 1];
    }

    static first(url) {
        let parts = url.split('/');
        return parts[0];
    }

    static parts(url) {
        return url.split('/');
    }

    static isLast(url, part) {
        return url.endsWith(part);
    }

    static isFirst(url, part) {
        return url.startsWith(part);
    }

    static has(url, part) {
        return url.includes(part);
    }

    static at(url, index) {
        let parts = url.split('/');
        return parts[index];
    }

    static indexOf(url, part) {
        let parts = url.split('/');
        return parts.indexOf(part);
    }
}

export default class Page {
    static URL_UTILS = class extends UrlUtils {
        static join(...args) {
            return args.join('/');
        }
    
        static up(url) {
            let parts = url.split('/');
            parts.pop();
            return parts.join('/');
        }
    
        static down(url, part) {
            return `${url}/${part}`;
        }
    };

    static PAGE_UTILS = class {
        static URL_UTILS = Page.URL_UTILS;

        static PAGE_PROPERTIES = ['name', 'url', 'ext'];

        static emptyPage() {
            return new Page('', '');
        }
      
        static errorPage() {
            return new Page('Error', '/error');
        }

        static isEquals(page1, page2) {
            return page1.url === page2.url;
        }

        static isComparable(obj){
            var objKeys = Object.keys(obj);
            if (objKeys.length !== this.PAGE_PROPERTIES.length) {
                return null;
            }
            for (let i = 0; i < objKeys.length; i++) {
                if (objKeys[i] !== this.PAGE_PROPERTIES[i]) {
                    return null;
                }
            }
            return true;
        }

        static fromObject(obj) {
            if (!this.isComparable(obj)) {
                return null;
            }
            return new Page(obj.name, obj.url);
        }

        static toObject(page) {
            return {
                name: page.name,
                url: page.url,
                ext: page.ext
            };
        }
    }

    constructor(name, url = '/') {
        this._name = name;
        this._url = url;
        this._ext = 'html';
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
        this._name = Page.URL_UTILS.last(value);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
        this._url = Page.URL_UTILS.down(Page.URL_UTILS.up(this._url), value);
    }

    get ext() {
        return this._ext;
    }

    set ext(value) {
        this._ext = value;
    }

    toString() {
        return `${this._name} - ${this._url}.${this._ext}`;
    }

    print() {
        console.log(this.toString());
    }

    isEquals(page) {
        return (
            this._name === page.name &&
            this._url === page.url &&
            this._ext === page.ext
        );
    }
}
