'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var addOption = function addOption(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  };
  reRender();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  reRender();
};

var onMakeDecision = function onMakeDecision() {
  var helpInfo = "Write smth and click add option";
  alert(helpInfo);
  reRender();
};

var appRoot = document.getElementById('app');

var reRender = function reRender() {
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
      'button',
      { disabled: app.options.length != 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: addOption },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

reRender();
