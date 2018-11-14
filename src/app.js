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

const onRemoveAll = () => {
  app.options = [];
  reRender();
};

const onMakeDecision = () => {
  const helpInfo = "Write smth and click add option";
  alert(helpInfo)
  reRender();
};

const appRoot = document.getElementById('app');

const reRender = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length != 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>
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

reRender();
