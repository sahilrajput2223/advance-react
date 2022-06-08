import React from "react";

const GithubUserDetails = ({ login, avatar_url, html_url }) => {

    return (
        <div style={{ display: "inline-grid", margin: "5px" }}>
            <div style={{ margin: "auto", padding: "10px", border: "0.5px solid gray", borderRadius: "10px" }}>
                <img src={avatar_url} alt={login} style={{ height: "100px", width: "100px", borderRadius: "100px" }} />
                <h4>{login}</h4>
                <a href={html_url}>Github Profile Link</a>
            </div>
        </div>
    );

}

export default GithubUserDetails;