console.log('shit');

//JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let user =
{
  name: "Maciej",
  age: 26,
  location: "Kraków"
};
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
function getLocation(location) {
  return location ? <p> Location: {location} </p> : undefined;
}

let templateTwo = (
  <div>
    <h1>{user.name + "!"}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
