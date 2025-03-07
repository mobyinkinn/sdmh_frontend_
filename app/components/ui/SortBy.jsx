/* eslint-disable no-unused-vars */
import Select from "./Select";

function SortBy({ options, sort, setSort }) {
  function handleChange(e) {
    setSort(e.target.value);
  }

  return (
    <Select
      options={options}
      value={sort}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
