
import "./Error.scss"

import errorGif from "./error.gif"



const Error = () => {
    return (
        <div className="error">
            <img className="error_img" src={errorGif} alt="Error!" />
            <div className="error_text">Sorry, there was an unexpected error!</div>
        </div>
    )
}

export default Error
