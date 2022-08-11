import React from "react";
import ControlledInput from "../4-Forms/ControlledInput";
import MultipleInput from "../4-Forms/MulitpleInput";

const Forms = () => {
    return (
        <React.Fragment>
            <div className="container">
                <center>
                    <h1>React Forms</h1>
                    <ControlledInput />
                    <hr />
                    <h1>React Forms - with Multiple Input</h1>
                    <MultipleInput />

                </center>
            </div>
        </React.Fragment>
    );
}

export default Forms