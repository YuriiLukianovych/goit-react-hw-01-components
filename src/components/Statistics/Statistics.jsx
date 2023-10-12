import css from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={`${css.statList} list`}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={css.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function randomColor() {
  const color = '#' + Math.random().toString(16).slice(3, 9);
  return color;
}

export default Statistics;
