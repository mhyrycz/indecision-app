"use strict";

var appRoot = document.getElementById('app');

var buttonChoice = ["Show details", "Hide details"];

var changeButton = function changeButton() {
  buttonChoice.reverse();
  reRender();
};
var showMessage = function showMessage() {
  if (buttonChoice[0] === "Hide details") {
    return React.createElement(
      "p",
      null,
      " Some details "
    );
  };
};

var reRender = function reRender() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: changeButton },
      buttonChoice[0]
    ),
    showMessage()
  );
  ReactDOM.render(template, appRoot);
};

reRender();

//babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
