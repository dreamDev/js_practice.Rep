/* Fetch */

// GET запрос

(function () {

  const requestURL = 'https://jsonplaceholder.typicode.com/users';

  function sendRequest(method, url, body = null) {

    // Метод fetch() возвращает нам промис, а учитывая что наша функция sendRequest() итак возвращает нам промис, то сразу пишем return.
    // Первым параметром метод fetch() принимает URL.
    return fetch(url)
      .then(response => response.json())

  }

  sendRequest('GET', requestURL)
    // При успешвном выполнении(onfulfilled) делаем что либо с данными
    .then(data => console.log(data))
    // При ошибке(onrejected) делаем что либо с ней
    .catch(err => console.log(err))


})();


// POST запрос

(function () {

  const requestURL = 'https://jsonplaceholder.typicode.com/users';

  function sendRequest(method, url, body = null) {

    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        // Обрабатываем возможные ошибки в ответе(response) от сервера.
        if (response.ok) return response.json()
        else return response.json()
          .then(error => {
            const e = new Error('Something goes wrong!')
            e.data = error
            throw e
          })
      })

  }

  const body = {
    name: 'Elena',
    age: 22
  }

  // Метод POST должен принимать дополнительные параметры(body), то, с чем отправляется запрос.
  sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

})();


// Async, Await

(function () {

  const requestURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

  const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
  }

  async function sendRequest(url) {
    
    try {
      await delay(2000)
      const response = await fetch(url)
      const data = await response.json()
      console.log('Data:', data)
    } catch(e) {
      console.error(e)
    }

  }

  sendRequest(requestURL)

})();