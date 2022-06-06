import React from "react";

const UseEffectCleanUp = () => {

    const [windowSize, setWindowSize] = React.useState(window.innerWidth)

    const changeWindowSizeValue = () => {
        setWindowSize(window.innerWidth)
    }

    React.useEffect(() => {
        console.log("useEffect Called");
        window.addEventListener("resize", changeWindowSizeValue)

        return (() => {
            console.log("Cleanup Called");
            window.removeEventListener("resize", changeWindowSizeValue)
        });
    });

    console.log("Render");

    return (
        <React.Fragment>
            <h1>
                useEffect Hook - Clean up
            </h1>

            <h1>
                Window Size: {windowSize}
            </h1>

        </React.Fragment>
    );
}

export default UseEffectCleanUp