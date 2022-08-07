import React from "react";

const ControlledInput = () => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [userData, setUserData] = React.useState([])

    const handleSubmitEvent = (event) => {
        event.preventDefault()
        const user = { id: new Date().getTime(), name, email }

        setUserData((userData) => {
            return [...userData, user]
        })

        setName("")
        setEmail("")
    }

    const handleResetEvent = (event) => {
        setEmail("")
        setName("")
    }

    return (
        <React.Fragment>
            <h4>
                Controlled Input
            </h4>

            <form onSubmit={handleSubmitEvent} onReset={handleResetEvent}>
                <label htmlFor="name"> Name: </label>
                <input required type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>
                <br />
                <label htmlFor="email"> Email: </label>
                <input required type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
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

export default ControlledInput;