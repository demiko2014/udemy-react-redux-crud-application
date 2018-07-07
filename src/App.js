import React, { Component } from 'react';

class App2 extends Component {
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

const App = () => {
  return <div>
    <Cat/>
    <Cat/>
    <Cat/>
  </div>
}

const Cat = () => {
  return <div>ミャー</div>
}

export default App;