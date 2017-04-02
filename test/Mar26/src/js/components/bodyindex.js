import React from 'react';
export default class BodyIndex extends React.Component{
constructor() {
    super();
    this.state = {
        username: "Hi",
        age: 20
    };
}
render() {
    setTimeout(() => {
        this.setState({username: "WEI", age : 30});
    }, 2000);

    return (
      // return can only return one element
      <div>
        <h2>This is body</h2>
        <p>{this.state.username} {this.state.age} {this.props.userid} {this.props.username}</p>
      </div>
    )
  }
}
