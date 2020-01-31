import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css';

class App extends Component {

  state = {
    ninjas: [
      { name: 'Mika', age: 4, eyes: 'green', id: 1 },
      { name: 'Dido', age: 33, eyes: 'brown', id: 2 },
      { name: 'Alex', age: 23, eyes: 'blue', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    //copy the ninjas and add the new ninja
    let ninjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (ninjaId) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== ninjaId
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('componenet mounted')
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componenet updated')
    console.log(prevProps)
    console.log(prevState)
  }

  render() {
    return (
      <div className="App">
        <h1>React Test App</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
