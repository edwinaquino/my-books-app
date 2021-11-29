import React, { Component } from 'react';
// RENDER BOOK DETAILS through /BookDetails/BookID
class BookDetails extends Component {
    render() {
        const book = this.props.location.state.book;
        // For Debugging
        console.clear();
        //console.log("BookDetails.js LINE 6: ", book)
        return (
            <div >
                <div style={{ marginBottom: "20px", paddingRight: "20px" }}>
                    <img alt="Book Cover" src={typeof book.imageLinks === "undefined" ? "/noCover.jpg" : book.imageLinks.thumbnail} style={{ float: "left", paddingRight: "20px" }} />
                    <h1>{typeof book.authors === "undefined" ? "No Title" : book.authors.join(', ')}</h1>
                    <p>by: {typeof book.authors === "undefined" ? "No Authors" : book.authors.join(', ')}</p>
                    <div style={{ clear: "left" }}></div>
                </div>
                <div>
                    <hr />
                    <h3>Description:</h3>
                    <p style={{ lineHeight: "2em" }}>{book.description} </p>
                </div>
                <div>
                    <hr />
                    <h3>Details:</h3>
                    <p>Date Published: <b>{book.publishedDate}</b></p>
                    <p>Number of Pages: <b>{book.pageCount}</b> </p>
                    <p>Rating: <b>{book.printType}</b> </p>
                </div>
            </div>
        )
    }
}
export default BookDetails