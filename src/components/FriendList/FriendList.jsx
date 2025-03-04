import friend from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={friend.list}>
      {friends.map(item => (
        <li className={friend.item} key={item.id}>
          <img
            className={friend.image}
            src={item.avatar}
            alt="Avatar"
            width="48"
          />
          <p className={friend.title}>{item.name}</p>
          <p
            className={friend.text}
            style={{ color: item.isOnline ? 'green' : 'red' }}
          >
            {item.isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
