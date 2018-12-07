import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'

class IndecisionApp extends React.Component {
  state = {
      options: []
  };
  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }) );
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter( (option) => {
        return optionToRemove !== option;
      })
    }));
  };
  handlePick = () => {
    alert('hello')
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState( (prevState) => ({ options: prevState.options.concat([option]) }) );
  };
  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) { this.setState(() => ({options: options})) }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          handlePick = {this.handlePick}
          hasOptions = {this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions ={this.handleDeleteOptions}
          handleDeleteOption ={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
};

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
