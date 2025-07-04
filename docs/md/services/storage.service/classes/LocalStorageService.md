[**my-flix-angular-client**](../../../README.md)

***

[my-flix-angular-client](../../../modules.md) / [services/storage.service](../README.md) / LocalStorageService

# Class: LocalStorageService

Defined in: [services/storage.service.ts:35](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L35)

## Implements

- `Storage`

## Constructors

### Constructor

> **new LocalStorageService**(): `LocalStorageService`

#### Returns

`LocalStorageService`

## Properties

### enabled

> `readonly` **enabled**: `boolean`

Defined in: [services/storage.service.ts:38](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L38)

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [services/storage.service.ts:40](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L40)

Returns the number of key/value pairs.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/length)

##### Returns

`number`

#### Implementation of

`Storage.length`

## Methods

### clear()

> **clear**(): `void`

Defined in: [services/storage.service.ts:53](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L53)

Clears all items from local storage.
This method removes all key-value pairs from the local storage.
It is useful for resetting the storage or clearing user data.
*

#### Returns

`void`

#### See

Storage.clear [https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)

#### Implementation of

`Storage.clear`

***

### getItem()

> **getItem**(`key`): `null` \| `string`

Defined in: [services/storage.service.ts:65](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L65)

#### Parameters

##### key

`string`

The key of the item to retrieve from local storage.
This method retrieves the value associated with the specified key from local storage.
If the key does not exist, it returns null.

#### Returns

`null` \| `string`

The value associated with the key, or null if not found.

#### Implementation of

`Storage.getItem`

***

### key()

> **key**(`index`): `null` \| `string`

Defined in: [services/storage.service.ts:74](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L74)

#### Parameters

##### index

`number`

The index of the key to retrieve from local storage.
This method retrieves the key at the specified index from local storage.

#### Returns

`null` \| `string`

#### Implementation of

`Storage.key`

***

### removeItem()

> **removeItem**(`key`): `void`

Defined in: [services/storage.service.ts:85](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L85)

#### Parameters

##### key

`string`

The key of the item to remove from local storage.
This method removes the item associated with the specified key from local storage.
It is useful for deleting specific user data or settings.

#### Returns

`void`

*

#### See

Storage.removeItem [https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)

#### Implementation of

`Storage.removeItem`

***

### setItem()

> **setItem**(`key`, `value`): `void`

Defined in: [services/storage.service.ts:97](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/services/storage.service.ts#L97)

#### Parameters

##### key

`string`

The key under which the value will be stored in local storage.

##### value

`string`

The value to be stored in local storage.
This method stores a key-value pair in local storage.
If the key already exists, it will overwrite the existing value.
*

#### Returns

`void`

*

#### See

Storage.setItem [https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)

#### Implementation of

`Storage.setItem`
