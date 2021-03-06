import React, { Component } from "react";
import moment from 'moment';


class Filter extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    handleClickBtn = () => {
        const { addToInfo, data } = this.props;
        addToInfo(data);
    };
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
                                <span className="file__name">{this.props.data.name}</span> <br />
                                <span>Added: {moment(this.props.data.added_at, "YY").fromNow()} ·{this.props.data.category}</span>
                            </p>
                        </div>
                        <div key={this.props.data.id}>
                            <button onClick={() => this.handleClickBtn(this.props.data.id)} className="file__button">
                                <i className="fa fa-download"></i>
                            </button>
                        </div>
                    </div>
                </li>
            </React.Fragment>

        )
    }
}

export default Filter

// {moment(this.props.added_at, "YYYY").fromNow()}