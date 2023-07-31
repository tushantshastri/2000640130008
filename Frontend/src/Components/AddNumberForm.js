// AddNumberForm.js
import React, { useState } from 'react';

const AddNumberForm = ({ onAddNumber }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNumber({ value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Add Number</button>
    </form>
  );
};

export default AddNumberForm;
