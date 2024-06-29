const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('#number');

// operators
operators.forEach((operator) => {
  const calculate = (e) => {
    if (e.target.value === 'AC') {
      display.value = '';
    }
    else if (e.target.value === 'DE') {
      display.value = display.value.slice(0, -1);
    }
    else if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '/' || e.target.value === '.') {
      display.value += e.target.value
    }
    else if (e.target.value === '=') {
      display.value = eval(display.value);
    }
  }
  operator.addEventListener('click', calculate);
})

// numbers
numbers.forEach((number) => {
  const show = (e) => {
    display.value += e.target.value;
  }
  number.addEventListener('click', show);
})