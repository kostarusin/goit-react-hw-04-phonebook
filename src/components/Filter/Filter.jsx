import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <>
      <label className={style.label}>
        Find contacts by name{' '}
        <input
          className={style.input}
          type="text"
          value={value}
          onChange={onFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
