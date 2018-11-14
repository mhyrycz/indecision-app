'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var changeButton = function changeButton() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: changeButton },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      ' Some details '
    )
  );
  ReactDOM.render(template, appRoot);
};

render();

//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
