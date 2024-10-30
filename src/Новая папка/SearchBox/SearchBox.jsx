import { useId } from "react";
import styles from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ filter, setFilter }) => {
  const searchfield = useId();

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchfield} className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={searchfield}
        value={filter}
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Enter name..."
      />
    </div>
  );
};
SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchBox;
