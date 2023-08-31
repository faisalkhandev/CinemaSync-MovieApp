/* eslint-disable react/prop-types */
const FilterGroup = ({ minRating, onClickFilter, ratings }) => {
  return (
    <ul className="movieFilter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate ? "movieFilterItem active" : "movieFilterItem"
          }
          key={rate}
          onClick={() => onClickFilter(rate)}
        >
          {rate}+
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
