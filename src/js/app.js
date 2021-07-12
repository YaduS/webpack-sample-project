import { Button } from '@yadus/react-sample-library';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
  outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
  outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);

ReactDOM.render(
  React.createElement('div', null, 'This is an Inserted Element'),
  document.getElementById('reactContainerDiv1')
);

ReactDOM.render(
  React.createElement(Button, {
    label: 'This is an React Component ..??!!',
  }),
  document.getElementById('reactContainerDiv2')
);
