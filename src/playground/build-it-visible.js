const appRoot = document.getElementById('app');

let visibility = false;

const changeButton = () => {
  visibility = !visibility
  render();
};

const render = () => {
  let template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeButton}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (<div> Some details </div>) }
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();

//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
