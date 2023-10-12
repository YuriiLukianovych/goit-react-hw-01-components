import css from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={`${css.friendList} list`}>
      {friends.map(el => {
        return (
          <li key={el.id} className={css.item}>
            <span
              className={`${css.status} ${el.isOnline ? css.online : ''}`}
            ></span>
            <div className={css.imgWrapper}>
              <img
                className={css.avatar}
                src={el.avatar}
                alt="User avatar"
                width="48"
              />
            </div>

            <p className={css.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
