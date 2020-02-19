import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoList from './todo/TodoList';
import ContactsList from './contacts/ContactsList';
import Counter from './counter/Counter';
import LoginIndicator from './LoginIndicator';

function MainContent() {
    return (
        <main>
            <AboutMe />
            <CoderRequirements />
            <TodoList />
            <ContactsList />
            <Counter />
            <LoginIndicator />
        </main>
    );
}

export default MainContent;
