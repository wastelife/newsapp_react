import React from 'react';
export default class ComHeaderHeader extends React.Component{
  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        "padding-top": "15px",
        paddingBottom: "15px"
      }
    };
    return (
      // return can only return one element
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>This is header</h1>
      </header>
    )
  }
}
