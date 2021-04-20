import React from "react"
import "./index.css"

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: []
        }
    };

    render() {
        return (
            <div className = "Test">
                <h2>Type what color he is. Hint: Purple</h2>
                <input type="text" onChange={(event) => {
            this.setState({color: event.target.value})
            }} />
            {
                (this.state.color == "Purple") ? (
                    <div className = "Bad">
                    <p>You have identified his color!</p>
                    </div>
                ) : (
                <p>Your color:  {this.state.color}</p>
                )
            }
            </div>
        )
        }
    }

export default Color