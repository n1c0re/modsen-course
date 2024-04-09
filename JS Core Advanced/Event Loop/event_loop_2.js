const axios = require('axios');

async function fetchDataWithTimeout(url, timeout) {
  try {
    let response = await axios.get(url, {
      timeout: timeout
    });

    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Превышено время ожидания');
    } else {
      throw error;
    }
  }
}

async function fetchData() {
  let data = await fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 100);
  console.log(data);
}

fetchData();