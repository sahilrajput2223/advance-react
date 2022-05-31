import React from "react";

const UseStateSimpleCounnter = () => {

    const [count, setCount] = React.useState(0)

    const updateCountValueBy = (value) => {
        let newCount = count + value
        setCount(newCount)
    }

    return (
        <React.Fragment>
            <section>
                <h4>Simple Counter Section</h4>
                <h3>{count}</h3>

                <button className="btn" onClick={() => updateCountValueBy(-1)}>-1</button>
                <button className="btn" onClick={() => updateCountValueBy(-count)}>reset</button>
                <button className="btn" onClick={() => updateCountValueBy(1)}>+1</button>

            </section>
        </React.Fragment>
    )
}

export default UseStateSimpleCounnter