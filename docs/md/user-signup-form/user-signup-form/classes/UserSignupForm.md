[**my-flix-angular-client**](../../../README.md)

***

[my-flix-angular-client](../../../modules.md) / [user-signup-form/user-signup-form](../README.md) / UserSignupForm

# Class: UserSignupForm

Defined in: [user-signup-form/user-signup-form.ts:25](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/user-signup-form/user-signup-form.ts#L25)

## Constructors

### Constructor

> **new UserSignupForm**(): `UserSignupForm`

#### Returns

`UserSignupForm`

## Properties

### userDetails

> **userDetails**: `object`

Defined in: [user-signup-form/user-signup-form.ts:27](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/user-signup-form/user-signup-form.ts#L27)

#### birthday

> **birthday**: `string` = `''`

#### email

> **email**: `string` = `''`

#### Password

> **Password**: `string` = `''`

#### Username

> **Username**: `string` = `''`

## Methods

### registerUser()

> **registerUser**(): `void`

Defined in: [user-signup-form/user-signup-form.ts:45](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/user-signup-form/user-signup-form.ts#L45)

**`Function`**

registerUser
 This function is called when the user submits the registration form.
 It validates the form data and sends a registration request to the backend.
If the registration is successful, it closes the dialog and shows a success message.
If there is an error, it displays an error message in a snackbar.

#### Returns

`void`

#### See

UserRegistrationService [UserRegistrationService.userRegistration](../../../fetch-api-data/classes/UserRegistrationService.md#userregistration) for the API interaction.
