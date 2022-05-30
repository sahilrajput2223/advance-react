import React from "react";

const data = {
    id: 1,
    name: "Sahil",
    mobile: 7359880845,
    msg: "Random Message"

}


const UseStateObjectExample = () => {

    const changeMsg = () => {
        const newData = { ...userData };
        newData.msg = "You Know, Who Am I..."
        setUserData(newData)
    }

    const [userData, setUserData] = React.useState(data);

    return (
        <React.Fragment>
            <div key={userData.id}>
                <h4>Hello, {userData.name}</h4>

                <h5>Mobile: {userData.mobile}</h5>

                <p>Msg: {userData.msg}</p>

                <button className="btn btn-primary" onClick={changeMsg}>Change Msg</button>
            </div>
        </React.Fragment>
    );
}

export default UseStateObjectExample
