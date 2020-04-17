(function () {

  const input = document.getElementById('username');
  const form = document.getElementById('form');
  const notify = document.createElement('div');
  notify.id = 'notify';
  notify.style.display = 'none';

  form.appendChild(notify);

  input.addEventListener('invalid', function (event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      input.className = 'invalid shake';
      notify.textContent = 'Username should only contain lowercase letters e.g. john';
      notify.className = 'error';
      notify.style.display = 'block';
    }
  });

  input.addEventListener('input', function (event) {
    if (notify.style.display === 'block') {
      input.className = '';
      notify.style.display = 'none';
    }
  });

})();