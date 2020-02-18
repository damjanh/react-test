import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoList from './todo/TodoList';
import ContactsList from './contacts/ContactsList';
import Counter from './counter/Counter';

function MainContent() {
    return (
        <main>
            <AboutMe />
            <CoderRequirements />
            <TodoList />
            <ContactsList />
            <Counter />
        </main>
    );
}

export default MainContent;
