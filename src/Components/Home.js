import React, { Component } from 'react';
import BookShelf from '../Components/BookShelf';
import BookSearchIcon from '../Components/BookSearchIcon';
class Home extends Component {



    render() {


        return (
            <>




                    <BookShelf books={this.props.currentlyReading} shelfDetail="CurrentlyReading" shelfValue="currentlyReading" shelfName="📖 Currently Reading" updateBookShelf={this.updateBookShelf} {...this.props} />
                    <BookShelf books={this.props.wantToRead} shelfDetail="WantToRead" shelfValue="WantToRead" shelfName="🌠 Want To Read" updateBookShelf={this.updateBookShelf} {...this.props} />
                    <BookShelf books={this.props.read} shelfDetail="Read" shelfValue="read" shelfName="⌛ Read" updateBookShelf={this.props.updateBookShelf} {...this.props} />



                    <BookSearchIcon />







                {/* <BookShelf />
                <BookShelf />
                <BookShelf /> */}
            </>
        )
    }
}

export default Home