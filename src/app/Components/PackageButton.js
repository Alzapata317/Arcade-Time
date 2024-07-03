import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PackageButton = ({ options, name, onChange }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="custom-radio-group flex items-center justify-center w-full mt-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`custom-radio ${selected === option.value ? 'selected' : ''}`}
          onClick={() => handleClick(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleClick(option.value)}
            style={{ display: 'none' }}
          />
          {/* <img src={option.image} alt={option.label} /> */}
          <div className={`w-[175px] h-36 text-center flex flex-col border-2 p-2 rounded-md ${selected === option.value ? 'selected text-neonYellow border-neonYellow' : 'text-neonPurple border-neonPurple'}`}>
            <div className='flex w-full justify-center'>
                <h1 className='font-neonSans text-5xl'>{option.value}</h1>
                <p className='font-neonSans text-4xl pt-1'>$</p>
            </div>
            <p className='text-neonBlue text-md'>4 Pizzas</p>
            <p className='text-neonBlue text-md'>6 Pitchers</p>
            <p className='text-neonBlue text-md w-full'>{option.infinite}</p>
          </div>

        </label>
      ))}
    </div>
  );
};

PackageButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default PackageButton;