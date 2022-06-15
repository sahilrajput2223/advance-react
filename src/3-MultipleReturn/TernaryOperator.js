import React from "react"

const TernaryOperator = () => {

    const [isError, setIsError] = React.useState(false)

    return (
        <React.Fragment>
            <h3>Ternary Operator</h3>

            {isError ? <h4>Yes, it's Error</h4> : <h4>No Error, Good to go</h4>}

            <button className="btn btn-primary" onClick={() => { setIsError(!isError) }}>
                Change Error State
            </button>

        </React.Fragment>
    );

}

export default TernaryOperator