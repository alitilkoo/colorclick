const Select = ({ value, onChange, options }) => {
    return (
      <div>
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Select;
