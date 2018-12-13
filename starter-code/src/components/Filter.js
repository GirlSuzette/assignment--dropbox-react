import React, { Component } from "react";
import moment from 'moment';


class Filter extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="file__item">
                    <div className="grid grid--expanded">
                        <div className="grid">
                            <span className="file__icon">
                                <i className="fa fa-file-text-o"></i>
                            </span>
                            <p className="file__meta">
                                <span className="file__name">{this.props.name}</span> <br />
                                <span>Added: {moment(this.props.added_at, "YY").fromNow()} ·{this.props.category}</span>
                            </p>
                        </div>
                        <button className="file__button">
                            <i className="fa fa-download"></i>
                        </button>
                    </div>
                </li>
            </React.Fragment>

        )
    }
}

export default Filter

// {moment(this.props.added_at, "YYYY").fromNow()}