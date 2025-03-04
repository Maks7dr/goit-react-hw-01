import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        <img
          className={css.image}
          src={image}
          alt={tag}
          width={200}
          height={200}
        />
        <p className={css.title}>{name}</p>
        <p className={css.suntitle}>@{tag}</p>
        <p className={css.suntitle}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
