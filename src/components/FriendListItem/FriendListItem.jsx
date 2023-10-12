import css from './FriendListItem.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <div className={css.imgWrapper}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      </div>

      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
