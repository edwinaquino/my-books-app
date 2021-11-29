import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelfOptions from '../Components/BookShelfOptions';
// The purpose of this component is to render each book section (shelf)
class BookShelf extends Component {
    state = {
        // Determine if rendering home page
        mainPage: this.props.location.pathname === "/"
    }
    render() {
        //For debugging
        //console.log('LINE14 Shelf.js', this.props);
        const shelfBooks = this.props.books.slice(0, 10);
        return (
            <>
                <div className="list-books-content">
                    <div>
                        {/* BOOK SHELF 1 */}
                        <div className="bookshelf">
                            {/* BOOK SHELF TITLE */}
                            <h2 className="bookshelf-title"><span>{this.props.shelfName}</span>
                                <span style={{ paddingLeft: "10px" }}>
                                    {this.state.mainPage && (
                                        <Link to={`/libro/${this.props.shelfDetail}`}>See All</Link>
                                    )}
                                </span>
                            </h2>
                            {/* BOOK SHELF LIST WRAPPER */}
                            <div className="bookshelf-books">
                                {/* BOOK SHELF LIST */}
                                <ol className="books-grid">
                                    {/* LOOK THROUGH BOOKS */}
                                    {shelfBooks.map((book) => (
                                        <li key={book.id} className="book-grid">
                                            <div className="book">
                                                <div className="book-top">
                                                    <Link to={{
                                                        pathname: '/BookDetails/' + book.id,
                                                        state: { book: book }
                                                    }}>
                                                        {/* BOOK IMAGE */}
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                                    </Link>
                                                    {/* BOOK OPTIONS */}
                                                    <BookShelfOptions book={book} updateBookShelf={this.props.updateBookShelf} />
                                                </div>
                                                <Link to={{
                                                    pathname: '/BookDetails/' + book.id,
                                                    state: { book: book }
                                                }}>
                                                    {/* BOOK TITLE */}
                                                    <div className="book-title">{book.title}</div>
                                                    {/* BOOK AUTHOR */}
                                                    <div className="book-authors">{book.authors.join(', ')}</div>
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default BookShelf