import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./Components/Home"
import Header from "./Components/Header"
import BookDetails from "./Components/BookDetails"
import BookSearch from "./Components/BookSearch"
import BookShelf from "./Components/BookShelf"
class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    none: [],
    myCurrentBooks: []
  }
  componentDidMount() {
    //alert('componentDidMount'); // For debugging to confirm component was mounted
    BooksAPI.getAll().then((books) => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read'),
        myCurrentBooks: books
      })
      // DEBUGGING: CONFIRM API ARRAY IN CONSOLE
      console.log('LINE 47', books)
    })
  }
  updateBookShelf = (toShelf, book) => {
    let fromShelf = typeof book.shelf !== "undefined" ? book.shelf : "none";
    BooksAPI.update(book, toShelf).then(res => {
      book.shelf = toShelf
      this.setState(state => ({
        [toShelf]: state[toShelf].concat(book),
        [fromShelf]: state[fromShelf].filter((b) => b.id !== book.id),
        myCurrentBooks: state.myCurrentBooks.filter((b) => b.id !== book.id).concat(book)
      }))
      let msgStatus = (toShelf === 'none') ? 'Removed' : 'updated';
      let msg = "Success! '" + book.title + "' has been " + msgStatus + " to '" + this.unCamelCase(toShelf) + "'";
      alert(msg);
    })
  }
  unCamelCase(str) {
    return str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }
  render() {
    //console.log('LINE57 app.js',this.props);
    const bookCategories = ['CurrentlyReading', 'WantToRead', 'Read'];
    return (
      <div className="app">
        <Header />
        <div className="main-wrapper"> {/* // MAIN WRAPPER */}
          <Switch>
            <Route exact path="/" render={props => (
              <Home
                bookCategories={bookCategories}
                currentlyReading={this.state.currentlyReading}
                wantToRead={this.state.wantToRead}
                read={this.state.read} updateBookShelf={this.updateBookShelf}
                unCamelCase={this.unCamelCase}
                {...props} />
            )} />
            {bookCategories.map((bookCategory) => (
              <Route exact path={`/libro/:${bookCategory}`} render={props => (
                <BookShelf
                  books={this.state.currentlyReading}
                  shelfDetail={bookCategory}
                  shelfValue={bookCategory}
                  shelfName={this.unCamelCase(bookCategory)}
                  unCamelCase={this.unCamelCase}
                  updateBookShelf={this.updateBookShelf}
                  {...props} />
              )} />
            ))}
            <Route path="/BookDetails/" render={props => (
              <BookDetails {...props} />
            )} />
            <Route exact path="/BookSearch" render={props => (
              <BookSearch myCurrentBooks={this.state.myCurrentBooks} updateBookShelf={this.updateBookShelf} />
            )} />
          </Switch>
        </div> {/* CLOSE MAIN WRAPPER .list-books */}
      </div>
    )
  }
}
export default BooksApp
