import React from "react";

const ConditionalRendering = () => {

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        console.log("use effect called")
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []
    );

    if (loading) {
        return (
            <React.Fragment>
                <div className="container">
                    <center>
                        <h3>
                            Loading ...
                        </h3>
                    </center>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="container">
                <center>
                    <h3>
                        Conditional Rendering
                    </h3>
                </center>
            </div>
        </React.Fragment>
    );


}

export default ConditionalRendering