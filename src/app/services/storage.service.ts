import { inject, InjectionToken, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

function mockLocalStorage(): Storage {
  return {
    length: 0,
    key: () => null,
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null,
  };
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>(
  'LOCAL_STORAGE_TOKEN',
  {
    factory: () => {
      const platformId = inject(PLATFORM_ID);
      const isBrowser = isPlatformBrowser(platformId);
      const document = inject(DOCUMENT);

      if (isBrowser) {
        return document.defaultView?.localStorage ?? mockLocalStorage();
      } else {
        return mockLocalStorage();
      }
    },
  }
);
@Injectable({
  providedIn: 'root',
})

export class LocalStorageService implements Storage {
  private _storage = inject(LOCAL_STORAGE_TOKEN);

  readonly enabled = isPlatformBrowser(inject(PLATFORM_ID));

  get length() {
    return this._storage.length;
  }

  /**
   *  
   * Clears all items from local storage.
   * This method removes all key-value pairs from the local storage.
   * It is useful for resetting the storage or clearing user data.
   * * @see Storage.clear {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear}
   * @returns {void}
   */
  
  clear() {
    this._storage.clear();

  }

  /**
   * 
   * @param key - The key of the item to retrieve from local storage.
   * This method retrieves the value associated with the specified key from local storage.
   * If the key does not exist, it returns null.
   * @returns {string | null} The value associated with the key, or null if not found.
   */
  getItem(key: string) {
    return this._storage.getItem(key);
  }
  /**
   * 
   * @param index - The index of the key to retrieve from local storage.
   * This method retrieves the key at the specified index from local storage.
   * @returns 
   */
  key(index: number) {
    return this._storage.key(index);
  }
  /**
   * 
   * @param key - The key of the item to remove from local storage.
   * This method removes the item associated with the specified key from local storage.
   * It is useful for deleting specific user data or settings.
   * @returns {void}
   * * @see Storage.removeItem {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem}
   */
  removeItem(key: string): void {
    this._storage.removeItem(key);
  }
  /**
   * 
   * @param key - The key under which the value will be stored in local storage.
   * @param value - The value to be stored in local storage.
   * This method stores a key-value pair in local storage.
   * If the key already exists, it will overwrite the existing value.
   * * @returns {void}
   * * @see Storage.setItem {@link https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem}
   */
  setItem(key: string, value: string): void {
    this._storage.setItem(key, value);
  }
}