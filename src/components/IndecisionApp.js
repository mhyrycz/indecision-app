import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
      options: [],
      selectedOption: undefined
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
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState( () => ({ selectedOption: option }) );
  };
  handleClearSelected = () => {
    this.setState( () => ({ selectedOption: undefined }) );
  }
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
        <div className='container'>
          <Action
            handlePick = {this.handlePick}
            hasOptions = {this.state.options.length > 0}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions ={this.handleDeleteOptions}
              handleDeleteOption ={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelected = {this.handleClearSelected}
        />
      </div>
    )
  }
};

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
