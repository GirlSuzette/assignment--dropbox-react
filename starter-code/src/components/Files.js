
import React, { Component } from "react";
import Filter from "./Filter";

class Files extends Component {
    state = {
        files: [],
        newFilesId: [],
        filesSize: 0

    };

    handleAddToInfo = file => {

        var files = this.props.files.filter(files => {
            return files.id === file.id
        })[0]

        if (files) {
            var filesSize = [...this.state.newFilesId, files].map(file =>
                parseInt(file.size));

            var total = filesSize.reduce((one, two) => one + two);

            this.setState({
                files: [...this.state.files, files],
                newFilesId: [...this.state.files, files],
                filesSize: total

            });
        }
    };



    render() {
        // console.log(this.state.files)
        return (
            <div className="filesInfo">
                <ul>
                    {this.props.files.map(file => {
                        return (
                            <Filter
                                data={file}
                                addToInfo={this.handleAddToInfo} />
                        );
                    })}
                </ul>
                <div className="info">
                    <h1>Compress</h1>
                    <p>Total: {this.state.filesSize} </p>
                    {this.state.files.map(file => {
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


// handleAddToInfo = file => {
//     console.log(file)

//     this.setState({
//         files: [...this.state.files, file]
//     });

// };