import React, { Fragment } from "react"
import UseStateBasicExample from "../1-useState/useStateBasicExample";
import UseStateArrayExample from "../1-useState/UseStateArrayExample";
import UseStateObjectExample from "../1-useState/UseStateObjectExample";
import UseStateMultipleStateExample from "../1-useState/UseStateMultipleStateExample";

import "../App/app.css"
import UseStateSimpleCounnter from "../1-useState/UseStateSimpleCounter";

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

            <center>
                <p>useState Hook -- Multiple state Example</p>
                {/** useStateMultipleStateExample.js file --> Multiple state logic*/}
                <UseStateMultipleStateExample />
            </center>
            <hr />

            <center>
                <p>useState Hook -- Simple Counter Example</p>
                {/** useStateSimpleCounter.js file --> Use State - Simple Counter Example*/}
                <UseStateSimpleCounnter />
            </center>
            <hr />

        </Fragment>
    );
}

export default App