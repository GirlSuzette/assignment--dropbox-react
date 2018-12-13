
import React, { Component } from "react";
import Filter from "./Filter";

class Files extends Component {
    render() {
        return (
            <ul>
                {this.props.files.map(function (a) {
                    return (
                        <Filter id={a.id}
                            type={a.type}
                            name={a.name}
                            added_at={a.added_at}
                            category={a.category}
                            size={a.size} />
                    );
                })}
            </ul>
        );
    }
}

export default Files;