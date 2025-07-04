[**my-flix-angular-client**](../../../README.md)

***

[my-flix-angular-client](../../../modules.md) / [menubar-view/menubar-view](../README.md) / MenubarView

# Class: MenubarView

Defined in: [menubar-view/menubar-view.ts:27](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L27)

## Constructors

### Constructor

> **new MenubarView**(): `MenubarView`

#### Returns

`MenubarView`

## Properties

### localStorage

> **localStorage**: [`LocalStorageService`](../../../services/storage.service/classes/LocalStorageService.md)

Defined in: [menubar-view/menubar-view.ts:29](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L29)

***

### Router

> **Router**: `Router`

Defined in: [menubar-view/menubar-view.ts:28](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L28)

***

### snackBar

> **snackBar**: `MatSnackBar`

Defined in: [menubar-view/menubar-view.ts:30](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L30)

## Methods

### logOut()

> **logOut**(): `void`

Defined in: [menubar-view/menubar-view.ts:48](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L48)

**`Function`**

logOut
Logs the user out by clearing localStorage and navigating to the welcome page.

#### Returns

`void`

***

### navToProfile()

> **navToProfile**(): `void`

Defined in: [menubar-view/menubar-view.ts:39](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/menubar-view/menubar-view.ts#L39)

**`Function`**

navToProfile
Navigates to the user profile page.

This function is triggered when the user clicks on the profile button in the menubar.
It uses the Angular Router to navigate to the 'profile' route.

#### Returns

`void`
