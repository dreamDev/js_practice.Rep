const formSearch = document.querySelector('.form-search'),
  inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
  dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
  inputCitiesTo = formSearch.querySelector('.input__cities-to'),
  dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
  inputDateDepart = formSearch.querySelector('.input__date-depart'),
  cheapestTicket = document.getElementById('cheapest-ticket'),
  otherCheapTickets = document.getElementById('other-cheap-tickets');


const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
  proxy = 'https://cors-anywhere.herokuapp.com/',
  apiKey = 'a479c8a4632ab9b986ef5b2463848228',
  calendar = 'http://min-prices.aviasales.ru/calendar_preload',
  maxTicketsCount = 7;

let city = [];
let cheapTicket = [];


const getData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Response false')
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
};

const showCity = (input, list) => {
  // Очищаем textContent у li при каждом новом изменении в инпуте, что бы результаты не стакались.
  list.textContent = ""
  // Если в инпуте пустая строка, выходим из функции, во избежании показа списка всех городов.
  if (input.value === '') return
  // Приводим все строки к нижнему регистру, проверяем начинается ли какой то город со строки инпута, создаем новый массив с названиями городов если есть совпадения.
  const filterCity = city.filter(elem => {
    return elem.name
      .toLowerCase()
      .startsWith(input.value.toLowerCase())
  });
  // Перебираем массив городов, в названиях которых содержится подстрока инпута и вставляем li с названиями в dropdown.
  // В данном случае нам не нужно возвращать результат, поэтому используем forEach()
  filterCity.forEach(elem => {
    const li = document.createElement('li')
    li.classList.add('dropdown__city')
    li.textContent = elem.name
    list.append(li)
  });
};

const removeCityList = () => {
  const list = document.querySelectorAll('.dropdown__city');
  list.forEach(elem => elem.remove())
}

const selectCity = (e, input, list) => {
  if (e.target.tagName.toUpperCase() === 'LI') input.value = e.target.textContent
  list.textContent = ''
};

const getLinkAviasales = data => {

  const date = new Date(data.depart_date);
  const day = date.getDate();
  const month = date.getMonth();

  let link = 'https://www.aviasales.ru/search/';

  link += data.origin;
  link += day < 10 ? '0' + day : day;
  link += month < 10 ? '0' + month : month;
  link += data.destination + '1';

  return link

};

const getCityName = code => city.find(elem => elem.code === code).name;

const getChanges = num => {
  if (num) return num === 1 ? 'С одной пересадкой' : 'С двумя пересадками'
  else return 'Без пересадок'
};

const getDate = date => {
  return new Date(date).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
};

const createTicket = data => {
  const ticket = document.createElement('article');
  ticket.classList.add('ticket')

  let deep = '';

  if (data) {
    deep = `
      <h3 class="agent">${data.gate}</h3>
      <div class="ticket__wrapper">
        <div class="left-side">
          <a href="${getLinkAviasales(data)}" target="_blank" class="button button__buy">Купить
            за ${data.value}₽</a>
        </div>
        <div class="right-side">
          <div class="block-left">
            <div class="city__from">Вылет из города
              <span class="city__name">${getCityName(data.origin)}</span>
            </div>
            <div class="date">${getDate(data.depart_date)}</div>
          </div>

          <div class="block-right">
            <div class="changes">${getChanges(data.number_of_changes)}</div>
            <div class="city__to">Город назначения:
              <span class="city__name">${getCityName(data.destination)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    deep = '<h3>К сожалению на текущую дату билетов не нашлось!</h3>'
  }

  ticket.insertAdjacentHTML('afterbegin', deep)

  return ticket

};

const renderPricesYear = cheapTickets => {
  otherCheapTickets.innerHTML = '<h2>Самые дешевые билеты на другие даты</h2>'

  cheapTickets.sort((a, b) => a.value - b.value)

  for (let i = 0; i < cheapTickets.length && i <= maxTicketsCount; i++) {
    const ticket = createTicket(cheapTickets[i])
    otherCheapTickets.append(ticket)
  }
};

const renderPricesDay = cheapTicket => {
  cheapestTicket.innerHTML = '<h2>Самый дешевый билет на выбранную дату</h2>'

  const ticket = createTicket(cheapTicket[0]);
  cheapestTicket.append(ticket)
};

const renderBestPrices = (data, formDate) => {
  const bestPricesYear = data.best_prices
  const bestPricesDay = bestPricesYear.filter(elem => elem.depart_date === formDate)

  renderPricesYear(bestPricesYear)
  renderPricesDay(bestPricesDay)
};


inputCitiesFrom.addEventListener('input', () => showCity(inputCitiesFrom, dropdownCitiesFrom))
inputCitiesTo.addEventListener('input', () => showCity(inputCitiesTo, dropdownCitiesTo))

document.addEventListener('click', removeCityList)

dropdownCitiesFrom.addEventListener('click', e => selectCity(e, inputCitiesFrom, dropdownCitiesFrom))
dropdownCitiesTo.addEventListener('click', e => selectCity(e, inputCitiesTo, dropdownCitiesTo))

formSearch.addEventListener('submit', e => {

  e.preventDefault()

  // Формируем объект, что бы записать в его поля данные с формы, и в дальнейшем с ними работать.
  const formData = {
    from: city.find(elem => inputCitiesFrom.value === elem.name),
    to: city.find(elem => inputCitiesTo.value === elem.name),
    when: inputDateDepart.value
  };

  if (formData.from && formData.to) {
    // Формируем строку с параметрами для отправки запроса.
    const requestData = `?depart_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true&token=${apiKey}`;

    getData(calendar + requestData)
      .then(data => renderBestPrices(data, formData.when))
      .catch(error => {
        alert('К сожалению, в данном направлении нет рейсов.')
        console.error(error)
      })
  } else {
    alert('Введите корректное название города.')
  }

});


getData(proxy + citiesApi)
  .then(data => city = data
    .filter(elem => elem.name)
    .sort((a, b) => a.name > b.name ? 1 : -1))
  .then(data => console.log(data))