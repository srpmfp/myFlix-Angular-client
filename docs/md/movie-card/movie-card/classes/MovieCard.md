[**my-flix-angular-client**](/README.md)

***

[my-flix-angular-client](../../../modules.md) / [movie-card/movie-card](../README.md) / MovieCard

# Class: MovieCard

Defined in: [movie-card/movie-card.ts:44](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L44)

## Constructors

### Constructor

> **new MovieCard**(): `MovieCard`

#### Returns

`MovieCard`

## Properties

### dialog

> **dialog**: `MatDialog`

Defined in: [movie-card/movie-card.ts:61](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L61)

***

### localStorage

> **localStorage**: [`LocalStorageService`](../../../services/storage.service/classes/LocalStorageService.md)

Defined in: [movie-card/movie-card.ts:45](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L45)

***

### movies

> **movies**: `any`[]

Defined in: [movie-card/movie-card.ts:48](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L48)

## Methods

### addToFavorites()

> **addToFavorites**(`movieId`): `void`

Defined in: [movie-card/movie-card.ts:186](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L186)

**`Function`**

addToFavorites
Adds or removes a movie from the user's favorites list. uses localstorage to optimistically update the UI.

#### Parameters

##### movieId

`any`

The ID of the movie to be added or removed.

#### Returns

`void`

#### See

 - UserRegistrationService.addFavoriteMovie [UserRegistrationService.addFavoriteMovie](../../../fetch-api-data/classes/UserRegistrationService.md#addfavoritemovie) for API call
 - UserRegistrationService.deleteFavoriteMovie [UserRegistrationService.deleteFavoriteMovie](../../../fetch-api-data/classes/UserRegistrationService.md#deletefavoritemovie) for API call
 - LocalStorageService [LocalStorageService.setItem](../../../services/storage.service/classes/LocalStorageService.md#setitem) for storing user data
This  function optimistically updates the local state and then makes an API call.

***

### getMovies()

> **getMovies**(): `void`

Defined in: [movie-card/movie-card.ts:162](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L162)

**`Function`**

getMovies
Fetches the list of movies from the API and stores them in localStorage.
This function is called when the component is initialized.

#### Returns

`void`

#### See

 - UserRegistrationService.getAllMovies for API call
 - LocalStorageService [LocalStorageService.setItem](../../../services/storage.service/classes/LocalStorageService.md#setitem) for storing movies

***

### isFavorite()

> **isFavorite**(`movieId`): `any`

Defined in: [movie-card/movie-card.ts:140](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L140)

**`Function`**

isFavorite
Checks if a movie is in the user's favorites list.

#### Parameters

##### movieId

`any`

The ID of the movie to check.

#### Returns

`any`

A string indicating whether the movie is a favorite or not to set CSS classes.

***

### navToProfile()

> **navToProfile**(): `void`

Defined in: [movie-card/movie-card.ts:55](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L55)

#### Returns

`void`

***

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [movie-card/movie-card.ts:126](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L126)

**`Function`**

ngOnInit
Initializes the component and fetches the list of movies.
This function is called when the component is created.

#### Returns

`void`

***

### openDialog()

> **openDialog**(`enterAnimationDuration`, `exitAnimationDuration`, `infoType`, `information`): `void`

Defined in: [movie-card/movie-card.ts:63](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L63)

#### Parameters

##### enterAnimationDuration

`string`

##### exitAnimationDuration

`string`

##### infoType

`string`

##### information

`any`

#### Returns

`void`

***

### setDialog()

> **setDialog**(`data`, `infoType`): `any`

Defined in: [movie-card/movie-card.ts:83](https://github.com/srpmfp/myFlix-Angular-client/blob/3b98426b0b09b021ab5e603ef7ab490cf6b10ea4/src/app/movie-card/movie-card.ts#L83)

**`Function`**

setDialog
Prepares the dialog data based on the information type.

#### Parameters

##### data

`any`

The data to be displayed in the dialog.
Uses a switch statement to handle different information types (Genre, Director, Synopsis)

##### infoType

`string`

The parameter that determines which case to execute.

#### Returns

`any`

The formatted dialog data.
