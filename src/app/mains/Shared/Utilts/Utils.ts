export class Utils {

    static clearSessionStorage() {
        sessionStorage.clear();
    }

    static setToSessionStorage(key: string, item: any) {
        sessionStorage.setItem(key, JSON.stringify(item));
    }

    static getToSessionStorage(key: string): any {
        return JSON.parse(sessionStorage.getItem(key))
    }
}
