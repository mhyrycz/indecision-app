const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const addOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  };
  reRender();
};

const removeAll = () => {
  app.options = [];
  reRender();
};

const reRender = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={addOption}>
        <input type="text" name="option"/>
        <button>add option</button>
      </form>

    </div>
  );
  ReactDOM.render(template, appRoot);
};

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


let appRoot = document.getElementById('app');

reRender();
