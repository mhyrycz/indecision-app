class IndecisionApp extends React.Component {

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    const options = ["Gdańsk", "Pabianice", "Kraków"];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
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
  handlePick() {
    alert('hello')
  }

  render() {
    return(
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  removeAll () {
    alert('handle Remove all')
  }

  render() {
    return(
      <div>
        <button onClick={this.removeAll}>Remove All</button>
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
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      alert(option)
      //this.options.push(option);
      e.target.elements.option.value = '';
    };
  }
  render() {
    return(
      <form onSubmit={this.addOption}>
        <input type="text" name="option"/>
        <button>add option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));




//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
