import React, { Component } from 'react';

class FavoriteMovieChar extends Component {
    constructor() {
        super();
        this.mounted = false;
        this.state = {
            isLoading: true,
            character: null,
            error: null,
        };
    }

    componentDidMount() {
        this.mounted = true;
        this.request = fetch('https://swapi.co/api/people/1/')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Problem getting data.');
            }).then((data) => {
                if (this.mounted) {
                    this.setState({
                        isLoading: false,
                        character: data.name,
                    });
                }
            }).catch((error) => {
                if (this.mounted) {
                    this.setState({
                        isLoading: false,
                        error,
                    });
                }
            });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const { character, isLoading, error } = this.state;
        if (isLoading) return <h3 className="centered-with-margin">Loading...</h3>;
        if (error) return <h3 className="centered-with-margin">{error.message}</h3>;
        if (!character) return null;
        return (
            <div className="centered-with-margin">
                <h3>Favorite Movie Character: </h3>
                <h3>{character}</h3>
            </div>
        );
    }
}

export default FavoriteMovieChar;
