import React, { Component } from "react";
import math from "mathjs";
import RandomButton from "./RandomButton";


class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>
 
        {this.state.names.map((name, i)=> {
          if (this.state.luckyWinnerIndex === i) {
            return <li key = {i} id="winner">{name}</li>;
          } else {
            return <li key = {i} id="">{name}</li>
          }
        })}
        
        <RandomButton handleClick={() => this.handleClick()}/>
      </div>
    );
  }

  handleClick() {
    const number = math.randomInt(this.state.names.length)
    console.log(number)
    this.setState({ luckyWinnerIndex: number });
  }
}

export default App;
