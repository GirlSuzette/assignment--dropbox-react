import React from 'react';
import Files from './Files';


class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: this.props.search

        };
    }

    searchByName = (e) => {

        var query = e.target.value.toLowerCase();

        var coincidences = this.props.search.filter(function (item) {
            var nameInLowerCase = item.name.toLowerCase();

            return nameInLowerCase.includes(query);
        });

        this.setState({
            results: coincidences
        });
    }


    render() {
        console.log(this.state.results)
        return (
            <React.Fragment>
                <input onChange={this.searchByName} type="search" className="search" placeholder="Search..." />
                <Files files={this.state.results} />
            </React.Fragment>
        )
    }

}

export default Search;
