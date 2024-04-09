const accessProperty = (obj, propName) => {
  try {
    if (propName in obj) {
      return obj[propName];
    } else {
      throw new Error('свойство не определено');
    }
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}

let obj = { name: "Evgeniy" };
console.log(accessProperty(obj, "name"));
console.log(accessProperty(obj, "age"));