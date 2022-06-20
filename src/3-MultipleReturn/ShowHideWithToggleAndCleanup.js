import React from "react"

const ShowHideWithToggleAndCleanup = () => {

    const [isShow, setIsShow] = React.useState(false)

    const showHide = (isShow) => {
        setIsShow(isShow)
    }

    return (
        <React.Fragment>
            <h3> Show Hide Based On Toggle and Cleanup function</h3>

            <button className="btn btn-primary" onClick={() => showHide(!isShow)}>Show / Hide</button>
            {isShow && <Item />}
        </React.Fragment>
    );
}

const Item = () => {

    const [size, setSize] = React.useState(window.innerWidth);

    const checkAndUpdateSize = () => {
        setSize(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener('resize', checkAndUpdateSize)

        //need to call clean up function to remove event listener so on every toggel we don't call resize event
        return (() => {
            window.removeEventListener('resize', checkAndUpdateSize)
        });

    }, []);

    return (
        <React.Fragment>
            <h4>Window Size: {size} px</h4>
        </React.Fragment>
    );
}

export default ShowHideWithToggleAndCleanup