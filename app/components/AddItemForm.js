'use client'
import { useState } from 'react';

const AddItemForm = ({ nextStep, prevStep, addItem }) => {
  const [item, setItem] = useState({
    description: '',
    brand: '',
    serialNo: '',
    quality: '',
    cover: '',
    quantity: 1,
    totalValue: ''
  });

  const handleChange = (input) => (e) => {
    setItem({ ...item, [input]: e.target.value });
  };

  const handleSubmit = () => {
    addItem(item);
    setItem({
      description: '',
      brand: '',
      serialNo: '',
      quality: '',
      cover: '',
      quantity: 1,
      totalValue: ''
    });
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form>
        <label>
          Description:
          <input type="text" value={item.description} onChange={handleChange('description')} />
        </label>
        <label>
          Brand:
          <input type="text" value={item.brand} onChange={handleChange('brand')} />
        </label>
        <label>
          Serial No:
          <input type="text" value={item.serialNo} onChange={handleChange('serialNo')} />
        </label>
        <label>
          Quality:
          <input type="text" value={item.quality} onChange={handleChange('quality')} />
        </label>
        <label>
          Cover:
          <input type="text" value={item.cover} onChange={handleChange('cover')} />
        </label>
        <label>
          Quantity:
          <input type="number" value={item.quantity} onChange={handleChange('quantity')} min="1" />
        </label>
        <label>
          Total Value:
          <input type="text" value={item.totalValue} onChange={handleChange('totalValue')} />
        </label>
        <button type="button" onClick={prevStep}>Previous</button>
        <button type="button" onClick={handleSubmit}>Add Item</button>
        <button type="button" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default AddItemForm;
