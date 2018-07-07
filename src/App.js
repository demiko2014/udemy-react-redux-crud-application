import React, { Component } from 'react';

class App extends Component {
  render() {
//    const greeting = "Hi!!"
//    const dom = <input type="text" onChange={ ()=> {console.log("I am foo!")}} />
    return (
      <React.Fragment>
        <label htmlFor="bar">bar2</label>
        <input type="text" onChange={ ()=> {console.log("I am foo!")}} />
      </React.Fragment>
    );
  }
}

export default App;