
[**my-flix-angular-client**](../../README.md)

***

[my-flix-angular-client](../../modules.md) / [fetch-api-data](../README.md) / UserRegistrationService

# Class: UserRegistrationService

Defined in: [fetch-api-data.ts:21](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L21)

## Constructors

### Constructor

> **new UserRegistrationService**(`http`): `UserRegistrationService`

Defined in: [fetch-api-data.ts:23](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L23)

#### Parameters

##### http

`HttpClient`

#### Returns

`UserRegistrationService`

## Properties

### localStorage

> **localStorage**: `LocalStorageService`

Defined in: [fetch-api-data.ts:24](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L24)

## Methods

### addFavoriteMovie()

> **addFavoriteMovie**(`userName`, `movieId`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:127](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L127)

**`Function`**

addFavoriteMovie
This function adds a movie to the user's favorite list.
It sends a POST request to the server with the user's username and the movie ID.

#### Parameters

##### userName

`any`

The username of the user.

##### movieId

`any`

The ID of the movie to add.

#### Returns

`Observable`\<`any`\>

An observable containing the server response.

***

### deleteFavoriteMovie()

> **deleteFavoriteMovie**(`userId`, `movieId`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:256](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L256)

**`Function`**

deleteFavoriteMovie
This function removes a movie from the user's favorite list.
It sends a DELETE request to the server with the user's ID and the movie ID.

#### Parameters

##### userId

`any`

The ID of the user.

##### movieId

`any`

The ID of the movie to remove from favorites.

#### Returns

`Observable`\<`any`\>

An observable containing the server response.

***

### deleteUser()

> **deleteUser**(`userId`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:330](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L330)

#### Parameters

##### userId

`any`

#### Returns

`Observable`\<`any`\>

***

### editUser()

> **editUser**(`Username`, `userData`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:231](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L231)

**`Function`**

editUser
This function updates user information such as username, email, and birthday.

#### Parameters

##### Username

`any`

The username of the user to update.

##### userData

`any`

An object containing the updated user information.

#### Returns

`Observable`\<`any`\>

An observable containing the server response.

***

### getAllMovies()

> **getAllMovies**(): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:303](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L303)

#### Returns

`Observable`\<`any`\>

***

### getDirector()

> **getDirector**(`directorName`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:165](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L165)

**`Function`**

getDirector

#### Parameters

##### directorName

`any`

#### Returns

`Observable`\<`any`\>

***

### getFavoriteMovies()

> **getFavoriteMovies**(): `any`

Defined in: [fetch-api-data.ts:288](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L288)

#### Returns

`any`

***

### getGenre()

> **getGenre**(`genreName`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:183](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L183)

**`Function`**

getGenre

#### Parameters

##### genreName

`any`

#### Returns

`Observable`\<`any`\>

This function retrieves details of a specific genre by its name.
It sends a GET request to the server with the genre name.

#### Remarks

***

### getOneMovie()

> **getOneMovie**(`movieDetail`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:149](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L149)

**`Function`**

getOneMovie
This function retrieves details of a specific movie by its title.
It sends a GET request to the server with the movie title.

#### Parameters

##### movieDetail

`any`

The title of the movie to retrieve.

#### Returns

`Observable`\<`any`\>

An observable containing the movie details.

***

### getStoredUser()

> **getStoredUser**(): `any`

Defined in: [fetch-api-data.ts:283](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L283)

**`Function`**

getStoredUser
This function retrieves the stored user data from localStorage.
It parses the JSON string stored under the key 'user' and returns the user object.

#### Returns

`any`

The user object if found, or null if not found.

#### Remarks

This function is used to access user data such as username, email, birthday, and favorite movies.
It is typically called after a user logs in or registers to retrieve their profile information.

***

### getUser()

> **getUser**(`userInfo`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:204](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L204)

**`Function`**

getUser

#### Parameters

##### userInfo

`any`

The username of the user to retrieve.

#### Returns

`Observable`\<`any`\>

An observable containing the user information.
This function retrieves user information by username.
It sends a GET request to the server with the username.
Be sure to include the token in the request headers for authentication.

#### Remarks

The user information includes details such as username, email, birthday, and favorite movies.

***

### updateStoredUser()

> **updateStoredUser**(`userData`): `void`

Defined in: [fetch-api-data.ts:294](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L294)

#### Parameters

##### userData

`any`

#### Returns

`void`

***

### userLogin()

> **userLogin**(`user`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:99](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L99)

**`Function`**

userLogin

#### Parameters

##### user

`any`

This function handles user login by sending a POST request to the server with the user's credentials.
It expects an object containing the username and password.

#### Returns

`Observable`\<`any`\>

An observable containing the server response. 
If the login is successful, it stores the token in localStorage.

#### Example

request body should be in the following format:
```typescript
const user = {
  Username: 'john_doe',
  Password: 'securePassword123'
};
```
Response will include a token if login is successful:

```typescript
{
  token: 'your_jwt_token_here',
  user: {
    Passord: 'hashedPassword',
    Username: 'john_doe',
    Birthday: '1990-01-01',     
    Email: 'john@example.com'
    movieID: ['movieId1', 'movieId2'],
    _id: 'userId123',
  }
};
```

#### Remarks

This function is used to authenticate users in the MyFlix Angular application.

***

### userRegistration()

> **userRegistration**(`userDetails`): `Observable`\<`any`\>

Defined in: [fetch-api-data.ts:44](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/fetch-api-data.ts#L44)

#### Parameters

##### userDetails

`any`

An object containing user details such as username, password, email, and birthday.

#### Returns

`Observable`\<`any`\>

An observable containing the server response.

#### Example

```typescript
const userDetails = {
  Username: 'john_doe',
  Password: 'securePassword123',
  Email: 'john@example.com',
  Birthday: '1990-01-01'
};
```
