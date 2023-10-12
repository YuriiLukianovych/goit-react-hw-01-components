import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={`${css.friendList} list`}>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
