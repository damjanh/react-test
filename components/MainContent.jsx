import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoList from './TodoList';
import ContactsList from './ContactsList';

function MainContent() {
    return (
        <main>
            <AboutMe />
            <CoderRequirements />
            <div className="todo-list">
                <h4>TODO:</h4>
                <TodoList />
            </div>
            <div className="contacts-list">
                <h4>Contacts:</h4>
                <ContactsList />
            </div>
        </main>
    );
}

export default MainContent;
