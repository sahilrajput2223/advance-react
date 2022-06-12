import React from "react";

import ConditionalRendering from "../3-MultipleReturn/ConditionalRendering"
import FetchDataWithConditionalRendering from "../3-MultipleReturn/FetchDataWithConditionalRendering";

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
                    {/** this will set Loading... test on screen - then after 2 sec -- it will replace/remove that text and show conditional rendering text on screen */}
                    <ConditionalRendering />
                </center>

                <hr />

                <center>
                    {/**this will set loading on screen -- then fetch API called for user details -- once response receviced -- if success then will stop loading and show user data, else we stop loading and show error */}
                    <FetchDataWithConditionalRendering />
                </center>

            </div>
        </React.Fragment>
    );
}

export default MultipleReturn;