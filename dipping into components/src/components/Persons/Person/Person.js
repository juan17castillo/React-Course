import React, { Component } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  // constructor(props) {
  //   super(props);
  //   this.inputElementRef = React.createRef;
  // }

  // componentDidMount() {
  //   this.inputElementRef.current.focus();
  // }

  static contextType = AuthContext;

  render() {
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);