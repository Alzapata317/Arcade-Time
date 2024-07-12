import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TimeButton = ({ options, name, onChange }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="custom-radio-group flex items-center justify-evenly m-4 mb-6">
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
          <div className={`pm-sm:h-[13vh] pm-sm:w-[25vw] pm-md:w-[18vw] lm-sm:h-[15vh] lm-sm:w-[9vw] lm-lg:w-[7vw] lm-md:h-[12vh] justify-center flex border-2 p-2 rounded-md ${selected === option.value ? 'selected text-neonYellow border-neonYellow' : 'text-neonPurple border-neonPurple'}`}>
            <h1 className='font-neonSans pm-sm:text-[8vh] lm-sm:text-[8vh] '>{option.value}</h1>
            <h1 className='font-neon pm-sm:text-[3vh] lm-sm:text-[3vh]'>HR</h1>
          </div>
          
        </label>
      ))}
    </div>
  );
};

TimeButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TimeButton;