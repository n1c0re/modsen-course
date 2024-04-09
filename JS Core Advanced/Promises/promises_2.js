const axios = require('axios');

const loadUrls = (urls) => {
  let requests = urls.map(url => axios.get(url));

  return Promise.all(requests)
    .then(responses => {
      responses.forEach(response => console.log(response.data));
    })
    .catch(error => {
      console.error('Ошибка: ', error);
    });
}

const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'];
loadUrls(urls);