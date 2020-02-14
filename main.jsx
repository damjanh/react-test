import React from 'react';
import ReactDOM from 'react-dom';

function CoderRequiremetsList() {
    return (
        <div>
            <h2>A coders requirements:</h2>
            <ul>
                <li>Pizza</li>
                <li>Coffee</li>
                <li>Motivation</li>
            </ul>
        </div>
    );
}

function AboutMe() {
    return (
        <div>
            <h2>About Me:</h2>
            <h3>Jane Doe</h3>
            <p>A full-stack software developer. Cat lover.</p>
            <h2>Favorite vacation locations:</h2>
            <ul>
                <li>Venice, Italy</li>
                <li>Berlin, Germany</li>
                <li>San Francisco, California</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h1>Hello</h1>
        <AboutMe />
        <CoderRequiremetsList />
    </div>, document.getElementById('root'),
);
