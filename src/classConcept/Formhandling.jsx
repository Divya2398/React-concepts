import React, { Component } from "react";
import "./globalCls.css";
import Swal from "sweetalert2";
export class Formhandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      answer: "",
    };
  }
  handlenum1 = (event) => {
    // *************** notes *****************
    // isDefaultPrevented:  functionThatReturnsFalse()
    // isPropagationStopped :  ƒ functionThatReturnsFalse()
    // console.log(event);
    this.setState({
      num1: event.target.value,
    });
  };

  handlenum2 = (event) => {
    this.setState({
      num2: event.target.value,
    });
  };

  // on button click event
  handleSubmit = (event) => {
    // console.log(event);
    const add = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState(
      {
        answer: add,
      },
      () => {
        console.log(this.state.answer);
        Swal.fire({
          title: `Your Solution 📋 is : ${this.state.answer}`,

          icon: "info",
          confirmButtonText: "Ok",
          padding: "0 0 1em",
          width: "24em",
          allowEnterKey: true,
          confirmButtonColor: "teal",
          color: "teal",
        });
      }
    );
  };

  // form handle on submit
  // on submit
  handleformSubmit = async (event) => {
    event.preventDefault();
    // *************** notes *****************
    // it will prevent default behaviour of form submission
    // with prevent default function , onsubmit native event will get page refresh after
    // event all state will get refreshed and component will re-render
    // console.log(event);
    //isDefaultPrevented: ƒ functionThatReturnsTrue()
    // console.log(this);
    const add = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState(
      {
        answer: add,
      },
      () => {
        console.log(this.state.answer);
        Swal.fire({
          title: `Your Solution 📋 is : ${this.state.answer}`,
          icon: "info",
          confirmButtonText: "Ok",
          padding: "0 0 1em",
          width: "24em",
          allowEnterKey: true,
          confirmButtonColor: "teal",
          color: "teal",
        });
      }
    );
  };
  render() {
    return (
      <div className="container">
        ADDITION CALCULATOR
        {/* <form className="form-container" onSubmit={this.handleformSubmit}> */}
        <form className="form-container">
          <div className="flex-container">
            <input
              type="text"
              id="num-1"
              className="input-cls"
              value={this.state.num1}
              onChange={this.handlenum1}
            />
            <div>+</div>
            <input
              type="text"
              id="num-2"
              className="input-cls"
              value={this.state.num2}
              onChange={this.handlenum2}
            />
          </div>
          <button
            type="button"
            className="eq-btn"
            onClick={this.handleSubmit}
            disabled={!this.state.num1 || !this.state.num2}
          >
            Get Answer
          </button>
          {/* <button
            type="submit"
            className="eq-btn"
            disabled={!this.state.num1 || !this.state.num2}
          >
            Get Answer
          </button> */}
        </form>
      </div>
    );
  }
}

export default Formhandling;
