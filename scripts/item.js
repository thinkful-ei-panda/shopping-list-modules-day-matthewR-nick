import item from './item.js';

function validateName(name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
  else {
    return name;
  }
}

export default {
  validateName
};