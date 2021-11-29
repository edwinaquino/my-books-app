import React, { Component } from 'react';
// The purpose of this component is to render the book status options available in the drop down menu
class BookShelfOptions extends Component {
    render() {
        const options = {
            currentlyReading: "Currently Reading",
            wantToRead: "Want to Read",
            read: "Read",
            none: "None"
        }
        const book = this.props.book;
        return (
            <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(event) => {
                    this.props.updateBookShelf(event.target.value, book);
                }
                } >
                    <option value="none" disabled>Move to...</option>
                    {/* https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react */}
                    { Object.entries(options).map((t,k) => <option key={k} value={t[0]}>{t[1]}</option>) }  
                </select>
            </div>
        )
    }
}
export default BookShelfOptions