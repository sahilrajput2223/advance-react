import React from "react";

const UseStateComplexCounnter = () => {

    const [count, setCount] = React.useState(0)

    const updateCountValueBy = (value) => {
        setTimeout(() => {
            setCount((prevCountState) => {
                return prevCountState + value
            })
        }, 2000)
    }

    return (
        <React.Fragment>
            <section>
                <h4>Complex Counter Section - With 2 sec delay</h4>
                <h3>{count}</h3>

                <button className="btn" onClick={() => updateCountValueBy(-1)}>-1</button>
                <button className="btn" onClick={() => updateCountValueBy(-count)}>reset</button>
                <button className="btn" onClick={() => updateCountValueBy(1)}>+1</button>

            </section>
        </React.Fragment>
    )
}

export default UseStateComplexCounnter