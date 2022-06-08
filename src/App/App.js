import React from "react"
import ConditionalRendering from "../3-ConditionalRedering/ConditionalRendering";

//import UseStateLearn from "./UseStateLearn";
//import UseEffectLearn from "./UseEffectLearn";

import "../App/app.css"


const App = () => {
    return (
        <React.Fragment>
            {/* <UseStateLearn /> */}
            {/*<UseEffectLearn />*/}
            <ConditionalRendering />
        </React.Fragment>
    );
}

export default App