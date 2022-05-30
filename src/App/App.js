import React, { Fragment } from "react"
import UseStateBasicExample from "../1-useState/useStateBasicExample";
import UseStateArrayExample from "../1-useState/UseStateArrayExample";
import UseStateObjectExample from "../1-useState/UseStateObjectExample";

import "../App/app.css"

const App = () => {
    return (
        <Fragment>
            <center>
                <p>useState Hook -- Basic Click Event Example </p>
                {/** useStateBasicExample.js file --> Set Title On Screen - this logic is apply with btn click event */}
                <UseStateBasicExample />
            </center>
            <hr />

            <center>
                <p>useState Hook -- Array Example</p>
                {/** useStateArrayExample.js file --> Loop through data array and show on screen using useState*/}
                <UseStateArrayExample />
            </center>
            <hr />

            <center>
                <p>useState Hook -- Object Example</p>
                {/** useStateObjectExample.js file --> Object Structure data logic using useState*/}
                <UseStateObjectExample />
            </center>
            <hr />
        </Fragment>
    );
}

export default App