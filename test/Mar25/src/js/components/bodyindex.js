import React from 'react';
export default class BodyIndex extends React.Component{

  //test lifecycle
  componentWillMount(){
    console.log("BodyIndex - componentWillMount")
  }

  componentDidMount(){
    console.log("BodyIndex - componentDidMount")
  }

  render(){
    var userName = 'Wei';
    var boolInput = false;

    var html = 'Space\u0020 Test';

    return (
      // return can only return one element
      <div>
        <h2>This is body</h2>
        <p>{userName==''? 'Please Log in' : 'User Name: ' + userName}</p>
        <p><input type='button' value = 'button' disabled={boolInput}/></p>
        <p>{html}</p>
        {/*comments*/}
      </div>
    )
  }
}
