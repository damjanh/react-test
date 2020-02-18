import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    render() {
        const { count } = this.state;
        return (
            <div className="counter">
                <h2>
                    Counter:
                </h2>
                <h1>
                    {count}
                </h1>
                <button type="button" onClick={this.handleClick}>Change!</button>
            </div>
        );
    }
}

export default Counter;
