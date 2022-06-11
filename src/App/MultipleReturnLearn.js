import React from "react";

import ConditionalRendering from "../3-MultipleReturn/ConditionalRendering"

const MultipleReturn = () => {
    return (
        <React.Fragment>
            <div className="container">
                <center>
                    <h1>
                        Multiple Return Learning
                    </h1>
                </center>

                <hr />

                <center>
                    <ConditionalRendering />
                </center>
            </div>
        </React.Fragment>
    );
}

export default MultipleReturn;