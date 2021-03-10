import React from 'react';

class scrip extends React.Component {
  state = {
    nameOfNewDog: '',
    dogs: []
  }
  handleChange(e) {
    this.setState({
      nameOfNewDog: e.target.value
    });
  }
  handleAddDogClick() {
    if (!this.state.nameOfNewDog) {
      return;
    }
    this.setState({
      nameOfNewDog: '',
      dogs: [...this.state.dogs, this.state.nameOfNewDog]
    })
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <input type="text" onChange={this.handleChange.bind(this)} name="nameOfNewDog" />
        <ul>
          {this.state.dogs.map((dogs ,i) =>(
            <Dog key={`${dogs}_${i}`} name={dogs} />
          )) }
        </ul>
        <button onClick={this.handleAddDogClick.bind(this)}>Add something in the list</button>
      </div>
    )
  }
}

class Dog extends React.Component {
  render() {
    return(
      <li>
        <b>{this.props.name}</b>
      </li>
    )
  }
}

export default scrip;