import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <>
      <img className={styles.image} src={avatar} alt="Avatar" width="48" />
      <p className={styles.title}>{name}</p>
      <p className={`${styles.text} ${statusClass}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
