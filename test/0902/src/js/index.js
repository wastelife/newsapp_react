var React = require('react');
var ReactDOM = require('react-dom');
import ComHeaderHeader from './components/header';
import ComHeaderFooter from './components/footer';
import BodyIndex from './components/bodyindex';


class Index extends React.Component{

  componentWillMount(){
    console.log("Index - componentWillMount")
  }

  componentDidMount(){
    console.log("Index - componentDidMount")
  }

  render(){
    return(
      <div>
        <ComHeaderHeader/>
        <BodyIndex userid={10} username={"Nick"}/>
        <ComHeaderFooter/>
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('example'));
