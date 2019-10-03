'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATS_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var wizard = {
    name: NAMES[Math.round(Math.random(0, NAMES.length - 1))] + ' ' + SURNAMES[Math.round(Math.random(0, SURNAMES.length - 1))],
    coatColor: COATS_COLOR[Math.round(Math.random(0, COATS_COLOR.length - 1))],
    eyesColor: EYES_COLOR[Math.round(Math.random(0, EYES_COLOR.length - 1))]
  };
  wizards.push(wizard);
}

for (var j = 0; j < 4; j++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;
  fragment.appendChild(wizardElement);
}

similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
