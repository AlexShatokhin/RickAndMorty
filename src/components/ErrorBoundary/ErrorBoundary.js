import { Component } from "react"

import Error from "../Error/Error";

class ErrorBoundary extends Component{

    state = {
        isError: false,
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            isError: true
        })
        console.log(errorInfo);
    }

    render(){
        if(this.state.isError)
            return <Error />
        else
            return this.props.children
    }

}

export default ErrorBoundary