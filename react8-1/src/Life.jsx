import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('=> constructor');
  };
  
  componentDidMount() {
    console.log('=> componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log('=> shouldComponentUpdate');
    return nextProps.number % 2;
  };

  componentDidUpdate(prevProps,prevPropsState) {
    console.log(prevProps);
    console.log('=> componentDidUpdate');
    return prevProps.number 
  };

  componentWillUnmount(){
    console.log('=> componentWillUnmount');
  };

  render() {
    console.log('=> render');
    return <div className="number">{this.props.number}</div>;
  };
};

export default Life;
