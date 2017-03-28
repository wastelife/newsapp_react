import React from 'React';

export default class BodyChild extends React.Component{

  render(){
    return(
      <div>
        <p>BodyChild Input: <input type="text" onChange={this.props.handleChildValueChange}/></p>
      </div>
    )
  }
}
