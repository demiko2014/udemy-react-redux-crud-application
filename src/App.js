import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  const profiles = [
    {
      name: "Taro",
      age:  100
    },
    {
      name: "Hanako",
      age:  500
    },
    {
      name: "1",
      age: 1
    }
  ]

  return <div>
    {
      profiles.map(
        (profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        }
      )
    }
  </div>
}

const User = (props) => {
  return <div>I am {props.name}! and {props.age} year old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;