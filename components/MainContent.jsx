import React from 'react';

import AboutMe from './AboutMe';
import CoderRequirements from './CoderRequirements';
import TodoList from './todo/TodoList';
import ContactsList from './contacts/ContactsList';
import Counter from './counter/Counter';
import LoginIndicator from './LoginIndicator';
import FavoriteMovieChar from './favorite-movie-char/FavoriteMovieChar';
import Input from './input/Input';
import UserInfoContainer from './input/UserInfoContainer';

function MainContent() {
    return (
        <main>
            <AboutMe />
            <CoderRequirements />
            <TodoList />
            <ContactsList />
            <Counter />
            <LoginIndicator />
            <FavoriteMovieChar />
            <Input />
            <UserInfoContainer />
        </main>
    );
}

export default MainContent;
