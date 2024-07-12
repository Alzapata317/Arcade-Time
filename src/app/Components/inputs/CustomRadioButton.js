import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomRadioButton = ({ options, name, onChange }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="custom-radio-group flex flex-col items-start m-[1.5vh]">
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
          <h1 className={`font-neon text-[3vh] ${selected === option.value ? 'selected text-neonYellow' : 'text-neonPurple'}`}>{option.value}</h1>
        </label>
      ))}
    </div>
  );
};

CustomRadioButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default CustomRadioButton;