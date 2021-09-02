import paySystemChecker from './paySystemChecker';

export default class Widget {
  constructor(parentEl, cardChecker) {
    this.parentEl = parentEl;
    this.cardChecker = cardChecker;
    this.paySystemChecker = paySystemChecker;
  }

  static get markup() {
    return `<div class="col-md-5">
        <h3>Check your credit card number</h3>
        <ul class="cards list-unstyled">
            <li><span class="card visa" title="Visa">Visa</span></li>
            <li><span class="card master" title="MasterCard">MasterCard</span></li>
            <li><span class="card amex" title="American Express">American Express</span></li>
            <li><span class="card discover" title="Discover">Discover</span></li>
            <li><span class="card jcb" title="JCB">JCB</span></li>
            <li><span class="card diners_club" title="Diners">Diners</span></li>
            <li><span class="card mir" title="MIR">MIR</span></li>
        </ul>
        <form id="form" class="form-inline" novalidate="novalidate">
            <div class="form-group">
            <input class="form-control col-md-6" id="card_number" name="card_number" type="text" placeholder="Credit card number">
            <a id="submitform" class="btn btn-success">Click to Validate</a> 
            </div>
        </form>    
    </div>`;
  }

  static get inputSelector() {
    return '#card_number';
  }

  static get submitSelector() {
    return '#submitform';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));

    const input = this.parentEl.querySelector(this.constructor.inputSelector);
    input.addEventListener('keydown', (evt) => this.onKeyDown(evt));
  }

  onSubmit() {
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    inputEl.classList.remove('valid', 'invalid');

    if (this.cardChecker.luhnAlgorithmCheck(inputEl.value) === true) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }

    const text = this.paySystemChecker(inputEl.value);
    this.insertDiv(text);
  }

  onKeyDown() {
    const paySystem = this.parentEl.querySelector('.pay__system');
    if (paySystem) {
      paySystem.parentNode.removeChild(paySystem);
    }
  }

  insertDiv(text) {
    this.parentEl.querySelector('.col-md-5').insertAdjacentHTML('beforeend', `<div class="pay__system">${text}</div>`);
  }
}
