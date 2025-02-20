export class LocalStorageService {
  static save(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string) {
    return JSON.parse(window.localStorage.getItem(key) || "{}");
  }
}
