import React, { Component } from "react";
import "./globalCls.css";

class Eventhandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello User, Welcome",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // normal function
  // without binding it will not work
  handleClick() {
    console.log(this); // ans - undefined
    this.setState({
      message: "Subscribed Successfully",
    });
  }

  // arrow function
  handlearrowClick = () => {
    console.log(this); // ans - undefined
    this.setState({
      message: "Subscribed Successfully",
    });
  };
  render() {
    return (
      <div className="event-container">
        <div>{this.state.message}</div>
        {/* 1.event handler with bind in render*/}
        {/* not efficient in larger scale application cause performance issue */}
        <button onClick={this.handleClick.bind(this)} className="event-btn">
          Subscribe
        </button>
        {/* 2.event handler with arrow in render*/}
        {/* not efficient in larger scale application cause some issue,pass parameter */}
        <button onClick={() => this.handleClick()} className="event-btn">
          Subscribe
        </button>
        {/* 3.event handler with bind in constructor*/}
        {/*mostly used, react official docs , */}
        <button onClick={this.handleClick} className="event-btn">
          Subscribe
        </button>
        {/* 4.event handler with arrow function instead of normal function*/}
        {/*mostly used, react official docs */}
        <button onClick={this.handlearrowClick} className="event-btn">
          Subscribe
        </button>
      </div>
    );
  }
}

export default Eventhandler;
