export class LocalStorageService {
  static save(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string) {
    const { data } = JSON.parse(window.localStorage.getItem(key) || "{}");
    return data || null;
  }

  static remove(key: string) {
    return window.localStorage.removeItem(key);
  }
}
