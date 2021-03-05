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
                <h2>Type either Red or any text</h2>
                <input type="text" onChange={(event) => {
            this.setState({color: event.target.value})
            }} />
            {
                (this.state.color == "Red") ? (
                    <div className = "Bad">
                    <p>You chose a deadly color</p>
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