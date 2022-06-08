import React from "react"
import GithubUserDetails from "./GithubUserDetails";

const restUrl = "https://api.github.com/users"

const UseEffectFetchData = () => {

    const [users, setUsers] = React.useState([]);

    const getUserData = async () => {
        const response = await fetch(restUrl);
        const userData = await response.json();
        setUsers(userData)
    }

    React.useEffect(() => {
        getUserData()
    }, []);

    return (
        <React.Fragment>
            <h1>
                useEffect Hook - Fetch Data
            </h1>

            <br />

            <h2>
                Github Users
            </h2>

            {
                users.map(
                    (user) => {
                        const { id, login, avatar_url, html_url } = user
                        return <GithubUserDetails key={id} login={login} avatar_url={avatar_url} html_url={html_url} />
                    }
                )
            }

        </React.Fragment>
    );
}

export default UseEffectFetchData;