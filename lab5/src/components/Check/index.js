import React from "react"
import "./index.css"

class Check extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: "",
            check2: "",
            check3: ""
        }
    };

    render() {
        return (
            <div>
                <h2>Very spooky, be careful typing... the cursed word below</h2>
                <p>Type Ghost if you wish to see haunter be <strong>bold</strong></p>
                <input type="text" onChange={(trial1) => {
                    this.setState({ check: trial1.target.value })
                }} />
                {
                    (this.state.check == "Ghost") ? (
                        <div className="Ghost">
                            <p>You have been haunted by a bolder <strong>{this.state.check}</strong> haunter that is thinking of a million numbers, guess it right and it'll tell you</p>
                            <p>Hint: It is 2</p>
                            <input type="text" onChange={(trial2) => {
                    this.setState({ check2: trial2.target.value })
                }} />
                        </div>
                    ) : (
                            <p></p>
                        )
                }
    
                {
                    (this.state.check2 == "2") ? (
                        <div>
                        <p>You got it! Now retype Ghost to remove the bold <strong>Ghost</strong></p>
                        <input type="text" onChange={(trial3) => {
                    this.setState({ check3: trial3.target.value })
                }} />
                            </div>
                    ) : (
                            <p></p>
                        )
                }
                
                {
                    (this.state.check3 == "Ghost") ? (
                        <p>You are now free from the bold Ghost</p>
                    ) : (
                            <p></p>
                        )
                }
            </div>
        )
    }
}

export default Check