import React from 'react';

function AppHeader() {
    const hours = new Date().getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = 'Morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Night';
    }
    return (
        <header className="header">
            <h1>
                {`Good ${timeOfDay}!`}
            </h1>
        </header>
    );
}

export default AppHeader;
