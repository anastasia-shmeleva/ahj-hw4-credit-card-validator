import Widget from './Widget';
import CardChecker from './CardChecker';

const container = document.querySelector('#widget-container');
const cardChecker = new CardChecker();

const widget = new Widget(container, cardChecker);
widget.bindToDOM();
