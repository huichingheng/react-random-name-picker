import React, { Component } from "react";
import math from "mathjs";
import RandomButton from "./RandomButton";
import List from "./List";
import InputForm from "./InputForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">Hello, random name picker</h1>
        {/* <Input handleChange={event => this.handleChange(event)} /> */}
        <InputForm
          handleOnChange={event => this.handleChange(event)}
          handleClickAdd={() => this.handleClickAdd()}
        />
        <List
          names={this.state.names}
          luckyWinnerIndex={this.state.luckyWinnerIndex}
        />
        <RandomButton handleClick={() => this.handleClick()} />
      </div>
    );
  }

  handleClick() {
    const number = math.randomInt(this.state.names.length);
    console.log(number);
    this.setState({ luckyWinnerIndex: number });
  }

  handleClickAdd() {
    this.setState({ names: [...this.state.names, this.state.value] });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
}

export default App;
