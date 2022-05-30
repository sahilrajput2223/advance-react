import React from "react"

const data = [
    {
        id: 1,
        name: "Sahil",
        number: 7359880845
    },
    {
        id: 2,
        name: "Abc",
        number: 7845120000
    },
    {
        id: 3,
        name: "fsdfsdSahil",
        number: 7359854680845
    },
    {
        id: 4,
        name: "asdasAbc",
        number: 784545465120000
    }
]


const UseStateArrayExample = () => {

    const [userData, setUserData] = React.useState(data);

    const deleteAllData = () => {
        setUserData([])
    }

    const addAllUserData = () => {
        setUserData(data)
    }

    const removeItems = (id) => {
        let newData = userData.filter((user) => user.id !== id)
        setUserData(newData)
    }

    return (
        <React.Fragment>
            {
                userData.map((user) => {
                    const { id, name, number } = user;
                    return <div key={id} className="arrayData">
                        <h5>
                            {name},
                        </h5>
                        <h4>
                            {number}
                        </h4>

                        <button className="btn btn-danger" onClick={() => removeItems(id)}> Remove Item</button>
                    </div>
                })
            }

            <button type="button" className="btn btn-danger" onClick={deleteAllData}>Delete All User Data</button>
            <button type="button" className="btn btn-primary" onClick={addAllUserData}>Add User Data</button>
        </React.Fragment >
    );

}

export default UseStateArrayExample;