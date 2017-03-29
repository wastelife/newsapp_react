import React from 'react';
export default class ComHeaderHeader extends React.Component{

  constructor(){
    super();
    this.state = {
      miniHeader: false
    };
  };
  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    });
  };

  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top": (this.state.miniHeader)? "3px" : "15px",
        paddingBottom: (this.state.miniHeader)? "3px" : "15px"
      }
    };
    return (
      // return can only return one element
      <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
        <h1>This is header</h1>
      </header>
    )
  }
}
