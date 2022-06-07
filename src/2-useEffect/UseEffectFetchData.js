import React from "react"

const restUrl = "https://api.github.com/users"

const UseEffectFetchData = () => {

    const [users, setUsers] = React.useState([]);

    const getUserData = async () => {
        const response = await fetch(restUrl);
        const userData = await response.json()
        console.log(userData)
    }

    React.useEffect(() => {
        getUserData()
    });

    return (
        <React.Fragment>
            <h1>
                useEffect Hook - Fetch Data
            </h1>

            <br />

            <h2>
                Github Users
            </h2>

        </React.Fragment>
    );
}

export default UseEffectFetchData;