import React from 'react';
import BodyChild from './bodychild';
export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Hi",
            age: 20
        };
    };

    changeUserInfo() {
        this.setState({age: 50});
    };
    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    };

render() {
    // setTimeout(() => {
    //     this.setState({username: "WEI", age : 30});
    // }, 2000);


    return (
      // return can only return one element
      <div>
        <h2>This is body</h2>
        <p>{this.props.userid} {this.props.username}</p>
        <p>{this.state.age}</p>
        <input type="button" value="submit" onClick={this.changeUserInfo.bind(this)}/>
        <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}
