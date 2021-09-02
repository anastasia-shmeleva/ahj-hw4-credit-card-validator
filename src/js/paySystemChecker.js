export default function paySystemChecker(input) {
  const amex = /^(?:3[47][0-9]{13})$/;
  const masterCard = /^(?:5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9][0-9]|27[0-1][0-9]|2720)\d+$/;
  const visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  const diners = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
  const jcb = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
  const mir = /^(?:220[0-4])\d+$/;

  let text;

  if (input) {
    if (input.match(amex)) {
      text = 'American Express';
    } else if (input.match(masterCard)) {
      text = 'MasterCard';
    } else if (input.match(visa)) {
      text = 'Visa';
    } else if (input.match(discover)) {
      text = 'Discover';
    } else if (input.match(diners)) {
      text = 'Diners Club';
    } else if (input.match(jcb)) {
      text = 'JCB';
    } else if (input.match(mir)) {
      text = 'MIR';
    }
  }
  return text;
}
