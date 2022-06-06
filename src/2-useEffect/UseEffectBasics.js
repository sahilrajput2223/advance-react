import React from "react"

//useEffect run on every render

const UseEffectBasics = () => {

    const [msgCount, setMsgCount] = React.useState(0)

    React.useEffect(() => {
        console.log("useEffect Hook Called");

        if (msgCount > 0) {
            document.title = 'New Messages (' + msgCount + ')'
        } else {
            document.title = 'No New Messages'
        }

    });

    const incrementCount = () => {
        setMsgCount(msgCount + 1)
    }

    console.log("Component Render")

    return (
        <React.Fragment>
            <h1>
                Use Effect Basics
            </h1>
            <p>
                New Message Count is: {msgCount}
            </p>
            <button className="btn btn-primary" onClick={incrementCount}>
                Click Me - Check Title
            </button>
        </React.Fragment>
    );
}

export default UseEffectBasics