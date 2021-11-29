# React MyReads App

This is a fund and challenging project is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is built using React and uses  an API server to persist information as you interact with the application.

## Getting Started

To get started developing right away:

* Clone this project using Git: `git clone https://github.com/edwinaquino/my-books-app.git`
* cd into my-reads folder: `cd my-books-app`
* install all project dependencies with `npm install`
* start the development server with `npm start`
* Open In Browser - Your app should now be running on port 3000. One your browser to: http://localhost:3000

## Requirements
* React V16.6.3
* React Router: 4.2.2
* React Scripts: 2.1.1

## Application Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # No modification is required but encourage to customize.
│   └── noCover.jpg # Default book cover is none is available from the Udacity API.
└── src
    ├── Components  # Here is were all the components for this App are located.
    │   ├── BookDetails.js # Renders the book details for a single book.
    │   ├── BookSearch.js # Handles the searching and display the results
    │   ├── BookSearchIcon.js # Renders the search button at the bottom of the page
    │   ├── BookShelf.js # Renders each Book category and its related assigned books
    │   ├── BookShelfOptions.js # Renders that HTML Book status options
    │   ├── Header.js # The aplication header for the the app logo and home page link
    │   ├── Home.js # The home page component
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, a backend server was provided by Udaticy for the API. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
[MIT](https://choosealicense.com/licenses/mit/)
