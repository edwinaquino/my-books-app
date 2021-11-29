import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookShelfOptions from '../Components/BookShelfOptions';
class SearchBook extends Component {
    // INITIALIZE SEARCH STATE
    state = {
        query: '',
        books: [],
        isSearching: false,  // TRACK SEARCHING STATE
        hasError: false
    }
    updateSearch = (query) => {
        // CHANGE THE myCurrentBooks state
        this.setState({query: query,isSearching: true})
        const myCurrentBooks = this.props.myCurrentBooks;
        BooksAPI.search(query, 20).then((books) => {
            // validate books object was fetched from API
            // No data found
            if (typeof books !== "undefined" && typeof books.error != "undefined") {
                this.setState({books: [],isSearching: false,hasError: true});
            }
            // RESULTS FOUND
            else if (typeof books !== "undefined" && typeof books.map === "function") {
                // FOR DEBUGGING
                //console.log('BookSearc LIne26 Results:', books);
                //compare with my books in shelves and update the shelf property
                books.forEach(function (book) {
                    var myCurrentBook = myCurrentBooks.filter(x => x.id === book.id);
                    if (myCurrentBook.length > 0) {
                        book.shelf = myCurrentBook[0].shelf;
                    }
                    else {
                        book.shelf = "none";
                    }
                });
                this.setState({hasError: false,books: books,isSearching: false});
            }
            else {
                this.setState({hasError: false,books: [],isSearching: false
                });
            }
        })
    }
    updateSearchShelf = (toShelf, book) => {
        const books = this.state.books;
        const myCurrentBooks = this.props.myCurrentBooks.filter((b) => b.id !== book.id).concat(book);
        if (typeof books !== "undefined" && typeof books.map === "function") {
            // Loop match all the book in the bookshelf and assigned the appropiate state
            books.forEach(function (book) {
                var myCurrentBook = myCurrentBooks.filter(x => x.id === book.id);
                if (myCurrentBook.length > 0) {
                    book.shelf = myCurrentBook[0].shelf;
                }
                else {
                    book.shelf = "none";
                }
            });
            this.setState({
                books: books
            });
        }
        this.props.updateBookShelf(toShelf, book);
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search book by title or author [Example: 'linux']"
                            value={this.state.query}
                            onChange={(event) => this.updateSearch(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    {!this.state.isSearching && (
                        <ol className="books-grid">
                            {this.state.books.map((book) => (
                                <li key={book.id} className="book-grid">
                                    <div className="book">
                                        <div className="book-top">
                                            <Link to={{
                                                pathname: '/BookDetails/' + book.id,
                                                state: { book: book }
                                            }}>
                                                {/* BOOK IMAGE */}
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks === "undefined" ? "noCover.jpg" : book.imageLinks.thumbnail})` }}></div>
                                            </Link>
                                            {/* BOOK OPTIONS */}
                                            <BookShelfOptions book={book} updateBookShelf={this.updateSearchShelf} />
                                        </div>
                                        <Link to={{
                                            pathname: '/BookDetails/' + book.id,
                                            state: { book: book }
                                        }}>
                                            {/* BOOK TITLE */}
                                            <div className="book-title">{typeof book.title === "undefined" ? "No Title" : book.title}</div>
                                            {/* AUTHOR ERROR:
                                                TypeError: book.authors is undefined
                                                FIX: check if author is empty
                                                */}
                                            <div className="book-authors">{typeof book.authors === "undefined" ? "No Authors" : book.authors.join(', ')}</div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )}
                    {!this.state.isSearching && this.state.hasError && (
                        <p className="search-errro-message">No books Found under this search term. Please try again.</p>
                    )}
                </div>
            </div>
        )
    }
}
export default SearchBook