import { Component } from "react";

class SecondClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.child + "-2 Constructor");
  }
  componentDidMount() {
    console.log(this.props.child + "-2 Component DidMount");
  }

  render() {
    console.log(this.props.child + "-2 Render");
    return <div>Second</div>;
  }
}

export default SecondClass;
