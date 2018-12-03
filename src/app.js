
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: ["Gdańsk", "Pabianice", "Kraków"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handlePick() {
    alert('hello')
  }
  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action handlePick = {this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions ={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
};

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
};

class Action extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => {
            return <Option optionText={option}/>;
          })
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      this.props.handleAddOption(option)
      e.target.elements.option.value = '';
    };
  }
  render() {
    return(
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>add option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));




//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
