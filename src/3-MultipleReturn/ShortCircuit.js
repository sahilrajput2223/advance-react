import React from "react"

const ShortCircuit = () => {

    const [text, setText] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const firstShortCircuit = text || 'Hello World' // if first value is flase/empty then it will return second value else it will return first value
    const secondShortCircuit = text && 'Hello World'  // if first value is flase/empty then it will return first value else it will return second value

    return (
        <React.Fragment>
            <h3>
                Short Circuit
            </h3>
            <h4>First Condition: {firstShortCircuit} </h4>
            <h4>Second Condition: {secondShortCircuit} </h4>

            <h4>{text || "Default Text"}</h4>  {/**we are adding UI - but text will set based on condition */}
            {text && <h4>Default Text sdfsdf</h4>} {/** we are not adding ui based on data */}
            {!text && <h4>Default Text sdfsf</h4>}
            <button className="btn btn-primary" onClick={() => { setIsError(!isError) }}>
                Toggle Error
            </button>
            {isError && <h4>Error...</h4>}
        </React.Fragment>
    );
}

export default ShortCircuit