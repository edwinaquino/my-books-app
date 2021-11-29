import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// This component will render the search button at the bottom of the page
class BookSearchIcon extends Component {
    render() {
        return (
            <div className="open-search">{/* SEARCH BUTTON */}
            <Link to="/BookSearch">Add a book</Link>
        </div>
        )
    }
}
export default BookSearchIcon