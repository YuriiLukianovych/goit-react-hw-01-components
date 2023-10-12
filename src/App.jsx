import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import FriendList from 'components/FriendList/FriendList';
import userJson from './data/user.json';
import css from './App.module.scss';

const { username, tag, location, avatar, stats } = userJson;

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
