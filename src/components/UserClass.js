import React from "react";
import SecondClass from "./SecondClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { name, login } = this.props;
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>Login: {login}</p>
      </div>
    );
  }
}

export default UserClass;
