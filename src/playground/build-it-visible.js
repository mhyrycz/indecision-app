const appRoot = document.getElementById('app');

let buttonChoice = ["Show details", "Hide details"];

const changeButton = () => {
  buttonChoice.reverse();
  reRender();
};
const showMessage = () => {
  if (buttonChoice[0]=== "Hide details") {
    return <p> Some details </p>
  };
};

const reRender = () => {
  let template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeButton}>{buttonChoice[0]}</button>
      {showMessage()}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

reRender();

//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
