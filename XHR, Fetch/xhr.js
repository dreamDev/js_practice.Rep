/* XMLHttpRequest */

// GET запрос

(function(){

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {

  // Создаем и сразу возвращаем новый промис с callback функцией внутри и параметрами resolve(в случае успеха) и reject(в случае ошибки).
  return new Promise((resolve, reject) => {

    // Создаем инстанс глобального класса и присваивам его переменной.
    const xhr = new XMLHttpRequest()

    // Открываем новое соединение с помощью метода open().
    // Первым параметром задаем метод запроса(GET, POST, DELETE, PUT, PATCH и тд...).
    xhr.open(method, url);

    console.log(xhr)

    // Ответ с сервера приходит в формате string('text'), и так как в таком формате мы не сможем работать с данными, необходимо конвертировать полученный ответ(данные).
    // Для этого мы можем указать инстансу класса XMLHttpRequest() что бы он распарсил ответ в формат json. 
    xhr.responseType = 'json';

    // С помощью метода JSON.parse() мы также можем спарсить ответ и получить данные с которыми сможем работать.
    // xhr.onload = () => console.log(JSON.parse(xhr.response));

    xhr.onload = () => {
      // Чтобы более универсально обрабатывать возможные ошибки, мы должны обратиться к полю status.
      // Все числа, которые больше 400 являются ошибками.
      if (xhr.status >= 400) reject(xhr.response)
      else resolve(xhr.response)
    };

    // Обработка ошибки. В случае ошибки, в консоле появится пустой объект.
    xhr.onerror = () => reject(xhr.response);

    // С помощью метода send() непосредственно отправляем запрос на сервер.
    xhr.send();

  })

}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

})();


// POST запрос 

(function(){

  const requestURL = 'https://jsonplaceholder.typicode.com/users';

  function sendRequest(method, url, body = null) {
  
    return new Promise((resolve, reject) => {
  
      const xhr = new XMLHttpRequest()

      xhr.open(method, url);

      // С помощью метода setRequestHeader() явно указываем, что мы отправляем какие то данные в формате json.
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      console.log(xhr)

      xhr.responseType = 'json';  
      xhr.onload = () => {
        if (xhr.status >= 400) reject(xhr.response)
        else resolve(xhr.response)
      };
  
      xhr.onerror = () => reject(xhr.response);

      // Что бы нам обработать body в функции sendRequest(), нужно передать в метод send() этот объект(body), для того что бы отправить какие то данные по сети.
      // Но по сеты мы так же должны отправлять не настоящие объекты, а объекты в строковом формате, так же как и получаем, поэтому необходимо использовать метод JSON.stringify().
      xhr.send(JSON.stringify(body));
  
    })
  
  }

  const body = {
    name: 'Ruslan',
    age: 26
  }
  
  // Метод POST должен принимать дополнительные параметры(body), то, с чем отправляется запрос.
  sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

})();
