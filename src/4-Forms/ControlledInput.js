import React from "react";

const ControlledInput = () => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    const handleSubmitEvent = (event) => {
        event.preventDefault()
        console.log("Name is --> " + name)
        console.log("Email is --> " + email)
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

        </React.Fragment>
    );
}

export default ControlledInput;