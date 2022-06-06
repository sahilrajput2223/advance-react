import React from "react";

import UseEffectBasics from "../2-useEffect/UseEffectBasics";
import UseEffectCleanUp from "../2-useEffect/UseEffectCleanUp";

const UseEffectLearn = () => {
    return (
        <React.Fragment>
            <div className="container">
                <center>
                    <h1>
                        useEffect Hook Learning
                    </h1>
                </center>

                <hr />

                <center>
                    <UseEffectBasics />
                </center>

                <hr />

                <center>
                    <UseEffectCleanUp />
                </center>
            </div>
        </React.Fragment>
    );
}

export default UseEffectLearn