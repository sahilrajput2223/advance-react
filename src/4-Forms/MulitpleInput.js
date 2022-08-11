import React from "react";

const MultipleInput = () => {

    const [user, setUser] = React.useState({ name: "", email: "", age: "" })

    const [userData, setUserData] = React.useState([])

    const handleOnChangeEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    const handleSubmitEvent = (event) => {
        event.preventDefault()
        const newUser = { ...user, id: new Date().getTime() }
        setUserData([...userData, newUser])
        setUser({ name: "", email: "", age: "" })
    }

    const handleResetEvent = (event) => {
        setUser({ name: "", email: "", age: "" })
    }

    return (
        <React.Fragment>
            <h4>
                Mulitple Input
            </h4>

            <form onSubmit={handleSubmitEvent} onReset={handleResetEvent}>
                <label htmlFor="name"> Name: </label>
                <input required type="text" id="name" name="name" value={user.name} onChange={handleOnChangeEvent}></input>
                <br />
                <label htmlFor="email"> Email: </label>
                <input required type="email" id="email" name="email" value={user.email} onChange={handleOnChangeEvent}></input>
                <br />
                <label htmlFor="age"> Age: </label>
                <input required type="number" id="age" name="age" value={user.age} onChange={handleOnChangeEvent}></input>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-danger">Reset</button>
            </form>

            <div className="container">
                <div className="row">
                    {userData.map((user) => {
                        return (<div className="col-md-12" key={user.id}>
                            <div className="col-md-12">
                                <p>
                                    {user.name}
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    {user.age}
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p>
                                    {user.email}
                                </p>
                            </div>
                            <div className="col-md-12">
                                <hr />
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    );
}

export default MultipleInput;