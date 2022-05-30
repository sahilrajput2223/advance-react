import React from "react"

var showStringName = "Hello Sahil !!!"
var showString = "Hello World !!!"

const useStateBasicExample = () => {

    const changeNameHandle = () => {

        if (text === showString) {
            setText(showStringName)

        } else {
            setText(showString)

        }

    }


    //   console.log(React.useState(showString))

    //   const value = React.useState(showString)[0]
    //   const valueFun = React.useState(showString)[1]

    //   console.log(value)
    //   console.log(valueFun)

    const [text, setText] = React.useState(showString)

    return (
        <React.Fragment>
            <h2>
                {text}
            </h2>
            <button type="button" className="btn btn-primary" onClick={changeNameHandle}>
                Change name
            </button>
        </React.Fragment>
    );
}


export default useStateBasicExample