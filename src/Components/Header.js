import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            
            <header className="App-header">
                <nav>
                    <ul>
                        <li style={{textAlign: "left"}}>
                            
                            <Link to="/"><span role="img" aria-label="Books">📚</span> My Reads App</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header

