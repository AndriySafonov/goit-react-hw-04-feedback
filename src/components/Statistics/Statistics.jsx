import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.statistics_list}>
        <li className={css.statistics_item}>Good: {good}</li>
        <li className={css.statistics_item}>Neutral: {neutral}</li>
        <li className={css.statistics_item}>Bad: {bad}</li>
      </ul>
      <p className={css.total}>Total: {total}</p>
      <p className={css.statistics_percentage}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;