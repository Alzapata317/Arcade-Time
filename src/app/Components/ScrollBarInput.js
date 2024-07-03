import React, { useState } from 'react';

const ScrollBarInput = ({ name, min, max, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-[350px] flex flex-col h-[100px] justify-around">
        <div className="w-full flex flex-col items-center">
            <h1 className="text-neonBlue text-7xl font-neonSans">{value}</h1>
        </div>
        <input
            type="range"
            id={name}
            name={name}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            className="scroll-bar"
        />
    </div>
  );
};

export default ScrollBarInput;