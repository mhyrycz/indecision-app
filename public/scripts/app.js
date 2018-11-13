'use strict';

console.log('shit');

//JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: "Maciej",
  age: 26,
  location: "Kraków"
};
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
function getLocation(location) {
  return location ? React.createElement(
    'p',
    null,
    ' Location: ',
    location,
    ' '
  ) : undefined;
}

var count = 0;
var addOne = function addOne() {
  count += 1;
  reRender();
};
var takeOne = function takeOne() {
  count -= 1;
  reRender();
};
var resetAll = function resetAll() {
  count = 0;
  reRender();
};

var reRender = function reRender() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: takeOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetAll },
      'reset'
    )
  );

  var appRoot = document.getElementById('app');

  ReactDOM.render(templateTwo, appRoot);
};

reRender();
