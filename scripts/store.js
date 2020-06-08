import item from './item.js';

let items= [];

function findById (id){
  console.log(`find by id is running`)
  // console.log(items)
  const FOUND_ITEM = items.find((item => item.id === id));
  console.log(FOUND_ITEM)
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
  console.log(findById(id) + "true section");
  if(findById(id).checked === true){
    findById(id).checked = false;
    console.log(findById(id).checked + "true section");
  } else if(findById(id).checked === false){
    findById(id).checked = true;
    console.log(findById(id).checked + "false section");
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


