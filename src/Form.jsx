import React, { useState } from 'react';

function Form() {
  const [itemInput, setItemInput] = useState({
    itemName: '',
    price: '',
    description: ''
  });
  const [itemList, setItemList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemInput({ ...itemInput, [name]: value });
  };

  const addItem = () => {
    const { itemName, price, description } = itemInput;
    if (itemName && price && description) {
      setItemList([...itemList, itemInput]);
      setItemInput({ itemName: '', price: '', description: '' });
    } else {
      alert('Please fill out all fields');
    }
  };

  const removeItem = (index) => {
    const newList = [...itemList];
    newList.splice(index, 1);
    setItemList(newList);
  };

  return (
    <div>
      <div>
        <h2>Add Item</h2>
        <input
          type="text"
          placeholder="Item Name"
          name="itemName"
          value={itemInput.itemName}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={itemInput.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={itemInput.description}
          onChange={handleChange}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <h2>Item List</h2>
        {itemList.map((item, index) => (
          <div key={index}>
            <h3>{item.itemName}</h3>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
