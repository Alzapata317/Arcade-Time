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
          <div className={`pm-sm:h-[20vh] pm-sm:w-[40vw] pm-md:w-[27vw] lm-sm:w-[13vw] lm-sm:h-[22vh] lm-md:w-[18vw] lm-md:h-[20vh] lm-lg:w-[12vw] lm-lg:h-[20vh] text-center flex flex-col border-2 p-2 rounded-md ${selected === option.value ? 'selected text-neonYellow border-neonYellow' : 'text-neonPurple border-neonPurple'}`}>
            <div className='flex w-full justify-center'>
                <h1 className='font-neonSans text-[5vh]'>{option.value}</h1>
                <p className='font-neonSans text-[3.75vh] pt-[1vh]'>$</p>
            </div>
            <p className='text-neonBlue text-[2vh]'>4 Pizzas</p>
            <p className='text-neonBlue text-[2vh]'>6 Pitchers</p>
            <p className='text-neonBlue text-[2vh] w-full'>{option.infinite}</p>
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
      label: PropTypes.string.isRequired,
      infinite: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default PackageButton;