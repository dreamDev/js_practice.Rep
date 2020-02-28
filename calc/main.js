(function () {

  const operators = document.querySelectorAll('.calc__btn');

  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');

  operators.forEach(function (element) {
    element.addEventListener('click', function (e) {
      let Number1 = Number(input1.value);
      let Number2 = Number(input2.value);
      let result = document.createElement('div');
      result.className = 'result';
      if (e.currentTarget.innerText === '+') {
        result.innerText = Number1 + Number2
      } else if (e.currentTarget.innerText === '-') {
        result.innerText = Number1 - Number2
      } else if (e.currentTarget.innerText === '*') {
        result.innerText = Number1 * Number2
      } else if (e.currentTarget.innerText === '/') {
        result.innerText = Number1 / Number2
      }
      document.body.append(result);
      setTimeout(function () {
        result.remove()
      }, 2000);
    });
  })

})();

