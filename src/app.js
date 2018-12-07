import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


class OldSyntax {
  constructor(props) {
    this.name = 'Maciek';
  }
  getGreeting(){
    return `My name is ${this.name}`
  }
}
const OldSyntaxInstance = new OldSyntax();
console.log(OldSyntaxInstance.getGreeting()); // should not work with old syntax and without plugin
//------------------
class NewSyntax {
  name = 'Maciek';
  getGreeting = () => {
    return `My name is ${this.name}`
  }
}
const NewSyntaxInstance = new NewSyntax();
console.log(NewSyntaxInstance.getGreeting());
