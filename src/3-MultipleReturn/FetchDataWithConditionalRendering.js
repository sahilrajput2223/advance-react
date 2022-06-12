import React from "react"
import GithubUserDetails from "../2-useEffect/GithubUserDetails"

const restUrl = "https://api.github.com/users/sahilrajput2223"

const FetchDataWithConditionalRendering = () => {

    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        fetch(restUrl)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(response.statusText)
                }
            })
            .then((userData) => {
                setIsLoading(false)
                setUser(userData)
            })
            .catch((error) => console.log(error))
    }, []);

    if (isLoading) {

        return (<React.Fragment>
            <div>
                <h2>Loading ...</h2>
            </div>
        </React.Fragment>);
    }

    if (isError) {

        return (<React.Fragment>
            <div>
                <h2>Error ...</h2>
            </div>
        </React.Fragment>);
    }

    return (<React.Fragment>
        <GithubUserDetails key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url} />
    </React.Fragment>);


}

export default FetchDataWithConditionalRendering
