import React from "react";

class IncreasingButtonComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick = event => {
    event.preventDefault(); // event.stopPropagation();
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {this.state.count} &nbsp;
        <button className="btn btn-default" onClick={this.handleClick}>
          Increase
        </button>
      </div>
    );
  }
}

export default IncreasingButtonComponent;
