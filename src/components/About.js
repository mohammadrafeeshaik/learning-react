import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        login: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mohammadrafeeshaik");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, login } = this.state.userInfo;
    debugger;
    return (
      <div>
        <h3>About</h3>
        <UserClass name={name} login={login} />
      </div>
    );
  }
}
export default About;
