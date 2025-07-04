[**my-flix-angular-client**](../../../README.md)

***

[my-flix-angular-client](../../../modules.md) / [profile-view/profile-view](../README.md) / ProfileView

# Class: ProfileView

Defined in: [profile-view/profile-view.ts:48](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L48)

## Implements

- `OnInit`

## Constructors

### Constructor

> **new ProfileView**(): `ProfileView`

#### Returns

`ProfileView`

## Properties

### localStorage

> **localStorage**: [`LocalStorageService`](../../../services/storage.service/classes/LocalStorageService.md)

Defined in: [profile-view/profile-view.ts:49](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L49)

***

### userDetails

> **userDetails**: `object`

Defined in: [profile-view/profile-view.ts:50](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L50)

#### birthday

> **birthday**: `string` = `''`

#### email

> **email**: `string` = `''`

#### Password

> **Password**: `string` = `''`

#### Username

> **Username**: `string` = `''`

## Methods

### deleteUser()

> **deleteUser**(): `void`

Defined in: [profile-view/profile-view.ts:195](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L195)

**`Function`**

deleteUser
Deletes the user profile by sending a request to the server.
It retrieves the username from localStorage, sends a delete request,
and handles the response.
If the deletion is successful, it clears the localStorage and navigates to the welcome page.
If there is an error, it logs the error and shows an error message in a snackbar.

#### Returns

`void`

#### See

 - UserRegistrationService.deleteUser for the API interaction.
 - LocalStorageService for managing localStorage operations.

***

### goBack()

> **goBack**(): `void`

Defined in: [profile-view/profile-view.ts:221](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L221)

**`Function`**

goBack
Navigates back to the movies page.
This function is typically called when the user clicks a "Back" button in the profile view.

#### Returns

`void`

void

***

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [profile-view/profile-view.ts:76](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L76)

**`Function`**

ngOnInit
This function is called when the component is initialized.
It checks if a user is logged in by looking for a 'user' item in localStorage.
If no user is found, it redirects to the welcome page.

#### Returns

`void`

#### Implementation of

`OnInit.ngOnInit`

***

### updateUser()

> **updateUser**(): `void`

Defined in: [profile-view/profile-view.ts:129](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/profile-view/profile-view.ts#L129)

**`Function`**

updateUser
This function is called when the user submits the profile update form.
It retrieves the current user data from localStorage,
validates the input, and sends an update request to the server.
* If the update is successful, it updates the localStorage with the new user data,
clears the password field in userDetails, and shows a success message.
* If there is an error during the update, it logs the error and shows an error message in a snackbar.

#### Returns

`void`

void

#### See

 - UserRegistrationService.editUser for the API interaction.
 - LocalStorageService for managing localStorage operations.
Updates the user profile information.
