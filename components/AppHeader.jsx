import React from 'react';

function AppHeader() {
    const hours = new Date().getHours();
    let timeOfDay;
    const welocomeTextStyle = {};
    if (hours < 12) {
        timeOfDay = 'Morning';
        welocomeTextStyle.color = '#04756F';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
        welocomeTextStyle.color = '#2E0927';
    } else {
        timeOfDay = 'Night';
        welocomeTextStyle.color = '#D90000';
    }
    return (
        <header className="header">
            <h1 style={welocomeTextStyle}>
                {`Good ${timeOfDay}!`}
            </h1>
        </header>
    );
}

export default AppHeader;
