import React, { Component } from 'react';
import './App.css';

class App extends Component {
 state = {
   userInput: ""
 }


  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }
  
render() {
return (
    <div className="App">
      <ol>
        <li>Create an input field(in App component with a change listener which outputs in the length of the entered text below (e.g. in a paragraph)</li>
        <li>Create a new component (=> ValidationComponent which receives the text as a prop</li>
        <li>Inside the ValidationComponent either output "Txt too short" depending on the text length (e.g take 5 as a min)</li>
        <li>Create another component (=> CharComponent) and style it as an inline box(=> display: inline-block, padding 16px, text-align: center, margin: 16px, border: 1px solid black)</li>
        <li>Render as a list of CharComponents where each CharComponent recieves a different letter of the entered text (in a initial input field) as a prop</li>
        <li>When you clicka CharComponent, it should be removed from the entered text</li>
      </ol>
      <hr/>
      <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
    </div>
  )
}
}


export default App;
