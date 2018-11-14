let appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
  count +=1;
  reRender();
}
const takeOne = () => {
  count -=1;
  reRender();
}
const resetAll = () => {
  count =0;
  reRender();
}

const reRender = () => {
  const templateTwo = (
    <div>
      <h1>{count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={takeOne}>-1</button>
      <button onClick={resetAll}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

reRender();

//babel src/playground/counter.js --out-file=public/scripts/app.js --presets=env,react --watch
