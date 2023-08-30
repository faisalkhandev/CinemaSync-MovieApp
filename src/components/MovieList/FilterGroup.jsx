/* eslint-disable react/prop-types */
const FilterGroup = ({ minRating, handleRating }) => {
  return (
    <ul className="movieFilter">
      <li
        className={
          minRating === 8 ? "movieFilterItem active" : "movieFilterItem"
        }
        onClick={() => handleRating(8)}
      >
        8+
      </li>
      <li
        className={
          minRating === 7 ? "movieFilterItem active" : "movieFilterItem"
        }
        onClick={() => handleRating(7)}
      >
        7+
      </li>
      <li
        className={
          minRating === 6 ? "movieFilterItem active" : "movieFilterItem"
        }
        onClick={() => handleRating(6)}
      >
        6+
      </li>
    </ul>
  );
};

export default FilterGroup;
