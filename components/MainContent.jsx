import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoItem from './TodoItem';

function MainContent() {
    return (
        <main>
            <AboutMe />
            <CoderRequirements />
            <div className="todo-list">
                <h4>TODO:</h4>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </main>
    );
}

export default MainContent;
