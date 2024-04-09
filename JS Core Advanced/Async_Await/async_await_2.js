const axios = require('axios');

async function loadDataAndSendRequest(firstUrl, secondUrl) {
  try {
    const firstResponse = await axios.get(firstUrl).then(response => response.data);
    return seconResponse = await axios.post(secondUrl, firstResponse).then(response => response.data);
  } catch (error) {
    console.error('Ошибка:', error.message);
    return null;
  }
}

const firstUrl = 'first-url.com/data';
const secondUrl = 'second-url.com/api';
loadDataAndSendRequest(firstUrl, secondUrl)
  .then(result => {
    console.log('Результат выполнения запроса ко второму серверу:', result);
  });