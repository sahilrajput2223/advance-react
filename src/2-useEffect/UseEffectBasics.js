import React from "react"

//we can define any number of useEffect hooks
//useEffect run on every render -- on second parameter basis we can update this logic

/*React.useEffect(callBack(), [])
here [] is second param, dependancies list....

three ways to call useEffect, as mentioned below

1. React.useEffect(callBack()) --> this kind of useEffect hook will run every time
2. React.useEffect(callBack(), []) --> this kind of useEffect hook will run single time when component will load
3. React.useEffect(callBack(), [someValue1,someValue2]) --> this kind of useEffect hook will run specifc time when we update values from dependancies lis (here, someValue1 & someValue2)


*/

const UseEffectBasics = () => {

    const [msgCount, setMsgCount] = React.useState(0)

    React.useEffect(() => {
        console.log("useEffect Hook Called");

        if (msgCount > 0) {
            document.title = 'New Messages (' + msgCount + ')'
        } else {
            document.title = 'No New Messages'
        }

    }, [msgCount]);

    React.useEffect(() => {
        console.log("Run Single Time - while component load");
    }, []);

    React.useEffect(() => {
        console.log("Run Every Time");
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