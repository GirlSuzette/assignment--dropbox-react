
import React, { Component } from "react";
import Filter from "./Filter";

class Files extends Component {
    state = {
        files: [],
        dataFiles: false
    }

    handleAddToInfo = file => {
        console.log(file)
        this.setState({
            files: [...this.state.files, file],
            dataFiles: true
        });

    };
    render() {
        console.log(this.state.files)
        return (
            <div className="filesInfo">
                <ul>
                    {this.props.files.map(function (file) {
                        return (
                            <Filter
                                data={file}
                                addToInfo={this.handleAddToInfo} />
                        );
                    }, this)}
                </ul>
                <div className="info">
                    <h1>Compress</h1>
                    <p>Total: {this.state.files.length} </p>
                    {this.state.dataFiles && this.state.files.map(function (file) {
                        return (
                            <div>
                                <p>{file.name}</p>
                                <p>{file.size}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }
}

export default Files;