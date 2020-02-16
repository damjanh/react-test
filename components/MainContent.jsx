import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoItem from './TodoItem';
import ContactCard from './ContactCard';

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
            <div className="contacts-list">
                <h4>Contacts:</h4>
                <ContactCard
                    name="Snowflakes"
                    image="http://placekitten.com/200/150"
                    phoneNumber="0034-4325-324"
                    email="snowflakes@catmail.com"
                />
                <ContactCard
                    name="Killer"
                    image="http://placekitten.com/200/150"
                    phoneNumber="0035-5623-211"
                    email="killer@meou.net"
                />
                <ContactCard
                    name="Fluffy"
                    image="http://placekitten.com/200/150"
                    phoneNumber="0011-2345-230"
                    email="fluffzor1337@skynet.com"
                />
            </div>
        </main>
    );
}

export default MainContent;
