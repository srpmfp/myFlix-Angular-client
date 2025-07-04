[**my-flix-angular-client**](/README.md)

***

[my-flix-angular-client](../../../modules.md) / [welcome-view/welcome-view](../README.md) / WelcomePage

# Class: WelcomePage

Defined in: [welcome-view/welcome-view.ts:16](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/welcome-view/welcome-view.ts#L16)

## Constructors

### Constructor

> **new WelcomePage**(): `WelcomePage`

#### Returns

`WelcomePage`

## Properties

### title

> `protected` **title**: `string` = `'myFlix-Angular-client'`

Defined in: [welcome-view/welcome-view.ts:17](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/welcome-view/welcome-view.ts#L17)

## Methods

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [welcome-view/welcome-view.ts:30](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/welcome-view/welcome-view.ts#L30)

**`Function`**

ngOnInit

This function is called when the component is initialized.
It checks if a token exists in localStorage.
If a token exists, it redirects the user to the movies page.

#### Returns

`void`

***

### openUserLoginDialog()

> **openUserLoginDialog**(): `void`

Defined in: [welcome-view/welcome-view.ts:57](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/welcome-view/welcome-view.ts#L57)

**`Function`**

openUserLoginDialog
Opens the user login dialog.
This function is triggered when the user clicks on the "Login" button.

#### Returns

`void`

#### See

UserLoginForm [UserLoginForm](../../../user-login-form/user-login-form/classes/UserLoginForm.md) for the login form component.
*

***

### openUserRegistrationDialog()

> **openUserRegistrationDialog**(): `void`

Defined in: [welcome-view/welcome-view.ts:44](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/welcome-view/welcome-view.ts#L44)

**`Function`**

openUserRegistrationDialog
 Opens the user registration dialog.
 This function is triggered when the user clicks on the "Sign Up" button.

#### Returns

`void`

#### See

UserSignupForm [UserSignupForm](../../../user-signup-form/user-signup-form/classes/UserSignupForm.md) for the registration form component.
