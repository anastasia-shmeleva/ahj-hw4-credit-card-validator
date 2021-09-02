import CardChecker from '../CardChecker';
import Widget from '../Widget';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new Widget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(Widget.markup);
});

test('should validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const cardChecker = new CardChecker();

  const widget = new Widget(container, cardChecker);

  widget.bindToDOM();

  const inputEl = container.querySelector(Widget.inputSelector);
  inputEl.value = '378603335610783';

  const submit = container.querySelector(Widget.submitSelector);
  submit.click();

  expect(inputEl.classList.contains('valid')).toBeTruthy();
});
