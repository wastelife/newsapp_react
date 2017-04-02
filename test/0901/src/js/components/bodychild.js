import React from 'react';

export default class BodyChild extends React.Component{

  render(){
    return(
      <div>
        <p>BodyChild Input: <input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p>{this.props.userid} {this.props.username} {this.props.id}</p>
      </div>
    )
  }
}
