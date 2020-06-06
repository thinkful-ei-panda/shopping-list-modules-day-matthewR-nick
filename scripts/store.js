import item from './item.js';

let items= [];

function findById (id){
  console.log(`find by id is running`)
  console.log(items)
  const FOUND_ITEM = this.items.find((item => item.id === id));
  return FOUND_ITEM;
}

function addItem(name) {
  try {
    item.validateName(name);
    const CREATED_ITEM = item.create(name);
    this.items.push(CREATED_ITEM);
  }catch(err){
    console.log(`cannot add item: ${err.message}`);
  }
}

function findAndToggleChecked(id){
  if(findById(id).checked === true){
    findById(id).checked = false;
  } else if(findById(id).checked === false){
    findById(id).checked = true;
  }
}

function findAndDelete(id){
  this.items = this.items.filter(item => item.id !== id );
}

function findAndUpdateName(id, newName){
  try {
    findById(id).name = item.validateName(newName);

  }catch(err){
    console.log(`cannot add item: ${err.message}`);
  }
}



export default {
  items,
  hideCheckedItems: false,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};


