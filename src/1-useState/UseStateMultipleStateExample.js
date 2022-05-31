import React from "react";

const oldName = "ABC";
const newName = "Sahil"
const oldEmail = "test@gmail.com"
const newEmail = "sahil@gmail.com"
const oldLang = "JAVA"
const newLang = "REACT"

const UseStateMultipleStateExample = () => {

    const [name, setName] = React.useState(oldName)
    const [email, setEmail] = React.useState(oldEmail)
    const [lang, setLang] = React.useState(oldLang)

    const assignNewData = () => {
        setName(newName)
        setEmail(newEmail)
        setLang(newLang)
    }

    return (
        <div>
            <p>Name: {name}</p>

            <p>Email: {email}</p>

            <p>Language: {lang}</p>

            <button className="btn btn-primary" onClick={assignNewData}>
                Change Data - Multiple useState
            </button>
        </div>
    );

}

export default UseStateMultipleStateExample;