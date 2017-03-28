import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

//dafault props
const defaultProps = {
  username: 'Default name'
}
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
        //fist way
        // var mySubmitButton = document.getElementById("submitButton");
        // console.log(mySubmitButton);
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
        //second way
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color = "red";

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
        <p>Props from parent: userid: {this.props.userid} username: {this.props.username}</p>
        <p>{this.state.age}</p>
        <input id="submitButton" ref="submitButton" type="button" value="submit" onClick={this.changeUserInfo.bind(this)}/>
        {/*快速传参，一次性把所有参数传递*/}
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}

BodyIndex.propTypes = {
  userid: React.PropTypes.number.isRequired
};

BodyIndex.defaultProps = defaultProps;
