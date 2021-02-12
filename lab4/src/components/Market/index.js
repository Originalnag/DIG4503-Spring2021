import React from "react"
import MarketItem from "../MarketItem"

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

      render() {
        return(
            <div> 
              <h2>Click to add an Item</h2>
              <button onClick={() => {
                const items = this.state.items;
                items.push(<MarketItem count = {items.length}/>)
                this.setState({items: items});
              }}>Click Me!</button>
              <div>
                  {
                this.state.items.map((count, key) => {
                  return <p key={key}>{count}</p>;
                }
                )
              }</div>
            </div>
          )
        }
      }
      

export default Market